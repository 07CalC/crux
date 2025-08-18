import { NextResponse } from 'next/server';
import path from 'path';
import fs from "fs-extra";
import zlib from "zlib";
import { mostRecentJossaOrcr } from '@/constants';
import { prisma } from '@/lib/prisma';

const CACHE_DIR = path.join(process.cwd(), 'cachedOrcr');

export async function POST(req: Request) {
    const data = await req.json();
    const { year, round, exam, type } = data;
    if (!year || !round || !exam || !type) {
        return new NextResponse(JSON.stringify({ error: "Year, round, exam and type are required" }), { status: 400 });
    }
    if (type == "JOSSA" && year >= mostRecentJossaOrcr.year && round > mostRecentJossaOrcr.round) {
        return new NextResponse(JSON.stringify([]), { status: 400 })
    }
    const file = path.join(CACHE_DIR, `${year}-${round}-${exam}-${type}.json`);
    if (fs.existsSync(file)) {
        const data = fs.readFileSync(file);
        return new NextResponse(data, {
            headers: {
                "Content-Encoding": "gzip",
                "Content-Type": "application/json",
                "Cache-Control": "public, max-age=3153600, immutable",
            },
        });
    }
    const orcr = await prisma.orcr.findMany({
        where: {
            year: parseInt(year),
            round: parseInt(round),
            exam: exam,
            type: type,
        }
    });
    if (!orcr) return new NextResponse(JSON.stringify({ error: "Orcr not found" }), { status: 404 });
    if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR);

    const jsonString = JSON.stringify(orcr);
    const compressedOrcr = zlib.gzipSync(Buffer.from(jsonString));

    if (process.env.NODE_ENV !== 'production') {
        fs.writeFileSync(file, compressedOrcr);
    }
    return new NextResponse(compressedOrcr, {
        headers: {
            "Content-Encoding": "gzip",
            "Content-Type": "application/json",
        },
    });
}
