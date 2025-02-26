import { PrismaClient } from "@prisma/client";
import { data2023R1 } from "./ORCR/2023-r1";

const prisma = new PrismaClient();

async function exportData() {
//   const uniqueInst = [...new Set(data2023R1.map((item) => item.institute))];
//   uniqueInst.map(async (institute) => {
//     await prisma.college.create({
//       data: {
//         name: institute,
//       },
//     });
//   });
    data2023R1.map(async (item) => {
      const institute = await prisma.college.findUnique({
        where: {
          name: item.institute,
        },
      });
      if (institute?.id) {
        await prisma.orcr.createMany({
          data: {
            year: 2023,
            round: 1,
            type: "JOSSA",
            exam: item.institute.toLowerCase().includes("indian institute of technology") ? "ADVANCED" : "MAINS",
            collegeId: institute.id,
            institute: item.institute,
            academicProgramName: item.academicProgramName,
            quota: item.quota,
            seatType: item.seatType,
            gender: item.gender,
            openRank: parseInt(item.openRank),
            closeRank: parseInt(item.closeRank),
          },
        });
      } else {
        await prisma.college.create({
          data: {
            name: item.institute,
          },
        });
        const newInstitute = await prisma.college.findUnique({
          where: {
            name: item.institute,
          },
        });
        if (newInstitute?.id) {
          await prisma.orcr.createMany({
            data: {
              year: 2023,
              round: 1,
              type: "JOSSA",
              exam: item.institute.toLowerCase().includes("indian institute of technology") ? "ADVANCED" : "MAINS",
              collegeId: newInstitute.id,
              institute: item.institute,
              academicProgramName: item.academicProgramName,
              quota: item.quota,
              seatType: item.seatType,
              gender: item.gender,
              openRank: parseInt(item.openRank),
              closeRank: parseInt(item.closeRank),
            },
          });
        }
      }
    });
}

exportData()
  .then(() => {
    console.log("Data exported");
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    });
