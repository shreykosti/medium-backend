/*
  Warnings:

  - Added the required column `updatedAt` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Made the column `username` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" SET NOT NULL;

-- CreateTable
CREATE TABLE "postcategory" (
    "id" TEXT NOT NULL,
    "option1" TEXT NOT NULL DEFAULT ' ',
    "option2" TEXT NOT NULL DEFAULT ' ',
    "option3" TEXT NOT NULL DEFAULT ' ',
    "option4" TEXT DEFAULT ' ',
    "option5" TEXT DEFAULT ' ',
    "option6" TEXT DEFAULT ' ',
    "postId" TEXT NOT NULL,

    CONSTRAINT "postcategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usercategory" (
    "id" TEXT NOT NULL,
    "option1" TEXT NOT NULL DEFAULT ' ',
    "option2" TEXT NOT NULL DEFAULT ' ',
    "option3" TEXT NOT NULL DEFAULT ' ',
    "option4" TEXT DEFAULT ' ',
    "option5" TEXT DEFAULT ' ',
    "option6" TEXT DEFAULT ' ',
    "userId" TEXT NOT NULL,

    CONSTRAINT "usercategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "postcategory" ADD CONSTRAINT "postcategory_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usercategory" ADD CONSTRAINT "usercategory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
