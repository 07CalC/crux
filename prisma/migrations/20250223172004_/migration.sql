/*
  Warnings:

  - Added the required column `femaleStudents` to the `College` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maleStudents` to the `College` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalStudents` to the `College` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "College" ADD COLUMN     "femaleStudents" INTEGER NOT NULL,
ADD COLUMN     "maleStudents" INTEGER NOT NULL,
ADD COLUMN     "totalStudents" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "placement" (
    "id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "collegeId" TEXT NOT NULL,
    "totalGrads" INTEGER NOT NULL,
    "placed" INTEGER NOT NULL,
    "median" INTEGER NOT NULL,
    "higherEducation" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "placement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "placement" ADD CONSTRAINT "placement_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
