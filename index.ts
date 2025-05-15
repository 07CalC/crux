// import { PrismaClient } from "@prisma/client";
// import { data2023R1 } from "./ORCR/2023-r1"
// import { data2023R2 } from "./ORCR/2023-r2"
// import { data2023R3 } from "./ORCR/2023-r3"
// import { data2023R4 } from "./ORCR/2023-r4"
// import { data2023R5 } from "./ORCR/2023-r5"
// import { data2023R6 } from "./ORCR/2023-r6"
// import { data2023csR1 } from "./ORCR/2023-csab-r1"
// import { data2023csR2 } from "./ORCR/2023-csab-r2"
// import { data2024R1 } from "./ORCR/2024-r1"
// import { data2024R2 } from "./ORCR/2024-r2"
// import { data2024R3 } from "./ORCR/2024-r3"
// import { data2024R4 } from "./ORCR/2024-r4"
// import { data2024R5 } from "./ORCR/2024-r5"
// import { data2024csR1 } from "./ORCR/2024-csab-r1"
// import { data2024csR2 } from "./ORCR/2024-csab-r2"

import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();
// let count = 0;
// async function exportData() {
//     // const uniqueInstitutes1 = new Set(data2023R1.map((item) => item.institute));
//     // const uniqueInstitutes2 = new Set(data2024R1.map((item) => item.institute));
//     // console.log(uniqueInstitutes2.size);
//     // uniqueInstitutes.forEach(async (institute) => {
//     //     await prisma.college.create({
//     //         data: {
//     //             name: institute,
//     //         },
//     //     });
//     //     console.log("Institute created: ", institute);
//     // }
//     // );
//     // await prisma.orcr.deleteMany({where: {round: 1, year: 2024}});
    
//     // await prisma.orcr.deleteMany({where: {round: 1, year: 2024}});
//     data2024csR2.map(async (item) => {
//       const institute = await prisma.college.findUnique({
//         where: {
//           name: item.institute,
//         },
//       });
//       if (institute?.id) {
//         await prisma.orcr.createMany({
//           data: {
//             year: 2024,
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
//               year: 2024,
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
// });

// const prisma = new PrismaClient()

// async function main() {
//     const clgName = 'Indian Institute of Technology Madras'
//     const totalStudents = 3440
//     const femaleStudents = 701
//     const maleStudents = totalStudents - femaleStudents
//     const college = await prisma.college.findUnique({
//         where: {
//             name: clgName,
//         },
//     });
//     console.log(college)
//     if(college){
//         await prisma.college.update({
//             where: {
//                 id: college.id,
//             },
//             data: {
//                 totalStudents: totalStudents,
//                 femaleStudents: femaleStudents,
//                 maleStudents: maleStudents,
//             },
//         });
//     }
// }

// main()


const main = async () => {
    const prisma = new PrismaClient();
    const colleges = await prisma.college.findMany({
        select: {
            name: true,
            coverImage: true,
        }
    })
    
    let domains: any = []
    
    for (const college of colleges) {
        if(college.coverImage?.startsWith("https://")) {
            console.log(college.name)
            try {
                // Extract domain from URL
                const url = new URL(college.coverImage);
                const domain = url.hostname;
                
                // Add domain to array if it's not already included
                if (!domains.includes(domain)) {
                    domains.push(domain);
                }
            } catch (error) {
                console.error(`Error parsing URL for ${college.name}: ${college.coverImage}`);
            }
        }
    }
    
    console.log("Domains found:", domains);
    console.log(`Total unique domains: ${domains.length}`);
}

main();