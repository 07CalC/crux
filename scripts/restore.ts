
import { PrismaClient } from "@prisma/client";
import fs from "fs/promises";

const prisma = new PrismaClient();
const CHUNK_SIZE = 250;

function chunkArray<T>(arr: T[], size: number): T[][] {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

async function restore() {
  const raw = await fs.readFile("./backup.json", "utf-8");
  const data = JSON.parse(raw);

  console.log("🚮 Deleting old data...");
  // await prisma.collegeImage.deleteMany();
  // await prisma.placement.deleteMany();
  // await prisma.review.deleteMany();
  // await prisma.orcr.deleteMany();
  // await prisma.college.deleteMany();
  //
  console.log("⬆️ Inserting colleges...");
  for (const college of data.colleges) {
    const { images, orcrs, reviews, placements, ...collegeData } = college;
    await prisma.college.create({ data: collegeData });
  }

  const insertChunks = async <T>(model: any, items: T[], label: string) => {
    const chunks = chunkArray(items, CHUNK_SIZE);
    for (let i = 0; i < chunks.length; i++) {
      await model.createMany({ data: chunks[i], skipDuplicates: true });
      console.log(`✅ ${label} chunk ${i + 1}/${chunks.length}`);
    }
  };

  await insertChunks(prisma.collegeImage, data.collegeImages || [], "CollegeImages");
  await insertChunks(prisma.placement, data.placements || [], "Placements");
  await insertChunks(prisma.review, data.reviews || [], "Reviews");
  await insertChunks(prisma.orcr, data.orcrs || [], "ORCRs");

  console.log("✅ Restore complete!");
}

restore()
  .catch((err) => {
    console.error("❌ Restore failed:", err);
  })
  .finally(() => {
    prisma.$disconnect();
  });
