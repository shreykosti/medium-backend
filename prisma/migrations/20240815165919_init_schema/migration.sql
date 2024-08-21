/*
  Warnings:

  - The `thumbsup` column on the `reaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `party` column on the `reaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `redface` column on the `reaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `cantsee` column on the `reaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `thinking` column on the `reaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `quite` column on the `reaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `shit` column on the `reaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "reaction" DROP COLUMN "thumbsup",
ADD COLUMN     "thumbsup" INTEGER DEFAULT 0,
DROP COLUMN "party",
ADD COLUMN     "party" INTEGER DEFAULT 0,
DROP COLUMN "redface",
ADD COLUMN     "redface" INTEGER DEFAULT 0,
DROP COLUMN "cantsee",
ADD COLUMN     "cantsee" INTEGER DEFAULT 0,
DROP COLUMN "thinking",
ADD COLUMN     "thinking" INTEGER DEFAULT 0,
DROP COLUMN "quite",
ADD COLUMN     "quite" INTEGER DEFAULT 0,
DROP COLUMN "shit",
ADD COLUMN     "shit" INTEGER DEFAULT 0;
