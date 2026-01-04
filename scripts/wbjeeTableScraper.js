// Usage: go to wbjee official prev years orcr select the year and round number
// then run this script in the console and copy the array returned
// note the table is const here so you might have to refresh the page after scraping every round's data
const table = document.querySelector("table");
const data = [];

if (table) {
  table.querySelectorAll("tr").forEach((row, rowIndex) => {
    if (rowIndex === 0) return;
    const cols = row.querySelectorAll("td");
    const rowData = Array.from(cols).map(col => col.innerText.trim());

    data.push({
      round: parseInt(rowData[1].replace(/\D/g, ""), 10),
      institute: rowData[2],
      academicProgramName: rowData[3],
      quota: rowData[6],
      seatType: rowData[7],
      gender: "Gender-Neutral",
      openRank: rowData[8],
      closeRank: rowData[9],
      exam: rowData[5] === "WBJEE Seats" ? "WBJEE" : "MAINS"
    });
  });

  console.log(data);
} else {
  console.log("Table not found on the page.");
} 
