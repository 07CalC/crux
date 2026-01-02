#!/usr/bin/env python3
"""
NEET PG Round 2 PDF Parser - OPTIMIZED VERSION
Handles dual-column format with Round 1 and Round 2 data
Extracts only Round 2 allotments (ignores Round 1 and "Did not opt" cases)
Exports as JavaScript module for database import

OPTIMIZATIONS:
- Better PDF reading with lattice mode
- Smarter column detection
- Reduced data loss through flexible parsing
- Progress tracking
- Better error handling
- R1 category lookup from neetPgR1_2025.js
"""

import json
import sys
import re
from collections import defaultdict

try:
    import tabula
except ImportError:
    print("Error: tabula-py not installed.")
    print("Install with: pip install tabula-py")
    sys.exit(1)


# -------------------- UTIL --------------------

def clean_text(text):
    if not text or text != text:
        return ""
    return str(text).replace("\r", " ").replace("\n", " ").strip()


# -------------------- R1 DATA LOADER --------------------

def load_r1_data(r1_js_path):
    """
    Load R1 data from neetPgR1_2025.js for category lookup.
    Returns a dict mapping (rank, institute_key, course_key, quota) -> seatType
    """
    print(f"📂 Loading R1 data from {r1_js_path}...")
    
    try:
        with open(r1_js_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Extract JSON array from JS file (after "export const neetPgR1_2025 = ")
        json_start = content.find('[')
        json_end = content.rfind(']') + 1
        
        if json_start == -1 or json_end == 0:
            print("   ⚠️ Could not parse R1 JS file, skipping R1 lookup")
            return {}
        
        r1_entries = json.loads(content[json_start:json_end])
        print(f"   ✓ Loaded {len(r1_entries)} R1 entries")
        
        # Create lookup dict: For each rank in range, map to seatType
        # We'll create a more flexible lookup
        r1_lookup = {}
        
        for entry in r1_entries:
            # Normalize institute and course for matching
            inst_norm = entry['institute'].lower().strip()
            course_norm = entry['academicProgramName'].lower().strip()
            quota = entry.get('quota', 'All India')
            seat_type = entry['seatType']
            
            # Add all ranks in the range
            for rank in range(entry['openRank'], entry['closeRank'] + 1):
                # Create multiple keys for better matching
                key = (rank, inst_norm, course_norm, quota)
                r1_lookup[key] = seat_type
                
                # Also add a simpler key with just rank and quota for fallback
                simple_key = (rank, quota, seat_type)
                if simple_key not in r1_lookup:
                    r1_lookup[simple_key] = seat_type
        
        print(f"   ✓ Created lookup table with {len(r1_lookup)} entries")
        return r1_lookup
        
    except FileNotFoundError:
        print(f"   ⚠️ R1 file not found: {r1_js_path}")
        print(f"   R1 category lookup will not be available")
        return {}
    except Exception as e:
        print(f"   ⚠️ Error loading R1 data: {e}")
        return {}


def lookup_r1_category(r1_lookup, rank, institute, course, quota):
    """
    Lookup seatType from R1 data based on rank, institute, course, and quota.
    Returns (allotted_cat, cand_cat) tuple.
    """
    if not r1_lookup:
        return "Open", "General"
    
    # Normalize for matching
    inst_norm = institute.lower().strip()
    course_norm = course.lower().strip()
    
    # Try exact match first
    key = (rank, inst_norm, course_norm, quota)
    if key in r1_lookup:
        seat_type = r1_lookup[key]
        return seat_type, seat_type  # Use same for both
    
    # Try partial institute name match (first 30 chars)
    if len(inst_norm) > 30:
        inst_short = inst_norm[:30]
        key_short = (rank, inst_short, course_norm, quota)
        if key_short in r1_lookup:
            seat_type = r1_lookup[key_short]
            return seat_type, seat_type
    
    # Try with simplified course matching (first 20 chars)
    if len(course_norm) > 20:
        course_short = course_norm[:20]
        key_course = (rank, inst_norm, course_short, quota)
        if key_course in r1_lookup:
            seat_type = r1_lookup[key_course]
            return seat_type, seat_type
    
    # Last resort: just find ANY entry with this rank and quota
    for (r, q, st) in r1_lookup:
        if isinstance(r, int) and r == rank and q == quota:
            return st, st
    
    # Default fallback
    return "Open", "General"


# -------------------- INDIAN STATES LIST --------------------

INDIAN_STATES = {
    "andhra pradesh", "arunachal pradesh", "assam", "bihar", "chhattisgarh",
    "goa", "gujarat", "haryana", "himachal pradesh", "jharkhand", "karnataka",
    "kerala", "madhya pradesh", "maharashtra", "manipur", "meghalaya", "mizoram",
    "nagaland", "odisha", "punjab", "rajasthan", "sikkim", "tamil nadu",
    "telangana", "tripura", "uttar pradesh", "uttarakhand", "west bengal",
    "andaman and nicobar islands", "chandigarh", "dadra and nagar haveli",
    "daman and diu", "lakshadweep", "puducherry", "jammu and kashmir",
    "ladakh", "delhi (nct)", "nct"
}


def is_pincode(text: str) -> bool:
    """Check if text is a 6-digit pincode"""
    return bool(re.fullmatch(r'\d{6}', text.strip()))


def is_state(text: str) -> bool:
    """Check if text is a state name (not a city)"""
    text_lower = text.lower().strip()
    
    if text_lower in INDIAN_STATES:
        return True
    
    if "(" in text and ")" in text:
        return True
    
    return False


def is_email(text: str) -> bool:
    """Check if text contains an email address"""
    return bool(re.search(r'[\w\.-]+@[\w\.-]+\.\w+', text))


def extract_institute_and_place(raw_institute: str) -> str:
    """
    Extract institute name and place from raw institute string.
    """
    if not raw_institute:
        return ""
    
    tokens = [t.strip() for t in raw_institute.split(',') if t.strip()]
    
    if not tokens:
        return ""
    
    institute_name = tokens[0]
    
    if len(tokens) == 1:
        return institute_name
    
    place = None
    
    for i in range(len(tokens) - 1, 0, -1):
        token = tokens[i]
        
        if not token or len(token) < 2:
            continue
        
        if is_pincode(token):
            continue
        
        if is_state(token):
            continue
        
        if is_email(token):
            continue
        
        if token.lower().strip() == institute_name.lower().strip():
            continue
        
        token_lower = token.lower()
        malformed_keywords = ['state', 'stateuttar', 'stateuttar pradesh', 'pradesh,', 'nadu,']
        if any(kw in token_lower for kw in malformed_keywords):
            continue
        
        if len(token) > 100:
            continue
            
        address_keywords = ['road', 'rd', 'street', 'st', 'marg', 'salai', 'sector', 
                           'block', 'phase', 'near', 'opposite']
        if sum(1 for kw in address_keywords if kw in token_lower) >= 2:
            continue
        
        place = token
        break
    
    if not place:
        for i in range(1, len(tokens)):
            token = tokens[i]
            token_lower = token.lower()
            
            if token.lower().strip() == institute_name.lower().strip():
                continue
            
            if len(token) > 3 and len(token) < 30 and not any(char.isdigit() for char in token):
                if i + 1 < len(tokens) and is_state(tokens[i + 1]):
                    place = token
                    break
    
    if place:
        return f"{institute_name}, {place}"
    else:
        return institute_name


def is_likely_institute(text: str) -> bool:
    """Check if text looks like an institute name"""
    if not text or len(text) < 5:
        return False
    
    text_lower = text.lower()
    keywords = ['medical', 'college', 'hospital', 'institute', 'university', 
                'aiims', 'pgimer', 'jipmer', 'dental', 'nursing']
    
    return any(kw in text_lower for kw in keywords)


def is_likely_course(text: str) -> bool:
    """Check if text looks like a course name"""
    if not text or len(text) < 3:
        return False
    
    text_lower = text.lower()
    keywords = ['md', 'ms', 'm.d', 'm.s', 'diploma', 'dnb', 'dch', 'da', 'dgo',
                'medicine', 'surgery', 'paediatrics', 'pediatrics', 'orthopaedics',
                'ophthalmology', 'anaesthesia', 'anesthesia', 'radiology', 'pathology']
    
    return any(kw in text_lower for kw in keywords)


# -------------------- SMART COLUMN DETECTION --------------------

def detect_columns(row):
    """
    Intelligently detect where institute and course are in the row.
    Returns dict with detected column indices or None if not found.
    
    Expected R1 structure (columns 0-4 or 0-6):
    0: Rank
    1: R1 Allotted Quota
    2: R1 Institute
    3: R1 Course
    4: R1 Allotted Category (THIS WAS MISSING!)
    5: R1 Candidate Category (optional)
    Then R2 data starts...
    """
    result = {
        'rank': None,
        'r1_quota': None,
        'r1_institute': None,
        'r1_course': None,
        'r1_allotted_cat': None,
        'r1_cand_cat': None,
        'r1_remarks': None,
        'r2_quota': None,
        'r2_institute': None,
        'r2_course': None,
        'r2_allotted_cat': None,
        'r2_cand_cat': None,
        'r2_remarks': None
    }
    
    # First column should be rank
    if len(row) > 0:
        result['rank'] = 0
    
    # Search for institutes (there should be 2: R1 and R2)
    institute_indices = []
    course_indices = []
    
    for i in range(1, len(row)):
        cell = clean_text(row[i])
        if is_likely_institute(cell):
            institute_indices.append(i)
        elif is_likely_course(cell):
            course_indices.append(i)
    
    # Typically R1 institute is around index 2, R2 institute is around 5-7
    if len(institute_indices) >= 2:
        # First institute is likely R1
        result['r1_institute'] = institute_indices[0]
        # Second institute is likely R2
        result['r2_institute'] = institute_indices[1]
        
        # Quota is typically before institute
        if result['r1_institute'] > 1:
            result['r1_quota'] = result['r1_institute'] - 1
        
        if result['r2_institute'] > 1:
            result['r2_quota'] = result['r2_institute'] - 1
    
    elif len(institute_indices) == 1:
        # Only one institute found, could be R1 or R2
        idx = institute_indices[0]
        if idx <= 3:
            result['r1_institute'] = idx
            if idx > 1:
                result['r1_quota'] = idx - 1
        else:
            result['r2_institute'] = idx
            if idx > 1:
                result['r2_quota'] = idx - 1
    
    # Courses typically follow institutes
    # R1 structure: Quota, Institute, Course, Allotted Category, Candidate Category, Remarks
    if result['r1_institute'] and result['r1_institute'] + 1 < len(row):
        result['r1_course'] = result['r1_institute'] + 1
        # Category info comes after course
        if result['r1_course'] + 1 < len(row):
            result['r1_allotted_cat'] = result['r1_course'] + 1
        if result['r1_course'] + 2 < len(row):
            result['r1_cand_cat'] = result['r1_course'] + 2
        if result['r1_course'] + 3 < len(row):
            result['r1_remarks'] = result['r1_course'] + 3
    
    if result['r2_institute'] and result['r2_institute'] + 1 < len(row):
        result['r2_course'] = result['r2_institute'] + 1
        # Categories come after course
        if result['r2_course'] + 1 < len(row):
            result['r2_allotted_cat'] = result['r2_course'] + 1
        if result['r2_course'] + 2 < len(row):
            result['r2_cand_cat'] = result['r2_course'] + 2
        # Remarks is typically the last column
        result['r2_remarks'] = len(row) - 1
    
    return result


# -------------------- PDF EXTRACTION --------------------

def extract_neet_r2_data(pdf_path: str, r1_lookup: dict):
    """
    Extract Round 2 data from NEET PG Round 2 PDF with optimized parsing.
    Uses r1_lookup to get correct categories for R1 fallback entries.
    """
    print("\n🔍 Starting optimized PDF extraction...")
    print("   Reading PDF with tabula (lattice mode for better accuracy)...")
    
    # Try lattice mode first (better for structured tables)
    try:
        dfs = tabula.read_pdf(
            pdf_path, 
            pages="all", 
            multiple_tables=True,
            lattice=True,  # Better for structured tables
            pandas_options={'header': None}  # Don't assume first row is header
        )
        print(f"   ✓ Successfully read PDF using lattice mode")
    except:
        # Fallback to stream mode
        print("   ⚠ Lattice mode failed, trying stream mode...")
        dfs = tabula.read_pdf(
            pdf_path, 
            pages="all", 
            multiple_tables=True,
            stream=True
        )
        print(f"   ✓ Successfully read PDF using stream mode")
    
    print(f"   ✓ Found {len(dfs)} tables to process\n")

    all_entries = []
    skipped_invalid = 0
    used_r1_fallback = 0
    skipped_no_data = 0
    
    # Statistics
    tables_processed = 0
    tables_skipped_too_small = 0
    rows_with_r2 = 0
    rows_with_r1_only = 0

    for table_idx, df in enumerate(dfs):
        if df.empty:
            print(f"⊘ Table {table_idx + 1}/{len(dfs)}: Empty, skipping...")
            continue

        valid_in_table = 0
        print(f"\n{'='*60}")
        print(f"📊 Processing table {table_idx + 1}/{len(dfs)}")
        print(f"{'='*60}")
        print(f"   Columns: {len(df.columns)}")
        print(f"   Rows: {len(df)}")

        # IMPROVED: Don't skip tables with fewer columns - they might have data
        # Only skip if < 5 columns (definitely not enough)
        if len(df.columns) < 5:
            print(f"   ⚠ Skipping table (too few columns: {len(df.columns)} < 5)\n")
            tables_skipped_too_small += 1
            continue

        print(f"   ✓ Valid column count, processing rows...")

        # Check if first row is header
        first_row = df.iloc[0].tolist()
        has_header = any("Rank" in str(cell) or "Quota" in str(cell) or "Institute" in str(cell) 
                        for cell in first_row if cell and cell == cell)
        start_idx = 1 if has_header else 0
        
        if has_header:
            print(f"   ✓ Detected header row, starting from row 2")
        else:
            print(f"   ✓ No header detected, starting from row 1")

        total_rows = len(df.iloc[start_idx:])
        print(f"   ⏳ Processing {total_rows} data rows...")
        
        rows_processed = 0

        for row_idx, row in df.iloc[start_idx:].iterrows():
            rows_processed += 1
            
            # Show progress every 50 rows (more frequent updates)
            if rows_processed % 50 == 0:
                print(f"      ... {rows_processed}/{total_rows} rows (found {valid_in_table} valid entries, skipped {skipped_invalid})")
            
            row = row.tolist()
            
            # IMPROVED: Process rows with at least 5 columns (was 10)
            if len(row) < 5:
                continue

            # Extract rank from first column
            rank = clean_text(row[0])
            if not rank or not rank.isdigit():
                skipped_invalid += 1
                continue

            # SMART COLUMN DETECTION
            cols = detect_columns(row)
            
            # Determine if we should use R2 or R1 data
            use_r1_data = False
            r2_data_valid = False
            
            # Check if R2 data exists
            if cols['r2_institute'] is not None and cols['r2_course'] is not None:
                r2_institute = clean_text(row[cols['r2_institute']])
                r2_course = clean_text(row[cols['r2_course']])
                
                # Check if R2 remarks indicate "did not opt"
                r2_remarks = ""
                if cols['r2_remarks'] is not None:
                    r2_remarks = clean_text(row[cols['r2_remarks']])
                
                # Validate R2 data
                if r2_institute and r2_course and \
                   r2_institute not in ["-", "--", "---", "NA", "N/A"] and \
                   r2_course not in ["-", "--", "---", "NA", "N/A"]:
                    
                    # Check if user opted out
                    if "did not opt" not in r2_remarks.lower() and "not opt" not in r2_remarks.lower():
                        r2_data_valid = True
            
            # If R2 data is not valid, try R1
            if not r2_data_valid:
                use_r1_data = True
            
            # Extract data based on which round we're using
            try:
                if use_r1_data and cols['r1_institute'] is not None and cols['r1_course'] is not None:
                    # Use Round 1 data
                    quota = clean_text(row[cols['r1_quota']]) if cols['r1_quota'] is not None else "All India"
                    institute = clean_text(row[cols['r1_institute']])
                    course = clean_text(row[cols['r1_course']])
                    
                    # Validate R1 data
                    if not institute or not course:
                        skipped_invalid += 1
                        continue
                    
                    if institute in ["-", "--", "---", "NA", "N/A"] or \
                       course in ["-", "--", "---", "NA", "N/A"]:
                        skipped_invalid += 1
                        continue
                    
                    # Lookup R1 category from R1 data using rank
                    allotted_cat, cand_cat = lookup_r1_category(
                        r1_lookup, 
                        int(rank), 
                        institute, 
                        course, 
                        quota
                    )
                    
                    used_r1_fallback += 1
                    rows_with_r1_only += 1
                    
                elif r2_data_valid:
                    # Use Round 2 data
                    quota = clean_text(row[cols['r2_quota']]) if cols['r2_quota'] is not None else "All India"
                    institute = clean_text(row[cols['r2_institute']])
                    course = clean_text(row[cols['r2_course']])
                    allotted_cat = clean_text(row[cols['r2_allotted_cat']]) if cols['r2_allotted_cat'] is not None else "Open"
                    cand_cat = clean_text(row[cols['r2_cand_cat']]) if cols['r2_cand_cat'] is not None else "General"
                    
                    rows_with_r2 += 1
                    
                else:
                    # No valid data found
                    skipped_no_data += 1
                    continue

                all_entries.append({
                    "rank": int(rank),
                    "quota": quota if quota and quota != "-" else "All India",
                    "institute": institute,
                    "course": course,
                    "category": allotted_cat if allotted_cat and allotted_cat not in ["-", "NA"] else "Open",
                    "candidate_category": cand_cat if cand_cat and cand_cat not in ["-", "NA"] else "General",
                    "used_r1": use_r1_data,
                })
                valid_in_table += 1
                
            except (ValueError, IndexError) as e:
                skipped_invalid += 1
                continue

        tables_processed += 1
        print(f"   ✓ Table {table_idx + 1} complete: Found {valid_in_table} valid entries")

    print(f"\n{'='*60}")
    print(f"📊 EXTRACTION SUMMARY")
    print(f"{'='*60}")
    print(f"  ✅ Valid entries extracted: {len(all_entries)}")
    print(f"  📊 Used Round 2 data: {rows_with_r2}")
    print(f"  📊 Used Round 1 fallback: {rows_with_r1_only}")
    print(f"  ⊘ Skipped (invalid rank/data): {skipped_invalid}")
    print(f"  ⊘ Skipped (no valid R1/R2 data): {skipped_no_data}")
    print(f"  📊 Tables processed: {tables_processed}")
    print(f"  ⊘ Tables skipped (too small): {tables_skipped_too_small}")
    print(f"{'='*60}\n")

    return all_entries


# -------------------- ORCR FORMAT --------------------

def convert_to_orcr_format(entries):
    """
    Convert entries to ORCR format and consolidate duplicates.
    OPTIMIZED: Process in batches and use efficient grouping.
    """
    print("🔄 Converting to ORCR format...")
    print(f"   Processing {len(entries)} entries...")
    
    # Group by key immediately (more efficient)
    groups = defaultdict(list)
    
    batch_size = 1000
    for idx, e in enumerate(entries):
        if (idx + 1) % batch_size == 0:
            print(f"   ... processed {idx + 1}/{len(entries)} entries (found {len(groups)} unique combinations)")
        
        # Create key for grouping
        institute = extract_institute_and_place(e["institute"])
        key = (
            institute,
            e["course"],
            e["quota"],
            e["category"],
            "Gender-Neutral"  # Fixed gender
        )
        
        groups[key].append(e["rank"])
    
    print(f"   ✓ Grouped into {len(groups)} unique combinations")
    print(f"   ✓ Will merge {len(entries) - len(groups)} duplicate entries")
    
    # Consolidate: openRank = min, closeRank = max
    print(f"\n🔗 Consolidating groups...")
    orcr = []
    
    for idx, (key, ranks) in enumerate(groups.items()):
        if (idx + 1) % batch_size == 0:
            print(f"   ... consolidated {idx + 1}/{len(groups)} groups")
        
        institute, course, quota, seatType, gender = key
        orcr.append({
            "year": 2025,
            "round": 2,
            "type": "NEET_PG",
            "exam": "NEET_PG",
            "institute": institute,
            "academicProgramName": course,
            "quota": quota,
            "seatType": seatType,
            "gender": gender,
            "openRank": min(ranks),
            "closeRank": max(ranks),
        })

    print(f"   ✓ Consolidation complete!\n")
    return orcr


# -------------------- MAIN --------------------

def main():
    pdf_path = "neet/neet_pg_r2.pdf"
    r1_js_path = "neet/neetPgR1_2025.js"
    output_js_path = "neet/neetPgR2_2025_optimized.js"
    sample_path = "neet/cutoff_2025_r2_sample_optimized.json"

    print("\n" + "=" * 60)
    print("      NEET PG Round 2 Parser - OPTIMIZED")
    print("=" * 60)
    print(f"📄 Input PDF: {pdf_path}")
    print(f"📄 R1 Data: {r1_js_path} (for category lookup)")
    print(f"💾 Output JS: {output_js_path}")
    print(f"📋 Sample JSON: {sample_path}")
    print("=" * 60 + "\n")

    # Check if PDF exists
    import os
    if not os.path.exists(pdf_path):
        print(f"❌ ERROR: PDF file not found at: {pdf_path}")
        print(f"   Current directory: {os.getcwd()}")
        print(f"   Please place your Round 2 PDF at: {pdf_path}")
        sys.exit(1)
    
    print(f"✓ PDF file found: {pdf_path}\n")
    
    # Load R1 data for category lookup
    r1_lookup = load_r1_data(r1_js_path)

    try:
        entries = extract_neet_r2_data(pdf_path, r1_lookup)
    except Exception as e:
        print(f"\n❌ ERROR during PDF extraction:")
        print(f"   {type(e).__name__}: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
    
    if not entries:
        print("\n❌ ERROR: No data extracted from PDF")
        print("   Please check:")
        print("   1. PDF file exists at: " + pdf_path)
        print("   2. PDF contains Round 2 allotment data")
        print("   3. PDF is not corrupted")
        print("   4. PDF has the expected table structure")
        sys.exit(1)

    # Count R1 fallbacks
    r1_count = sum(1 for e in entries if e.get("used_r1", False))
    r2_count = len(entries) - r1_count

    print(f"✅ Successfully extracted {len(entries)} total entries")
    print(f"   📊 Round 2 data: {r2_count} entries")
    print(f"   📊 Round 1 fallback: {r1_count} entries\n")

    try:
        orcr = convert_to_orcr_format(entries)
    except Exception as e:
        print(f"\n❌ ERROR during ORCR conversion:")
        print(f"   {type(e).__name__}: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

    print("=" * 60)
    print("📊 FINAL STATISTICS")
    print("=" * 60)
    print(f"  Raw entries extracted: {len(entries)}")
    print(f"    - Round 2 data: {r2_count}")
    print(f"    - Round 1 fallback: {r1_count}")
    print(f"  After consolidation: {len(orcr)} unique entries")
    print(f"  Duplicates merged: {len(entries) - len(orcr)}")
    print("=" * 60 + "\n")

    print("💾 Writing output files...")
    
    try:
        # Export as JavaScript module
        with open(output_js_path, "w", encoding="utf-8") as f:
            f.write("// NEET PG Round 2 2025 Cutoff Data - OPTIMIZED PARSER\n")
            f.write("// Generated by parseNeetPgR2_optimized.py\n")
            f.write("// Total entries: " + str(len(orcr)) + "\n")
            f.write(f"// Round 2 data: {r2_count}, Round 1 fallback: {r1_count}\n")
            f.write("// Duplicates consolidated with openRank/closeRank\n")
            f.write("// Note: Uses Round 2 data when available, falls back to Round 1 when R2 is absent\n\n")
            f.write("export const neetPgR2_2025 = ")
            f.write(json.dumps(orcr, indent=2))
            f.write(";\n")
        
        print(f"   ✓ Saved {len(orcr)} entries to {output_js_path}")

        # Save sample JSON for inspection
        with open(sample_path, "w", encoding="utf-8") as f:
            json.dump(orcr[:10], f, indent=2)
        
        print(f"   ✓ Sample written to {sample_path}")
    except Exception as e:
        print(f"\n❌ ERROR writing output files:")
        print(f"   {type(e).__name__}: {e}")
        sys.exit(1)

    print("\n" + "=" * 60)
    print("📋 SAMPLE OUTPUT (First 5 entries)")
    print("=" * 60)
    for i, x in enumerate(orcr[:5], 1):
        print(f"\n{i}. ", end="")
        if x['openRank'] == x['closeRank']:
            print(f"Rank {x['closeRank']} → {x['institute']}")
        else:
            print(f"Rank {x['openRank']}-{x['closeRank']} → {x['institute']}")
        print(f"   Course: {x['academicProgramName']}")
        print(f"   Quota: {x['quota']}, Category: {x['seatType']}")

    print("\n" + "=" * 60)
    print("✅ PARSING COMPLETE!")
    print("=" * 60)
    print("\n📋 NEXT STEPS:")
    print("-" * 60)
    print("1. ✓ Review the sample output above")
    print("2. ✓ Inspect full sample: " + sample_path)
    print("3. ⚠ If data looks correct, run:")
    print("     node scripts/pushNeetOrcr.js")
    print("   (Update the script to include R2 data)")
    print("=" * 60 + "\n")


if __name__ == "__main__":
    main()
