import { PrismaClient } from "@prisma/client";
import { neetPgR1_2025 } from "../neet/neetPgR1_2025.js";

const prisma = new PrismaClient();

const CHUNK_SIZE = 500;

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

async function pushNeetData() {
  console.log("Starting NEET PG data import...");
  console.log(`Total entries to process: ${neetPgR1_2025.length}`);

  await prisma.orcr.deleteMany({
    where: {
      exam: "NEET_PG"
    }
  });
  console.log("deleted")

  // Get all existing colleges
  const colleges = await prisma.college.findMany({
    select: { id: true, name: true },
  });
  const collegeMap = new Map(colleges.map((c) => [c.name, c.id]));

  console.log(`Found ${colleges.length} existing colleges in database`);

  // Extract unique institutes from NEET data
  const uniqueInstitutes = new Map();
  neetPgR1_2025.forEach((item) => {
    const parts = item.institute.split(',').map(s => s.trim());
    const instituteName = parts[0];
    const location = parts[1] || null;

    if (!uniqueInstitutes.has(instituteName)) {
      uniqueInstitutes.set(instituteName, {
        name: instituteName,
        location: location,
        institute: item.institute, // Full name with place
      });
    }
  });

  console.log(`Found ${uniqueInstitutes.size} unique institutes in NEET data`);

  // Create missing colleges
  const missingColleges = [];
  for (const [name, info] of uniqueInstitutes) {
    if (!collegeMap.has(name) && !collegeMap.has(info.institute)) {
      missingColleges.push({
        name: name,
        location: info.location,
        collegeType: "NEET_PG",
        bongs: 0,
        moderated: false,
      });
    }
  }

  if (missingColleges.length > 0) {
    console.log(`\nCreating ${missingColleges.length} missing colleges...`);

    // Create colleges in chunks to avoid timeout
    const collegeChunks = chunkArray(missingColleges, 100);
    let createdCount = 0;

    for (let i = 0; i < collegeChunks.length; i++) {
      const chunk = collegeChunks[i];
      await prisma.college.createMany({
        data: chunk,
        skipDuplicates: true,
      });
      createdCount += chunk.length;
      process.stdout.write(`\rCreating colleges: ${createdCount}/${missingColleges.length}`);
    }
    console.log("\n✓ Colleges created successfully");

    // Refresh college map
    const updatedColleges = await prisma.college.findMany({
      select: { id: true, name: true },
    });
    collegeMap.clear();
    updatedColleges.forEach((c) => collegeMap.set(c.name, c.id));
    console.log(`Total colleges in database: ${collegeMap.size}`);
  } else {
    console.log("✓ All colleges already exist in database");
  }

  // Map all data (now all colleges should exist)
  const orcrData = neetPgR1_2025.map((item) => {
    // Try exact match first
    let collegeId = collegeMap.get(item.institute);

    // If not found, try just the institute name (before comma)
    if (!collegeId) {
      const instituteName = item.institute.split(',')[0].trim();
      collegeId = collegeMap.get(instituteName);
    }

    // This shouldn't happen now, but keep as safety
    if (!collegeId) {
      console.warn(`Warning: No college found for: ${item.institute}`);
      return null;
    }

    return {
      year: item.year,
      round: item.round,
      type: item.type,
      exam: item.exam,
      collegeId: collegeId,
      institute: item.institute,
      academicProgramName: item.academicProgramName,
      quota: item.quota,
      seatType: item.seatType,
      gender: item.gender,
      openRank: item.openRank,
      closeRank: item.closeRank,
    };
  }).filter(item => item !== null);

  console.log(`\nPrepared ${orcrData.length} ORCR entries for insertion`);

  // Show some examples of what will be inserted
  console.log("\nSample entries to be inserted:");
  orcrData.slice(0, 3).forEach((item, idx) => {
    console.log(`\n${idx + 1}. ${item.institute}`);
    console.log(`   Course: ${item.academicProgramName}`);
    console.log(`   Ranks: ${item.openRank} - ${item.closeRank}`);
    console.log(`   Type: ${item.type}, Exam: ${item.exam}`);
  });

  // Insert in chunks
  console.log(`\nInserting ${orcrData.length} entries in chunks of ${CHUNK_SIZE}...`);
  const chunks = chunkArray(orcrData, CHUNK_SIZE);

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    await prisma.orcr.createMany({
      data: chunk,
      skipDuplicates: true,
    });
    process.stdout.write(`\rProgress: ${i + 1}/${chunks.length} chunks (${((i + 1) / chunks.length * 100).toFixed(1)}%)`);
  }

  console.log("\n");
}

pushNeetData()
  .then(() => console.log("✓ NEET PG data import completed successfully!"))
  .catch((e) => {
    console.error("\n❌ Error importing NEET data:");
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
