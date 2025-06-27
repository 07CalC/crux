import { PrismaClient } from "@prisma/client";
import { data2024Bitsat as bitsat } from "../ORCR/2024bitsat.js"
const prisma = new PrismaClient();
const CHUNK_SIZE = 500;

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

async function importBitsatData() {
  // Fetch all colleges
  const colleges = await prisma.college.findMany({
    select: { id: true, name: true },
  });

  const collegeMap = new Map(colleges.map((c) => [c.name, c.id]));
  // Map input data to Orcr model format
  const orcrData = bitsat
    .filter((item) => collegeMap.has(item.institute))
    .map((item) => ({
      year: 2024,
      round: 1,
      type: "BITSAT",
      exam: "BITSAT",
      collegeId: collegeMap.get(item.institute),
      institute: item.institute,
      academicProgramName: item.academicProgramName.trim(),
      quota: item.quota,
      seatType: item.seatType,
      gender: item.gender,
      marks: parseInt(item.marks),
    }));

  const chunks = chunkArray(orcrData, CHUNK_SIZE);

  for (const chunk of chunks) {
    await prisma.orcr.createMany({
      data: chunk,
      skipDuplicates: true,
    });
    console.log(`Inserted ${chunk.length} BITSAT records`);
  }
}

importBitsatData()
  .then(() => console.log("✅ BITSAT ORCR import completed"))
  .catch((e) => console.error("❌ Import failed:", e))
  .finally(() => prisma.$disconnect());
