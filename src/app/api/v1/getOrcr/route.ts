import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import path from 'path';
import fs from "fs-extra";
import zlib from "zlib";

const CACHE_DIR = path.join(process.cwd(), 'cachedOrcr');

export async function POST(req: Request){
    console.log("\ngetOrcr Route hit")
    const data = await req.json();
    const { year, round, exam, type } = data;
    console.log("req for ", year, round, exam, type)
    const file = path.join(CACHE_DIR, `${year}-${round}-${exam}-${type}.json`);
    if(fs.existsSync(file)){
        const data = fs.readFileSync(file);
        console.log("cached response found, returned cached response\n")
        return new NextResponse(data, {
            headers: {
              "Content-Encoding": "gzip",
              "Content-Type": "application/json",
              "Cache-Control": "public, max-age=3153600, immutable",
            },
          });
        }
    const prisma = new PrismaClient();
    const orcr = await prisma.orcr.findMany({
        where: {
            year: parseInt(year),
            round: parseInt(round),
            exam: exam,
            type: type,
        }
    });
    if (!orcr) return new NextResponse(JSON.stringify({ error: "Orcr not found" }), { status: 404 });
    if(!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR);

    const jsonString = JSON.stringify(orcr);
    const compressedOrcr = zlib.gzipSync(Buffer.from(jsonString));

    fs.writeFileSync(file, compressedOrcr);
    console.log("new file written, returned cached response\n")
    return new NextResponse(compressedOrcr, {
        headers: {
          "Content-Encoding": "gzip",
          "Content-Type": "application/json",
        },
      });
}