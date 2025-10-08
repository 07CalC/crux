
(() => {
  //change target year accordingly
  const targetText = "BITSAT Cut-off Scores for Academic Year 2024-25";

  const heading = Array.from(document.querySelectorAll("h3")).find(
    h => h.textContent.trim().includes(targetText)
  );

  if (!heading) {
    console.error("heading not found.");
    return;
  }

  const result = [];
  let currentEl = heading.nextElementSibling;

  while (currentEl && !currentEl.matches("h3, h2")) {
    if (currentEl.tagName === "TABLE") {
      const rows = currentEl.querySelectorAll("tr");

      let currentCampus = "";
      for (const row of rows) {
        const cells = Array.from(row.querySelectorAll("td")).map(td =>
          td.innerText.trim().replace(/\s+/g, " ")
        );

        if (cells.length === 0) continue;

        if (cells.length === 4) {
          currentCampus = cells[0];
          if (currentCampus.includes("K K Birla Goa")) {
            currentCampus = "Goa";
          }
          const program = cells[1];
          const marks = parseInt(cells[2], 10);

          if (!isNaN(marks)) {
            result.push({
              institute: `Birla Institute of Technology and Science, ${currentCampus}`,
              academicProgramName: program,
              quota: "AI",
              seatType: "OPEN",
              gender: "Gender-Neutral",
              marks
            });
          }
        } else if (cells.length === 3) {
          // Reuse previous campus if current row doesn't include it
          const program = cells[0];
          const marks = parseInt(cells[1], 10);

          if (!isNaN(marks) && currentCampus) {
            result.push({
              institute: `BITS ${currentCampus}`,
              academicProgramName: program,
              quota: "AI",
              seatType: "OPEN",
              gender: "Gender-Neutral",
              marks
            });
          }
        }
      }
    }

    currentEl = currentEl.nextElementSibling;
  }

  console.log("✅ Scraped Programs:", result.length);
  console.log(JSON.stringify(result, null, 2));
})();
