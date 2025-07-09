(() => {
  const PROGRAM_NAME_MAP = {
    "CSAM": "Computer Science and Applied Mathematics (4 Years, B.Tech)",
    "CSAI": "Computer Science and Artificial Intelligence (4 Years, B.Tech)",
    "CSB": "Computer Science and Biosciences (4 Years, B.Tech)",
    "CSD": "Computer Science and Design (4 Years, B.Tech)",
    "CSEcon": "Computer Science and Economics (4 Years, B.Tech)",
    "CSE": "Computer Science and Engineering (4 Years, B.Tech)",
    "CSSS": "Computer Science and Social Sciences (4 Years, B.Tech)",
    "ECE": "Electronics and Communication Engineering (4 Years, B.Tech)",
    "EVE": "Electronics and VLSI Engineering (4 Years, B.Tech)"
  };

  const decodeCategory = (code) => {
    switch (code) {
      case "OBCWD":
        return {
          seatType: "OBC",
          gender: "Female-only (including Supernumerary)",
          quota: "HS"
        }
      case "OBGND":
        return {
          seatType: "OBC",
          gender: "Gender-neutral",
          quota: "HS"
        }
      case "OBGNO":
        return {
          seatType: "OBC",
          gender: "Gender-neutral",
          quota: "AI"
        }
      case "EWCWD":
        return {
          seatType: "EWS",
          gender: "Female-only (including Supernumerary)",
          quota: "HS"
        }
      case "EWGND":
        return {
          seatType: "EWS",
          gender: "Gender-neutral",
          quota: "HS"
        }
      case "EWGNO":
        return {
          seatType: "EWS",
          gender: "Gender-neutral",
          quota: "AI"
        }
    }
    return { seatType, gender, quota };
  };

  const spans = [...document.querySelectorAll(".textLayer span[style*='top']")];

  const linesMap = {};
  for (const span of spans) {
    const topMatch = span.style.top.match(/([\d.]+)px/);
    const leftMatch = span.style.left.match(/([\d.]+)px/);
    if (!topMatch || !leftMatch) continue;

    const top = Math.round(parseFloat(topMatch[1]));
    const left = parseFloat(leftMatch[1]);
    const text = span.textContent.trim();

    if (!text) continue;
    if (!linesMap[top]) linesMap[top] = [];
    linesMap[top].push({ left, text });
  }

  const lines = Object.keys(linesMap)
    .map(top => ({
      top: parseFloat(top),
      line: linesMap[top].sort((a, b) => a.left - b.left).map(s => s.text).join(" ")
    }))
    .sort((a, b) => a.top - b.top)
    .map(obj => obj.line);

  let headers = [];
  let parsing = true;
  const output = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (/With\s+Bonus/i.test(line)) {
      parsing = false;
      break;
    }

    if (/Category\s+CS[A-Z]/.test(line)) {
      headers = line.split(/\s+/).slice(1); // skip "Category"
      continue;
    }

    if (!headers.length || !/^[A-Z]{3,10}$/.test(line.split(/\s+/)[0])) continue;

    const parts = line.split(/\s+/);
    const categoryCode = parts[0];
    const jeeRanks = parts.slice(1).filter((_, i) => i % 2 === 1); // JEE ranks only

    for (let j = 0; j < jeeRanks.length; j++) {
      const rank = jeeRanks[j];
      const programCode = headers[j];
      if (!rank || rank === "-" || !PROGRAM_NAME_MAP[programCode]) continue;

      const { seatType, gender, quota } = decodeCategory(categoryCode);
      output.push({
        institute: "Indraprastha Institute of Information Technology Delhi",
        academicProgramName: PROGRAM_NAME_MAP[programCode],
        quota,
        seatType,
        gender,
        closeRank: rank
      });
    }
  }

  console.log("✅ Extracted:", output.length, "entries");
  console.log(output);
  console.log("📦 JSON:\n", JSON.stringify(output, null, 2));
})();
