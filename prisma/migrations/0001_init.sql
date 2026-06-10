-- CreateTable
CREATE TABLE "College" (
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
    "openRank" INTEGER,
    "closeRank" INTEGER,
    "marks" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Orcr_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "collegeId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Review_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Placement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "year" INTEGER NOT NULL,
    "collegeId" TEXT NOT NULL,
    "totalGrads" INTEGER NOT NULL,
    "placed" INTEGER NOT NULL,
    "median" INTEGER NOT NULL,
    "higherEducation" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Placement_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CollegeImage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "collegeId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CollegeImage_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ComparisonSession" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Comparison" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionId" TEXT NOT NULL,
    "collegeAId" TEXT NOT NULL,
    "branchA" TEXT NOT NULL,
    "collegeBId" TEXT NOT NULL,
    "branchB" TEXT NOT NULL,
    "userChoice" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Comparison_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "ComparisonSession" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "feedback" TEXT NOT NULL,
    "imageUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "College_name_key" ON "College"("name");

-- CreateIndex
CREATE INDEX "College_name_idx" ON "College"("name");

-- CreateIndex
CREATE INDEX "Orcr_collegeId_idx" ON "Orcr"("collegeId");

-- CreateIndex
CREATE INDEX "Orcr_year_idx" ON "Orcr"("year");

-- CreateIndex
CREATE INDEX "Orcr_type_idx" ON "Orcr"("type");

-- CreateIndex
CREATE INDEX "Orcr_exam_idx" ON "Orcr"("exam");

-- CreateIndex
CREATE INDEX "Review_collegeId_idx" ON "Review"("collegeId");

-- CreateIndex
CREATE INDEX "Placement_collegeId_idx" ON "Placement"("collegeId");

-- CreateIndex
CREATE INDEX "Placement_year_idx" ON "Placement"("year");

-- CreateIndex
CREATE INDEX "CollegeImage_collegeId_idx" ON "CollegeImage"("collegeId");

-- CreateIndex
CREATE INDEX "Comparison_sessionId_idx" ON "Comparison"("sessionId");

