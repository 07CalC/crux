import pytesseract
from pdf2image import convert_from_path
from PIL import Image
import re
import json

PDF_FILE = "./iiitd25R1.pdf"
INSTITUTE = "Indraprastha Institute of Information Technology Delhi"

PROGRAM_NAME_MAP = {
    "CSAM": "Computer Science and Applied Mathematics (4 Years, B.Tech)",
    "CSAI": "Computer Science and Artificial Intelligence (4 Years, B.Tech)",
    "CSB": "Computer Science and Biosciences (4 Years, B.Tech)",
    "CSD": "Computer Science and Design (4 Years, B.Tech)",
    "CSEcon": "Computer Science and Economics (4 Years, B.Tech)",
    "CSE": "Computer Science and Engineering (4 Years, B.Tech)",
    "CSSS": "Computer Science and Social Sciences (4 Years, B.Tech)",
    "ECE": "Electronics and Communication Engineering (4 Years, B.Tech)",
    "EVE": "Electronics and VLSI Engineering (4 Years, B.Tech)"
}

def decode_category(code: str):
    seat_type = re.match(r'^[A-Z]+', code).group()[:-2 if 'WD' in code or 'PD' in code else -1]
    gender = "Female-only" if "W" in code else "Gender-Neutral"
    quota = "HS" if "D" in code else "AI"
    return seat_type, gender, quota

def extract_text_from_pdf(pdf_path):
    images = convert_from_path(pdf_path, dpi=300)
    all_text = ""
    for image in images:
        text = pytesseract.image_to_string(image, config='--psm 6')
        all_text += text + "\n"
    return all_text

def parse_table(text):
    output = []
    lines = text.splitlines()
    headers = []
    for line in lines:
        if "With Bonus" in line:
            break
        if "Category" in line and "IIIT" in line:
            headers = re.findall(r'\b[A-Z]{3,10}\b', line)[1:]
            continue
        parts = re.split(r'\s+', line.strip())
        if not parts or not re.match(r'^[A-Z]{3,10}$', parts[0]):
            continue
        category_code = parts[0]
        jee_ranks = parts[2::2]  # JEE Ranks only
        for idx, rank in enumerate(jee_ranks):
            if idx >= len(headers):
                continue
            if rank in ["", "-", "—"]:
                continue
            program_code = headers[idx]
            program_name = PROGRAM_NAME_MAP.get(program_code, program_code)
            seat_type, gender, quota = decode_category(category_code)
            output.append({
                "institute": INSTITUTE,
                "academicProgramName": program_name,
                "quota": quota,
                "seatType": seat_type,
                "gender": gender,
                "closeRank": rank
            })
    return output

if __name__ == "__main__":
    print("🔍 Converting PDF to images and extracting text...")
    raw_text = extract_text_from_pdf(PDF_FILE)
    parsed = parse_table(raw_text)
    with open("iiitd_cutoff_2025_without_bonus.json", "w") as f:
        json.dump(parsed, f, indent=2)
    print(f"✅ Extracted {len(parsed)} entries to iiitd_cutoff_2025_without_bonus.json")
