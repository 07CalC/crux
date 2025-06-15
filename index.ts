// import { PrismaClient } from "@prisma/client";
// import { data2025R1 } from "./orcr/2025r1"
// const prisma = new PrismaClient();
// async function exportData() {
// const uniqueInstitutes = new Set(data2025R1.map(item => item.institute))
// uniqueInstitutes.forEach(async (institute) => {
//     await prisma.college.create({
//         data: {
//             name: institute,
//         },
//     });
//     console.log("Institute created: ", institute);
// }
// );
//
//     await prisma.orcr.deleteMany({
//         where: {
//             year: 2025
//         }
//     })
//     data2025R1.map(async (item) => {
//         const institute = await prisma.college.findUnique({
//             where: {
//                 name: item.institute,
//             },
//         });
//         if (institute?.id) {
//             await prisma.orcr.createMany({
//                 data: {
//                     year: 2025,
//                     round: 1,
//                     type: "JOSSA",
//                     exam: item.institute.toLowerCase().includes("indian institute of technology") ? "ADVANCED" : "MAINS",
//                     collegeId: institute.id,
//                     institute: item.institute,
//                     academicProgramName: item.academicProgramName,
//                     quota: item.quota,
//                     seatType: item.seatType,
//                     gender: item.gender,
//                     openRank: parseInt(item.openRank),
//                     closeRank: parseInt(item.closeRank),
//                 },
//             });
//         } else {
//             console.log("institute not found, creating new: ", item.institute);
//             await prisma.college.create({
//                 data: {
//                     name: item.institute,
//                 },
//             });
//             console.log("Institute created: ", item.institute);
//             const newInstitute = await prisma.college.findUnique({
//                 where: {
//                     name: item.institute,
//                 },
//             });
//             if (newInstitute?.id) {
//                 await prisma.orcr.createMany({
//                     data: {
//                         year: 2025,
//                         round: 1,
//                         type: "JOSSA",
//                         exam: item.institute.toLowerCase().includes("indian institute of technology") ? "ADVANCED" : "MAINS",
//                         collegeId: newInstitute.id,
//                         institute: item.institute,
//                         academicProgramName: item.academicProgramName,
//                         quota: item.quota,
//                         seatType: item.seatType,
//                         gender: item.gender,
//                         openRank: parseInt(item.openRank),
//                         closeRank: parseInt(item.closeRank),
//                     },
//                 });
//             }
//         }
//     });
// }
//
// exportData()
//     .then(() => {
//         console.log("Data exported");
//     })
//     .catch((e) => {
//         console.error(e);
//         prisma.$disconnect();
//     });
