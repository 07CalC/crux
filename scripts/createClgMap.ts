import { PrismaClient } from "@prisma/client";
import fs from "fs"



async function createClgMap() {
  const prisma = new PrismaClient();

  const colleges = await prisma.college.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  const clgMap = new Map<string, string>();
  for (const college of colleges) {
    clgMap.set(college.name, college.id);
  }
  fs.writeFileSync("./clgMap.json", JSON.stringify(Object.fromEntries(clgMap), null, 2));
}

createClgMap()
  .catch((err) => {
    console.error("❌ Error creating college map:", err);
  })
  .finally(() => {
    PrismaClient.prototype.$disconnect();
  });
