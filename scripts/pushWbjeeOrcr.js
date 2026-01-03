import { PrismaClient } from "@prisma/client";
import { WBJEE_2024 as WBJEE_2025_R1 } from "../ORCR/wbjee_2024.js";

const prisma = new PrismaClient();

const CHUNK_SIZE = 500;

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

async function pushWbjeeData() {
  console.log("Starting WBJEE ORCR push...");

  const existingColleges = await prisma.college.findMany({
    select: { id: true, name: true },
  });
  const collegeMap = new Map(existingColleges.map(c => [c.name, c.id]));
  console.log(`Found ${existingColleges.length} existing colleges in database`);

  const uniqueInstitutes = [...new Set(WBJEE_2025_R1.map(item => item.institute))];
  const missingColleges = uniqueInstitutes.filter(name => !collegeMap.has(name));

  console.log(`Found ${missingColleges.length} new colleges to create`);

  if (missingColleges.length > 0) {
    for (const collegeName of missingColleges) {
      const newCollege = await prisma.college.create({
        data: {
          name: collegeName,
          collegeType: "WBJEE",
          moderated: false,
        },
      });
      collegeMap.set(collegeName, newCollege.id);
      console.log(`Created college: ${collegeName}`);
    }
  }

  const orcrData = WBJEE_2025_R1.map(item => ({
    year: 2024,
    round: item.round,
    type: "WBJEE",
    exam: item.exam === "WBJEE" ? "WBJEE" : "MAINS",
    collegeId: collegeMap.get(item.institute),
    institute: item.institute,
    academicProgramName: item.academicProgramName,
    quota: item.quota,
    seatType: item.seatType,
    gender: item.gender,
    openRank: parseInt(item.openRank),
    closeRank: parseInt(item.closeRank),
  }));

  console.log(`Prepared ${orcrData.length} ORCR records to insert`);

  // Insert ORCR data in chunks
  const chunks = chunkArray(orcrData, CHUNK_SIZE);
  let totalInserted = 0;

  for (const chunk of chunks) {
    const result = await prisma.orcr.createMany({
      data: chunk,
      skipDuplicates: true,
    });
    totalInserted += result.count;
    console.log(`Inserted ${result.count} records (${totalInserted}/${orcrData.length})`);
  }

  console.log(`\nCompleted! Total records inserted: ${totalInserted}`);
}

pushWbjeeData()
  .then(() => console.log("WBJEE ORCR export completed successfully"))
  .catch(e => {
    console.error("Error during WBJEE ORCR export:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


// async function deleteWbjeeOrcr() {
//   await prisma.orcr.deleteMany({
//     where: {
//       type: "WBJEE"
//     }
//   })
// }
//
// deleteWbjeeOrcr()
//   .then(() => console.log("done"))
//   .catch(e => console.error("error", e))
//   .finally(async () => {
//     await prisma.$disconnect()
//   })
