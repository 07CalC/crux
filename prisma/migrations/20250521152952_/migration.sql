/*
  Warnings:

  - You are about to drop the column `images` on the `College` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "CollegeImage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "collegeId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CollegeImage_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_College" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "bongs" INTEGER NOT NULL DEFAULT 0,
    "coverImage" TEXT,
    "location" TEXT,
    "officialWebsite" TEXT,
    "totalStudents" INTEGER,
    "maleStudents" INTEGER,
    "femaleStudents" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "nirf" INTEGER,
    "moderated" BOOLEAN NOT NULL DEFAULT false,
    "collegeType" TEXT
);
INSERT INTO "new_College" ("bongs", "collegeType", "coverImage", "createdAt", "femaleStudents", "id", "location", "maleStudents", "moderated", "name", "nirf", "officialWebsite", "totalStudents", "updatedAt") SELECT "bongs", "collegeType", "coverImage", "createdAt", "femaleStudents", "id", "location", "maleStudents", "moderated", "name", "nirf", "officialWebsite", "totalStudents", "updatedAt" FROM "College";
DROP TABLE "College";
ALTER TABLE "new_College" RENAME TO "College";
CREATE UNIQUE INDEX "College_name_key" ON "College"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
