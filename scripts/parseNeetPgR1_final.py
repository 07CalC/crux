#!/usr/bin/env python3
"""
NEET PG Round 1 PDF Parser
Extracts institute as: <Institute Name>, <Place>
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

def extract_neet_data(pdf_path: str):
    print("Extracting data from PDF...")
    dfs = tabula.read_pdf(pdf_path, pages="all", multiple_tables=True)
    print(f"Found {len(dfs)} tables")

    all_entries = []

    for df in dfs:
        if df.empty or len(df.columns) < 7:
            continue

        first_row = df.iloc[0].tolist()
        has_header = "Rank" in str(first_row) or "SNo" in str(first_row)
        start_idx = 1 if has_header else 0

        for _, row in df.iloc[start_idx:].iterrows():
            row = row.tolist()
            if len(row) < 7:
                continue

            rank = clean_text(row[1])
            if not rank.isdigit():
                continue

            all_entries.append({
                "rank": int(rank),
                "quota": clean_text(row[2]),
                "institute": clean_text(row[3]),
                "course": clean_text(row[4]),
                "category": clean_text(row[5]),
                "candidate_category": clean_text(row[6]),
            })

    return all_entries


# -------------------- ORCR FORMAT --------------------

def convert_to_orcr_format(entries):
    """
    Convert entries to ORCR format and consolidate duplicates.
    For duplicate (institute, academicProgramName, quota, seatType, gender) combinations,
    set openRank = min(ranks) and closeRank = max(ranks).
    """
    # First, create all entries
    all_entries = []
    for e in entries:
        all_entries.append({
            "year": 2025,
            "round": 1,
            "type": "NEET_PG",
            "exam": "NEET_PG",
            "institute": extract_institute_and_place(e["institute"]),
            "academicProgramName": e["course"],
            "quota": e["quota"],
            "seatType": e["category"],
            "gender": "Gender-Neutral",
            "rank": e["rank"],
        })

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
    
    # Consolidate: openRank = min, closeRank = max
    orcr = []
    for key, ranks in groups.items():
        institute, course, quota, seatType, gender = key
        orcr.append({
            "year": 2025,
            "round": 1,
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

    return orcr


# -------------------- MAIN --------------------

def main():
    pdf_path = "neet/neet_pg_r1.pdf"
    output_js_path = "neet/neetPgR1_2025.js"
    sample_path = "neet/cutoff_2025_r1_sample.json"

    print("=" * 60)
    print("NEET PG Parser (Institute Name, Place)")
    print("=" * 60)

    entries = extract_neet_data(pdf_path)
    print(f"Extracted {len(entries)} raw rows")

    if not entries:
        print("❌ No data extracted")
        sys.exit(1)

    orcr = convert_to_orcr_format(entries)

    print(f"After consolidation: {len(orcr)} unique entries")
    print(f"Duplicates merged: {len(entries) - len(orcr)}")

    # Export as JavaScript module
    with open(output_js_path, "w", encoding="utf-8") as f:
        f.write("// NEET PG Round 1 2025 Cutoff Data\n")
        f.write("// Generated by parseNeetPgR1_final.py\n")
        f.write("// Total entries: " + str(len(orcr)) + "\n")
        f.write("// Duplicates consolidated with openRank/closeRank\n\n")
        f.write("export const neetPgR1_2025 = ")
        f.write(json.dumps(orcr, indent=2))
        f.write(";\n")

    # Save sample JSON for inspection
    with open(sample_path, "w", encoding="utf-8") as f:
        json.dump(orcr[:10], f, indent=2)

    print(f"\n✓ Saved {len(orcr)} entries to {output_js_path}")
    print(f"✓ Sample written to {sample_path}")

    print("\nSample output (showing rank ranges):")
    for x in orcr[:5]:
        if x['openRank'] == x['closeRank']:
            print(f"  Rank {x['closeRank']} → {x['institute']}")
        else:
            print(f"  Rank {x['openRank']}-{x['closeRank']} → {x['institute']}")
        print(f"    Course: {x['academicProgramName']}")

    print("\nDone ✔")
    print("\n" + "=" * 60)
    print("NEXT STEPS:")
    print("=" * 60)
    print("1. Schema already updated with NEET_PG enum ✓")
    print("2. Run: npx prisma migrate dev (if not done)")
    print("3. Run: node scripts/pushNeetOrcr.js")
    print("=" * 60)


if __name__ == "__main__":
    main()
