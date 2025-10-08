import { PrismaClient } from "@prisma/client";
import { data2025R2Csab as data2025R1 } from "../ORCR/2025r2CSAB.js"
const prisma = new PrismaClient();

const CHUNK_SIZE = 500;
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

async function exportData() {

  const colleges = await prisma.college.findMany({
    select: { id: true, name: true },
  });
  const collegeMap = new Map(colleges.map(c => [c.name, c.id]));

  const orcrData = data2025R1
    .filter(item => collegeMap.has(item.institute)).map(item => ({
      year: 2025,
      round: 2,
      type: "CSAB",
      exam: item.institute.toLowerCase().includes("indian institute of technology") ? "ADVANCED" : "MAINS",
      collegeId: collegeMap.get(item.institute),
      institute: item.institute,
      academicProgramName: item.academicProgramName,
      quota: item.quota,
      seatType: item.seatType,
      gender: item.gender,
      openRank: parseInt(item.openRank),
      closeRank: parseInt(item.closeRank),
    }));

  const chunks = chunkArray(orcrData, CHUNK_SIZE);

  for (const chunk of chunks) {
    await prisma.orcr.createMany({
      data: chunk,
      skipDuplicates: true,
    });
    console.log(`Inserted ${chunk.length} records`);
  }
}

exportData()
  .then(() => console.log("Export completed"))
  .catch(e => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
