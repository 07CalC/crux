-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "CollegeType" ADD VALUE 'NEET_PG';
ALTER TYPE "CollegeType" ADD VALUE 'NEET_UG';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Exam" ADD VALUE 'NEET_PG';
ALTER TYPE "Exam" ADD VALUE 'NEET_UG';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "OrcrType" ADD VALUE 'NEET_PG';
ALTER TYPE "OrcrType" ADD VALUE 'NEET_UG';
