/*
  Warnings:

  - The `diy` column on the `postcategory` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `fashion` column on the `postcategory` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `firness` column on the `postcategory` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `lifestyle` column on the `postcategory` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `travel` column on the `postcategory` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `webdev` column on the `postcategory` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `thumbsup` column on the `reaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `party` column on the `reaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `redface` column on the `reaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `cantsee` column on the `reaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `thinking` column on the `reaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `quite` column on the `reaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `shit` column on the `reaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `option6` on the `usercategory` table. All the data in the column will be lost.
  - The `fashion` column on the `usercategory` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `firness` column on the `usercategory` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `lifestyle` column on the `usercategory` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `travel` column on the `usercategory` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `webdev` column on the `usercategory` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "postcategory" DROP COLUMN "diy",
ADD COLUMN     "diy" BOOLEAN DEFAULT false,
DROP COLUMN "fashion",
ADD COLUMN     "fashion" BOOLEAN DEFAULT false,
DROP COLUMN "firness",
ADD COLUMN     "firness" BOOLEAN DEFAULT false,
DROP COLUMN "lifestyle",
ADD COLUMN     "lifestyle" BOOLEAN DEFAULT false,
DROP COLUMN "travel",
ADD COLUMN     "travel" BOOLEAN DEFAULT false,
DROP COLUMN "webdev",
ADD COLUMN     "webdev" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "reaction" DROP COLUMN "thumbsup",
ADD COLUMN     "thumbsup" BOOLEAN DEFAULT false,
DROP COLUMN "party",
ADD COLUMN     "party" BOOLEAN DEFAULT false,
DROP COLUMN "redface",
ADD COLUMN     "redface" BOOLEAN DEFAULT false,
DROP COLUMN "cantsee",
ADD COLUMN     "cantsee" BOOLEAN DEFAULT false,
DROP COLUMN "thinking",
ADD COLUMN     "thinking" BOOLEAN DEFAULT false,
DROP COLUMN "quite",
ADD COLUMN     "quite" BOOLEAN DEFAULT false,
DROP COLUMN "shit",
ADD COLUMN     "shit" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "usercategory" DROP COLUMN "option6",
ADD COLUMN     "diy" BOOLEAN DEFAULT false,
DROP COLUMN "fashion",
ADD COLUMN     "fashion" BOOLEAN DEFAULT false,
DROP COLUMN "firness",
ADD COLUMN     "firness" BOOLEAN DEFAULT false,
DROP COLUMN "lifestyle",
ADD COLUMN     "lifestyle" BOOLEAN DEFAULT false,
DROP COLUMN "travel",
ADD COLUMN     "travel" BOOLEAN DEFAULT false,
DROP COLUMN "webdev",
ADD COLUMN     "webdev" BOOLEAN DEFAULT false;
