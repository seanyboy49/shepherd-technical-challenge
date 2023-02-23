-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "company_name" TEXT NOT NULL,
    "ceo" TEXT NOT NULL,
    "website" TEXT,
    "address1" TEXT NOT NULL,
    "address2" TEXT,
    "city" TEXT,
    "is_california_relevant" BOOLEAN,
    "total_compensation" INTEGER NOT NULL
);
INSERT INTO "new_Company" ("address1", "address2", "ceo", "city", "company_name", "id", "is_california_relevant", "total_compensation", "website") SELECT "address1", "address2", "ceo", "city", "company_name", "id", "is_california_relevant", "total_compensation", "website" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
