/*
  Warnings:

  - You are about to drop the column `dislikes` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `Post` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `Post` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "dislikes",
DROP COLUMN "likes",
ALTER COLUMN "published" DROP NOT NULL;

-- AlterTable
ALTER TABLE "reaction" ADD COLUMN     "dislikes" INTEGER DEFAULT 0,
ADD COLUMN     "likes" INTEGER DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Post_title_key" ON "Post"("title");
