
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await prisma.comparisonSession.create({ data: {} });

  const iits = await prisma.college.findMany({
    where: { collegeType: "IIT" },
    select: {
      id: true,
      name: true,
      nirf: true,
      location: true,
      coverImage: true,
      orcrs: { select: { academicProgramName: true }, distinct: ["academicProgramName"] },
    },
  });

  const comparisons = Array.from({ length: 20 }, () => {
    const shuffled = iits.sort(() => 0.5 - Math.random());
    const [a, b] = shuffled.slice(0, 2);
    const branchA = a.orcrs[Math.floor(Math.random() * a.orcrs.length)].academicProgramName;
    const branchB = b.orcrs[Math.floor(Math.random() * b.orcrs.length)].academicProgramName;
    return { collegeA: a, branchA, collegeB: b, branchB };
  });

  return NextResponse.json({ sessionId: session.id, comparisons });
}
