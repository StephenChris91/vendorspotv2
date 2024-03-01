/*
  Warnings:

  - You are about to drop the column `thumbnail` on the `Image` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "thumbnail";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "image" TEXT[];
