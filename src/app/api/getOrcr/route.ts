import { PrismaClient } from '@prisma/client';
import { Request } from 'next/server';
import { NextResponse } from 'next/server';

export default async function POST(req: Request){
    const data = await req.json();
    const { year, round, exam, type } = data;
    const prisma = new PrismaClient();
    const orcr = await prisma.orcr.findMany({
        where: {
            year: year,
            round: round,
            exam: exam,
            type: type,
        }
    });
    return NextResponse.json(orcr);
}