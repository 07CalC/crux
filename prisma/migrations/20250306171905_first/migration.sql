-- CreateTable
CREATE TABLE "College" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "bongs" INTEGER NOT NULL DEFAULT 0,
    "coverImage" TEXT,
    "location" TEXT,
    "officialWebsite" TEXT,
    "images" JSONB NOT NULL,
    "totalStudents" INTEGER,
    "maleStudents" INTEGER,
    "femaleStudents" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Orcr" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "year" INTEGER NOT NULL,
    "round" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "exam" TEXT NOT NULL,
    "collegeId" TEXT NOT NULL,
    "institute" TEXT NOT NULL,
    "academicProgramName" TEXT NOT NULL,
    "quota" TEXT NOT NULL,
    "seatType" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "openRank" INTEGER NOT NULL,
    "closeRank" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Orcr_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "collegeId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Review_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "placement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "year" INTEGER NOT NULL,
    "collegeId" TEXT NOT NULL,
    "totalGrads" INTEGER NOT NULL,
    "placed" INTEGER NOT NULL,
    "median" INTEGER NOT NULL,
    "higherEducation" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "placement_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "College_name_key" ON "College"("name");
