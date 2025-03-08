import { ComingSoon } from "@/app/components/ComingSoon";
import { PrismaClient } from "@prisma/client";


export async function generateMetadata({
    params,
  }: {
    params: Promise<{ id: string }>;
  }) {
    const { id } = await params
    const prisma = new PrismaClient();
    const college = await prisma.college.findUnique({
        where: {
            id: id[0],
        },
    });
    return {
        title: college?.name.toUpperCase(),
        description: `Find all the information about ${college?.name} here.`,

    }
}

export default async function College({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
    const { id } = await params
    const prisma = new PrismaClient();
    const college = await prisma.college.findUnique({
        where: {
            id: id[0],
        },
    });
    console.log(college)
    return(
        <div className="w-full h-full min-h-screen flex flex-col items-center justify-center">
            <p className="text-black font-semibold text-3xl sm:text-4xl dark:text-white">{college?.name}</p>
            <ComingSoon />
        </div>
    )
}
