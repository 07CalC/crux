import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


export async function POST(req: Request){
    const data = await req.json();
    const { year, round, exam, type } = data;
    const prisma = new PrismaClient();
    const orcr = await prisma.orcr.findMany({
        where: {
            year: parseInt(year),
            round: parseInt(round),
            exam: exam,
            type: type,
        }
    });
    console.log(orcr[0]);
    return NextResponse.json(orcr);
}