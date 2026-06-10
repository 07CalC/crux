-- CreateTable
CREATE TABLE "ComparisonSession" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ComparisonSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comparison" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "collegeAId" TEXT NOT NULL,
    "branchA" TEXT NOT NULL,
    "collegeBId" TEXT NOT NULL,
    "branchB" TEXT NOT NULL,
    "userChoice" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comparison_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comparison" ADD CONSTRAINT "Comparison_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "ComparisonSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
