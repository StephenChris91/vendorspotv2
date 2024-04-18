/*
  Warnings:

  - You are about to drop the column `profilesId` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "user_profilesId_key";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "profilesId";
