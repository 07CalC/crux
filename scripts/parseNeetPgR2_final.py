#!/usr/bin/env python3
"""
NEET PG Round 2 PDF Parser
Handles dual-column format with Round 1 and Round 2 data
Extracts only Round 2 allotments (ignores Round 1 and "Did not opt" cases)
Exports as JavaScript module for database import
"""

import json
import sys
import re

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


# -------------------- INDIAN STATES LIST --------------------

# Full state/UT names that should be skipped
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
    
    # Exact match with state list
    if text_lower in INDIAN_STATES:
        return True
    
    # Check for state-like patterns (contains state indicators)
    # but exclude city names like "New Delhi", "Hyderabad"
    if "(" in text and ")" in text:  # Like "Delhi (NCT)"
        return True
    
    return False


def is_email(text: str) -> bool:
    """Check if text contains an email address"""
    return bool(re.search(r'[\w\.-]+@[\w\.-]+\.\w+', text))


def extract_institute_and_place(raw_institute: str) -> str:
    """
    Extract institute name and place from raw institute string.
    
    Logic:
    1. First token (before first comma) = institute name
    2. Check tokens backwards from the end:
       - Skip if pincode (6 digits)
       - Skip if state name
       - Skip if email
       - Skip if empty or just whitespace
       - Skip if it's the same as institute name (duplicate)
       - Skip if malformed (contains STATE, UTTAR, etc.)
       - First valid token = place
    
    Returns: "Institute Name, Place"
    """
    if not raw_institute:
        return ""
    
    # Split by comma
    tokens = [t.strip() for t in raw_institute.split(',') if t.strip()]
    
    if not tokens:
        return ""
    
    # First token is institute name
    institute_name = tokens[0]
    
    # If only one token, return as-is
    if len(tokens) == 1:
        return institute_name
    
    # Find place by checking backwards from the end
    place = None
    
    # Start from the end and work backwards
    for i in range(len(tokens) - 1, 0, -1):
        token = tokens[i]
        
        # Skip empty tokens
        if not token or len(token) < 2:
            continue
        
        # Skip pincode
        if is_pincode(token):
            continue
        
        # Skip state
        if is_state(token):
            continue
        
        # Skip email
        if is_email(token):
            continue
        
        # Skip if it's a duplicate of institute name (case insensitive, partial match)
        if token.lower().strip() == institute_name.lower().strip():
            continue
        
        # Skip malformed tokens (likely parsing errors)
        token_lower = token.lower()
        malformed_keywords = ['state', 'stateuttar', 'stateuttar pradesh', 'pradesh,', 'nadu,']
        if any(kw in token_lower for kw in malformed_keywords):
            continue
        
        # Skip tokens that are just addresses/details (too long or contain address keywords)
        if len(token) > 100:  # Likely a long address
            continue
            
        # Skip if it contains too many address keywords
        address_keywords = ['road', 'rd', 'street', 'st', 'marg', 'salai', 'sector', 
                           'block', 'phase', 'near', 'opposite']
        if sum(1 for kw in address_keywords if kw in token_lower) >= 2:
            continue
        
        # This looks like a valid place!
        place = token
        break
    
    # If no place found, try to extract city from earlier tokens (before state)
    # This handles cases like "COLLEGE, COLLEGE, Telangana, pincode"
    if not place:
        for i in range(1, len(tokens)):
            token = tokens[i]
            token_lower = token.lower()
            
            # Skip duplicates
            if token.lower().strip() == institute_name.lower().strip():
                continue
            
            # Look for city-like names (capital first letter, not too long, no numbers)
            if len(token) > 3 and len(token) < 30 and not any(char.isdigit() for char in token):
                # Check if next token is a state (indicating this might be a city)
                if i + 1 < len(tokens) and is_state(tokens[i + 1]):
                    place = token
                    break
    
    # Return formatted result
    if place:
        return f"{institute_name}, {place}"
    else:
        return institute_name


# -------------------- PDF EXTRACTION --------------------

def extract_neet_r2_data(pdf_path: str):
    """
    Extract Round 2 data from NEET PG Round 2 PDF.
    The PDF has a dual-column format with Round 1 and Round 2 data for each candidate.
    
    Expected columns (approximate):
    - Rank (R1)
    - Quota Allotted (R1)
    - Institute (R1)
    - Course (R1)
    - Remarks (R1)
    - Quota Allotted (R2)
    - Institute (R2)
    - Course (R2)
    - Allotted Category (R2)
    - Candidate Category (R2)
    - Option No. (R2)
    - Remarks (R2)
    """
    print("\n🔍 Starting PDF extraction...")
    print("   Reading PDF with tabula...")
    dfs = tabula.read_pdf(pdf_path, pages="all", multiple_tables=True)
    print(f"   ✓ Successfully read PDF")
    print(f"   ✓ Found {len(dfs)} tables to process\n")

    all_entries = []
    skipped_no_upgrade = 0
    skipped_invalid = 0
    valid_in_table = 0

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

        # The table should have at least 10+ columns (R1 data + R2 data)
        if len(df.columns) < 10:
            print(f"   ⚠ Skipping table (too few columns: {len(df.columns)} < 10)\n")
            continue

        print(f"   ✓ Valid column count, processing rows...")

        # Check if first row is header
        first_row = df.iloc[0].tolist()
        has_header = any("Rank" in str(cell) or "Quota" in str(cell) for cell in first_row)
        start_idx = 1 if has_header else 0
        
        if has_header:
            print(f"   ✓ Detected header row, starting from row 2")
        else:
            print(f"   ✓ No header detected, starting from row 1")

        total_rows = len(df.iloc[start_idx:])
        print(f"   ⏳ Processing {total_rows} data rows...")
        
        # Progress indicators for every 100 rows
        rows_processed = 0

        for row_idx, row in df.iloc[start_idx:].iterrows():
            rows_processed += 1
            
            # Show progress every 100 rows
            if rows_processed % 100 == 0:
                print(f"      ... processed {rows_processed}/{total_rows} rows (found {valid_in_table} valid R2 entries so far)")
            
            row = row.tolist()
            
            # We need at least 10 columns
            if len(row) < 10:
                continue

            # Extract rank from first column
            rank = clean_text(row[0])
            if not rank or not rank.isdigit():
                skipped_invalid += 1
                continue

            # Round 2 data typically starts around column 5-6
            # The exact position varies, so we look for patterns
            
            # Strategy: Find the R2 remarks column (should contain "Fresh Allotted" or "Did not opt")
            # Work backwards from there to find institute, course, quota, etc.
            
            # Check last column for remarks (most likely position)
            remarks_r2 = clean_text(row[-1])
            
            # Skip if "Did not opt for Upgradation"
            if "did not opt" in remarks_r2.lower() or "not opt" in remarks_r2.lower():
                skipped_no_upgrade += 1
                continue
            
            # Skip if no meaningful R2 data (empty or just dashes)
            if not remarks_r2 or remarks_r2 == "-" or remarks_r2 == "--":
                skipped_invalid += 1
                continue

            # Try to extract R2 data
            # Typical layout (from right to left):
            # [..., quota_r2, institute_r2, course_r2, allotted_cat, cand_cat, option_no, remarks_r2]
            
            # Based on the examples:
            # Column mapping (approximate, may vary):
            # 0: Rank
            # 1-4: R1 data (quota, institute, course, remarks)
            # 5: R2 Quota
            # 6: R2 Institute
            # 7: R2 Course
            # 8: R2 Allotted Category
            # 9: R2 Candidate Category
            # 10: R2 Option No
            # 11: R2 Remarks
            
            # Extract R2 data (adjust indices as needed)
            try:
                # If we have exactly 12 columns
                if len(row) == 12:
                    quota_r2 = clean_text(row[5])
                    institute_r2 = clean_text(row[6])
                    course_r2 = clean_text(row[7])
                    allotted_cat = clean_text(row[8])
                    cand_cat = clean_text(row[9])
                # If we have 11 columns (no option number)
                elif len(row) == 11:
                    quota_r2 = clean_text(row[5])
                    institute_r2 = clean_text(row[6])
                    course_r2 = clean_text(row[7])
                    allotted_cat = clean_text(row[8])
                    cand_cat = clean_text(row[9])
                # If we have 10 columns
                elif len(row) == 10:
                    quota_r2 = clean_text(row[4])
                    institute_r2 = clean_text(row[5])
                    course_r2 = clean_text(row[6])
                    allotted_cat = clean_text(row[7])
                    cand_cat = clean_text(row[8])
                else:
                    # Try to find institute by looking for typical institute patterns
                    # Look for columns containing common institute keywords
                    institute_r2 = ""
                    course_r2 = ""
                    quota_r2 = ""
                    allotted_cat = ""
                    cand_cat = ""
                    
                    for i in range(5, min(len(row) - 2, 9)):
                        cell = clean_text(row[i])
                        if "medical" in cell.lower() or "college" in cell.lower() or "hospital" in cell.lower():
                            institute_r2 = cell
                            # Course is likely the next column
                            if i + 1 < len(row):
                                course_r2 = clean_text(row[i + 1])
                            # Quota is likely the previous column
                            if i > 0:
                                quota_r2 = clean_text(row[i - 1])
                            # Category is likely after course
                            if i + 2 < len(row):
                                allotted_cat = clean_text(row[i + 2])
                            # Candidate category
                            if i + 3 < len(row):
                                cand_cat = clean_text(row[i + 3])
                            break
                    
                    if not institute_r2:
                        skipped_invalid += 1
                        continue
                
                # Validate R2 data
                if not institute_r2 or not course_r2:
                    skipped_invalid += 1
                    continue
                
                # Skip if R2 data is just dashes or empty
                if institute_r2 in ["-", "--", "---"] or course_r2 in ["-", "--", "---"]:
                    skipped_invalid += 1
                    continue

                all_entries.append({
                    "rank": int(rank),
                    "quota": quota_r2 if quota_r2 else "All India",
                    "institute": institute_r2,
                    "course": course_r2,
                    "category": allotted_cat if allotted_cat and allotted_cat != "-" else "Open",
                    "candidate_category": cand_cat if cand_cat and cand_cat != "-" else "General",
                })
                valid_in_table += 1
                
            except (ValueError, IndexError) as e:
                skipped_invalid += 1
                continue

        print(f"   ✓ Table {table_idx + 1} complete: Found {valid_in_table} valid R2 entries")

    print(f"\n{'='*60}")
    print(f"📊 EXTRACTION SUMMARY")
    print(f"{'='*60}")
    print(f"  ✅ Valid R2 entries extracted: {len(all_entries)}")
    print(f"  ⊘ Skipped (did not opt for upgrade): {skipped_no_upgrade}")
    print(f"  ⊘ Skipped (invalid/incomplete data): {skipped_invalid}")
    print(f"  📈 Total rows processed: {len(all_entries) + skipped_no_upgrade + skipped_invalid}")
    print(f"{'='*60}\n")

    return all_entries


# -------------------- ORCR FORMAT --------------------

def convert_to_orcr_format(entries):
    """
    Convert entries to ORCR format and consolidate duplicates.
    For duplicate (institute, academicProgramName, quota, seatType, gender) combinations,
    set openRank = min(ranks) and closeRank = max(ranks).
    """
    print("🔄 Converting to ORCR format...")
    print(f"   Processing {len(entries)} entries...")
    
    # First, create all entries
    all_entries = []
    for idx, e in enumerate(entries):
        if (idx + 1) % 500 == 0:
            print(f"   ... processed {idx + 1}/{len(entries)} entries")
            
        all_entries.append({
            "year": 2025,
            "round": 2,
            "type": "NEET_PG",
            "exam": "NEET_PG",
            "institute": extract_institute_and_place(e["institute"]),
            "academicProgramName": e["course"],
            "quota": e["quota"],
            "seatType": e["category"],
            "gender": "Gender-Neutral",
            "rank": e["rank"],
        })

    print(f"   ✓ Created {len(all_entries)} ORCR entries")
    print(f"\n🔗 Consolidating duplicates...")

    # Group by (institute, academicProgramName, quota, seatType, gender)
    from collections import defaultdict
    groups = defaultdict(list)
    
    for entry in all_entries:
        key = (
            entry["institute"],
            entry["academicProgramName"],
            entry["quota"],
            entry["seatType"],
            entry["gender"]
        )
        groups[key].append(entry["rank"])
    
    print(f"   ✓ Grouped into {len(groups)} unique combinations")
    print(f"   ✓ Will merge {len(all_entries) - len(groups)} duplicate entries")
    
    # Consolidate: openRank = min, closeRank = max
    orcr = []
    for idx, (key, ranks) in enumerate(groups.items()):
        if (idx + 1) % 500 == 0:
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
    output_js_path = "neet/neetPgR2_2025.js"
    sample_path = "neet/cutoff_2025_r2_sample.json"

    print("\n" + "=" * 60)
    print("         NEET PG Round 2 Parser - 2025")
    print("=" * 60)
    print(f"📄 Input PDF: {pdf_path}")
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

    try:
        entries = extract_neet_r2_data(pdf_path)
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

    print(f"✅ Successfully extracted {len(entries)} raw Round 2 entries\n")

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
    print(f"  After consolidation: {len(orcr)} unique entries")
    print(f"  Duplicates merged: {len(entries) - len(orcr)}")
    print("=" * 60 + "\n")

    print("💾 Writing output files...")
    
    try:
        # Export as JavaScript module
        with open(output_js_path, "w", encoding="utf-8") as f:
            f.write("// NEET PG Round 2 2025 Cutoff Data\n")
            f.write("// Generated by parseNeetPgR2_final.py\n")
            f.write("// Total entries: " + str(len(orcr)) + "\n")
            f.write("// Duplicates consolidated with openRank/closeRank\n\n")
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
