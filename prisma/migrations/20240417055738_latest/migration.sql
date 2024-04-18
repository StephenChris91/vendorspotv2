/*
  Warnings:

  - A unique constraint covering the columns `[profileId]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "profileId" SERIAL;

-- CreateIndex
CREATE UNIQUE INDEX "user_profileId_key" ON "user"("profileId");
