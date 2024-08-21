/*
  Warnings:

  - You are about to drop the column `option1` on the `postcategory` table. All the data in the column will be lost.
  - You are about to drop the column `option2` on the `postcategory` table. All the data in the column will be lost.
  - You are about to drop the column `option3` on the `postcategory` table. All the data in the column will be lost.
  - You are about to drop the column `option4` on the `postcategory` table. All the data in the column will be lost.
  - You are about to drop the column `option5` on the `postcategory` table. All the data in the column will be lost.
  - You are about to drop the column `option6` on the `postcategory` table. All the data in the column will be lost.
  - You are about to drop the column `option1` on the `usercategory` table. All the data in the column will be lost.
  - You are about to drop the column `option2` on the `usercategory` table. All the data in the column will be lost.
  - You are about to drop the column `option3` on the `usercategory` table. All the data in the column will be lost.
  - You are about to drop the column `option4` on the `usercategory` table. All the data in the column will be lost.
  - You are about to drop the column `option5` on the `usercategory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "postcategory" DROP COLUMN "option1",
DROP COLUMN "option2",
DROP COLUMN "option3",
DROP COLUMN "option4",
DROP COLUMN "option5",
DROP COLUMN "option6",
ADD COLUMN     "diy" TEXT DEFAULT ' ',
ADD COLUMN     "fashion" TEXT DEFAULT ' ',
ADD COLUMN     "firness" TEXT NOT NULL DEFAULT ' ',
ADD COLUMN     "lifestyle" TEXT NOT NULL DEFAULT ' ',
ADD COLUMN     "travel" TEXT DEFAULT ' ',
ADD COLUMN     "webdev" TEXT NOT NULL DEFAULT ' ';

-- AlterTable
ALTER TABLE "usercategory" DROP COLUMN "option1",
DROP COLUMN "option2",
DROP COLUMN "option3",
DROP COLUMN "option4",
DROP COLUMN "option5",
ADD COLUMN     "fashion" TEXT DEFAULT ' ',
ADD COLUMN     "firness" TEXT NOT NULL DEFAULT ' ',
ADD COLUMN     "lifestyle" TEXT NOT NULL DEFAULT ' ',
ADD COLUMN     "travel" TEXT DEFAULT ' ',
ADD COLUMN     "webdev" TEXT NOT NULL DEFAULT ' ';

-- CreateTable
CREATE TABLE "reaction" (
    "id" TEXT NOT NULL,
    "thumbsup" INTEGER NOT NULL DEFAULT 0,
    "party" INTEGER NOT NULL DEFAULT 0,
    "redface" INTEGER NOT NULL DEFAULT 0,
    "cantsee" INTEGER NOT NULL DEFAULT 0,
    "thinking" INTEGER NOT NULL DEFAULT 0,
    "quite" INTEGER NOT NULL DEFAULT 0,
    "shit" INTEGER NOT NULL DEFAULT 0,
    "postId" TEXT NOT NULL,

    CONSTRAINT "reaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reaction" ADD CONSTRAINT "reaction_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
