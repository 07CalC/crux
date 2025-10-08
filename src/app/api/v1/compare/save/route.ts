
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();
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
