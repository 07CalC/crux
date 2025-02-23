import { PrismaClient } from "@prisma/client";
// import { data2023R1 } from "../../ORCR/2023-r1";

export default async function Home() {

  const prisma = new PrismaClient();
  // const uniqueInst = [...new Set(data2023R1.map(item => item.institute))];
  // uniqueInst.map(async (institute) => {
  //   await prisma.college.create({
  //     data: {
  //       name: institute
  //     }
  //   })
  // })
  // data2023R1.map(async (item) => {
  //   const institute = await prisma.college.findUnique({
  //     where: {
  //       name: item.institute
  //     }
  //   })
  //   if (institute?.id) {
  //     await prisma.orcr.create({
  //       data: {
  //         year: 2023,
  //         round: 1,
  //         type: "JOSSA",
  //         collegeId: institute.id,
  //         institute: item.institute,
  //         academicProgramName: item.academicProgramName,
  //         quota: item.quota,
  //         seatType: item.seatType,
  //         gender: item.gender,
  //         openRank: parseInt(item.openRank),
  //         closeRank: parseInt(item.closeRank)
  //       }
  //     });
  //   }
  //   else{
  //     await prisma.college.create({
  //       data: {
  //         name: item.institute
  //       }
  //     })
  //     const newInstitute = await prisma.college.findUnique({
  //       where: {
  //         name: item.institute
  //       }
  //     })
  //     if (newInstitute?.id) {
  //       await prisma.orcr.create({
  //         data: {
  //           year: 2023,
  //           round: 1,
  //           type: "JOSSA",
  //           collegeId: newInstitute.id,
  //           institute: item.institute,
  //           academicProgramName: item.academicProgramName,
  //           quota: item.quota,
  //           seatType: item.seatType,
  //           gender: item.gender,
  //           openRank: parseInt(item.openRank),
  //           closeRank: parseInt(item.closeRank)
  //         }
  //       });
  //     }
  //   }
  // })
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
    </div>
  );
}
