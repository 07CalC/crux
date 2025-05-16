import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";




export async function POST(req: Request){
    console.log("\ngetClgOrcr Route hit")
    const data = await req.json();
    console.log("data received: ", data)
    const { year, round, type, clgId} = data
    const prisma = new PrismaClient();
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