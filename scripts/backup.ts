import { PrismaClient } from "@prisma/client";
import fs from "fs/promises";

const prisma = new PrismaClient();

async function fetchInBatches<T>(
  model: { findMany: Function },
  options: {
    batchSize?: number;
    orderBy?: any;
    select?: any;
  } = {}
): Promise<T[]> {
  const { batchSize = 1000, orderBy = { id: "asc" }, select = undefined } = options;
  const allData: T[] = [];
  let lastId: string | null = null;

  while (true) {
    const batch: T[] = await model.findMany({
      take: batchSize,
      ...(lastId ? { cursor: { id: lastId }, skip: 1 } : {}),
      orderBy,
      ...(select ? { select } : {}),
    });

    if (batch.length === 0) break;
    allData.push(...batch);
    lastId = (batch[batch.length - 1] as any).id;
    console.log(`⬇️ Fetched ${allData.length} records from ${modelName(model)}...`);
  }

  return allData;
}

function modelName(model: any): string {
  return model === prisma.orcr ? "Orcr"
    : model === prisma.college ? "College"
      : model === prisma.collegeImage ? "CollegeImage"
        : model === prisma.placement ? "Placement"
          : model === prisma.review ? "Review"
            : "UnknownModel";
}

async function backup() {
  console.log("📦 Starting database backup...");

  const colleges = await fetchInBatches(prisma.college, {
    select: {
      id: true,
      name: true,
      bongs: true,
      coverImage: true,
      location: true,
      officialWebsite: true,
      totalStudents: true,
      maleStudents: true,
      femaleStudents: true,
      createdAt: true,
      updatedAt: true,
      nirf: true,
      moderated: true,
      collegeType: true,
    },
  });

  const collegeImages = await prisma.collegeImage.findMany();
  const placements = await prisma.placement.findMany();
  const reviews = await prisma.review.findMany();
  const orcrs = await fetchInBatches(prisma.orcr);

  const backup = {
    colleges,
    collegeImages,
    placements,
    reviews,
    orcrs,
  };

  await fs.writeFile("backup.json", JSON.stringify(backup, null, 2));
  console.log("✅ Backup completed → backup.json");
}

backup()
  .catch((err) => {
    console.error("❌ Backup failed:", err);
  })
  .finally(() => {
    prisma.$disconnect();
  });
