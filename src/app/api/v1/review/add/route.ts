import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    const data = await req.json();
    const { clgId, comment, rating } = data;
    if (!clgId || !comment || !rating) {
        return new NextResponse(JSON.stringify({ error: "clgId, comment, rating are required" }), { status: 400 });
    }
    const college = await prisma.college.findUnique({
        where: {
            id: clgId
        }
    });
    if (!college) {
        return new NextResponse(JSON.stringify({ message: "College not found" }), { status: 404 });
    }
    await prisma.review.create({
        data: {
            collegeId: clgId,
            comment: comment,
            rating: rating
        }
    });
    revalidatePath(`/explore/${clgId}`);
    return new NextResponse(JSON.stringify({ message: "Review added successfully" }), { status: 200 });
}
