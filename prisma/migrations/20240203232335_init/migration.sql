/*
  Warnings:

  - Added the required column `original` to the `Gallery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnail` to the `Gallery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gallery" ADD COLUMN     "original" TEXT NOT NULL,
ADD COLUMN     "thumbnail" TEXT NOT NULL;
