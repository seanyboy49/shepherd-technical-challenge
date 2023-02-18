-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "company_name" TEXT NOT NULL,
    "ceo" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "address1" TEXT NOT NULL,
    "address2" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "is_california_relevant" BOOLEAN NOT NULL,
    "total_compensation" INTEGER NOT NULL
);
