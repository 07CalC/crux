
import { getDb } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const prisma = getDb()
  const body: { sessionId: string; collegeAId: string; branchA: string; collegeBId: string; branchB: string; selectedCollegeId: string } = await req.json();
  const { sessionId, collegeAId, branchA, collegeBId, branchB, selectedCollegeId } = body;

  await prisma.comparison.create({
    data: {
      sessionId,
      collegeAId,
      branchA,
      collegeBId,
      branchB,
      userChoice: selectedCollegeId,
    },
  });

  return NextResponse.json({ ok: true });
}
