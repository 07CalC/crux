import fs from "fs/promises";

const backup = JSON.parse(
  await fs.readFile("backup.json", "utf8")
);

const sql: string[] = [];

function escape(value: any) {
  if (value === null || value === undefined) return "NULL";

  if (typeof value === "boolean") {
    return value ? "1" : "0";
  }

  if (typeof value === "number") {
    return String(value);
  }

  return `'${String(value).replace(/'/g, "''")}'`;
}

function insert(table: string, rows: any[]) {
  for (const row of rows) {
    const cols = Object.keys(row);
    const vals = cols.map((c) => escape(row[c]));

    sql.push(`
INSERT INTO ${table}
(${cols.join(",")})
VALUES
(${vals.join(",")});
`);
  }
}

insert("College", backup.colleges);
insert("CollegeImage", backup.collegeImages);
insert("Placement", backup.placements);
insert("Review", backup.reviews);
insert("Orcr", backup.orcrs);

await fs.writeFile("restore.sql", sql.join("\n"));

console.log("Generated restore.sql");
