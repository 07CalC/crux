import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    const data = await req.json();
    const { clgId } = data;
    const prisma = new PrismaClient();
    const college = await prisma.college.findUnique({
        where: {
            id: clgId,
        },
    });
    if (!college) {
        return new NextResponse(JSON.stringify({ message: "College not found" }), { status: 404 });
    }
    await prisma.college.update({
        where: {
            id: clgId,
        },
        data: {
            bongs: college.bongs + 1,
        },
    });
    revalidatePath('/explore')
    return new NextResponse(JSON.stringify({ message: "Bonked successfully" }), { status: 200 });
}