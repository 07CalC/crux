// import { PrismaClient } from "@prisma/client";
// import { data2023R1 } from "./ORCR/2023-r1"
// import { data2023R2 } from "./ORCR/2023-r2"
// import { data2023R3 } from "./ORCR/2023-r3"
// import { data2023R4 } from "./ORCR/2023-r4"
// import { data2023R5 } from "./ORCR/2023-r5"
// import { data2023R6 } from "./ORCR/2023-r6"
// import { data2023csR1 } from "./ORCR/2023-csab-r1"
// import { data2023csR2 } from "./ORCR/2023-csab-r2"

// const prisma = new PrismaClient();

// async function exportData() {
//     // const uniqueInstitutes = new Set(data2023R1.map((item) => item.institute));
//     // uniqueInstitutes.forEach(async (institute) => {
//     //     await prisma.college.create({
//     //         data: {
//     //             name: institute,
//     //         },
//     //     });
//     //     console.log("Institute created: ", institute);
//     // }
//     // );
//     // await prisma.orcr.deleteMany({where: {round: 2, year: 2023}});
//     data2023csR2.map(async (item) => {
//       const institute = await prisma.college.findUnique({
//         where: {
//           name: item.institute,
//         },
//       });
//       if (institute?.id) {
//         await prisma.orcr.createMany({
//           data: {
//             year: 2023,
//             round: 2,
//             type: "CSAB",
//             exam: item.institute.toLowerCase().includes("indian institute of technology") ? "ADVANCED" : "MAINS",
//             collegeId: institute.id,
//             institute: item.institute,
//             academicProgramName: item.academicProgramName,
//             quota: item.quota,
//             seatType: item.seatType,
//             gender: item.gender,
//             openRank: parseInt(item.openRank),
//             closeRank: parseInt(item.closeRank),
//           },
//         });
//       } else {
//         await prisma.college.create({
//           data: {
//             name: item.institute,
//             images: [] // Default empty array for required images field
//           },
//         });
//         console.log("Institute created: ", item.institute);
//         const newInstitute = await prisma.college.findUnique({
//           where: {
//             name: item.institute,
//           },
//         });
//         if (newInstitute?.id) {
//           await prisma.orcr.createMany({
//             data: {
//               year: 2023,
//               round: 2,
//               type: "CSAB",
//               exam: item.institute.toLowerCase().includes("indian institute of technology") ? "ADVANCED" : "MAINS",
//               collegeId: newInstitute.id,
//               institute: item.institute,
//               academicProgramName: item.academicProgramName,
//               quota: item.quota,
//               seatType: item.seatType,
//               gender: item.gender,
//               openRank: parseInt(item.openRank),
//               closeRank: parseInt(item.closeRank),
//             },
//           });
//         }
//       }
//     });
// }

// exportData()
//   .then(() => {
//     console.log("Data exported");
//   })
//   .catch((e) => {
//     console.error(e);
//     prisma.$disconnect();
//     });
