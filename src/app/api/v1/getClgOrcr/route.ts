import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data = await req.json();
    const { year, round, type, clgId } = data
    if (!year || !round || !type || !clgId) {
        return new NextResponse(JSON.stringify({ error: "Year, round, type and college ID are required" }), { status: 400 });
    }
    const orcr = await prisma.orcr.findMany({
        where: {
            year: parseInt(year),
            round: parseInt(round),
            type: type,
            collegeId: clgId
        }
    });
    if (!orcr) return new NextResponse(JSON.stringify({ error: "Orcr not found" }), { status: 404 });
    return new NextResponse(JSON.stringify(orcr), { status: 200 });

}
