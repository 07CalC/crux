/*
  Warnings:

  - Added the required column `round` to the `Orcr` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Orcr` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Orcr` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrcrType" AS ENUM ('JOSSA', 'CSAB', 'BITSAT', 'OTHER');

-- AlterTable
ALTER TABLE "Orcr" ADD COLUMN     "round" INTEGER NOT NULL,
ADD COLUMN     "type" "OrcrType" NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;
