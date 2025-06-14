// Usage: go to jossa/csab official prev years orcr select the year and round number
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
            institute: rowData[0],
            academicProgramName: rowData[1],
            quota: rowData[2],
            seatType: rowData[3],
            gender: rowData[4],
            openRank: rowData[5],
            closeRank: rowData[6]
        });
    });

    console.log(data);
} else {
    console.log("Table not found on the page.");
} 