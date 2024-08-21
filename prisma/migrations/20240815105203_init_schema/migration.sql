/*
  Warnings:

  - A unique constraint covering the columns `[postId]` on the table `postcategory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[postId]` on the table `reaction` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `usercategory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "postcategory_postId_key" ON "postcategory"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "reaction_postId_key" ON "reaction"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "usercategory_userId_key" ON "usercategory"("userId");
