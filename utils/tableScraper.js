// Usage: go to jossa official prev years orcr select the year and round number
// then run this script in the console and copy the array returned
const table = document.querySelector("table");
const data = [];

if (table) {
    table.querySelectorAll("tr").forEach((row, rowIndex) => {
        if (rowIndex === 0) return;
        const cols = row.querySelectorAll("td");
        const rowData = Array.from(cols).map(col => col.innerText.trim());
        data.push(rowData);
    });

    console.log(data);
}