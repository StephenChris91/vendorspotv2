/*
  Warnings:

  - You are about to drop the column `original` on the `Gallery` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnail` on the `Gallery` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[galleryId]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `galleryId` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gallery" DROP COLUMN "original",
DROP COLUMN "thumbnail";

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "galleryId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Image_galleryId_key" ON "Image"("galleryId");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_galleryId_fkey" FOREIGN KEY ("galleryId") REFERENCES "Gallery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
