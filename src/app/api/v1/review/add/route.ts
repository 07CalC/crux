import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    const userAgent = req.headers.get("user-agent");
    const fetchMode = req.headers.get('sec-fetch-mode');
    const fetchSite = req.headers.get('sec-fetch-site');
    const acceptLang = req.headers.get('accept-language');
    const browserRegex = /(Mozilla|Chrome|Gecko|Firefox|AppleWebKit|Opera|Safari)/i;
    if (!browserRegex.test(userAgent || "") || !fetchMode || !fetchSite || !acceptLang) {
        return new NextResponse(JSON.stringify({ message: "Invalid request and fuck you" }), { status: 400 });
    }
    const data = await req.json();
    const { clgId, comment, rating } = data;
    if (!clgId || !comment || !rating) {
        return new NextResponse(JSON.stringify({ error: "clgId, comment, rating are required" }), { status: 400 });
    }
    const prisma = new PrismaClient();
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
