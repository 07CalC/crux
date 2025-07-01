import { prisma } from "@/lib/prisma";
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
    const { clgId } = data;
    if (!clgId) {
        return new NextResponse(JSON.stringify({ message: "College ID is required" }), { status: 400 });
    }
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
            bongs: college.bongs - 1,
        },
    });
    revalidatePath('/explore')
    return new NextResponse(JSON.stringify({ message: "Unbonked successfully" }), { status: 200 });
}
