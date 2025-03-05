/*
  Warnings:

  - Added the required column `exam` to the `Orcr` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Exam" AS ENUM ('MAINS', 'ADVANCED', 'BITSAT');

-- AlterTable
ALTER TABLE "Orcr" ADD COLUMN     "exam" "Exam" NOT NULL;
