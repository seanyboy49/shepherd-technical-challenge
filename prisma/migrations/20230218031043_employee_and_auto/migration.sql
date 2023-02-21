-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "applicant_name" TEXT NOT NULL,
    "applicant_title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Auto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "vin" TEXT NOT NULL,
    "make" TEXT NOT NULL
);
