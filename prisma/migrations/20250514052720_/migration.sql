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
    "images" JSONB,
    "totalStudents" INTEGER,
    "maleStudents" INTEGER,
    "femaleStudents" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "nirf" INTEGER,
    "moderated" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_College" ("bongs", "coverImage", "createdAt", "femaleStudents", "id", "images", "location", "maleStudents", "name", "officialWebsite", "totalStudents", "updatedAt") SELECT "bongs", "coverImage", "createdAt", "femaleStudents", "id", "images", "location", "maleStudents", "name", "officialWebsite", "totalStudents", "updatedAt" FROM "College";
DROP TABLE "College";
ALTER TABLE "new_College" RENAME TO "College";
CREATE UNIQUE INDEX "College_name_key" ON "College"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
