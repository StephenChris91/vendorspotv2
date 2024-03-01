/*
  Warnings:

  - You are about to drop the column `productId` on the `Gallery` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Image` table. All the data in the column will be lost.
  - Added the required column `thumbnail` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `image` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Gallery" DROP CONSTRAINT "Gallery_productId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_productId_fkey";

-- DropIndex
DROP INDEX "Gallery_productId_key";

-- DropIndex
DROP INDEX "Image_productId_key";

-- AlterTable
ALTER TABLE "Gallery" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "productId",
ADD COLUMN     "thumbnail" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "gallery" JSONB[],
DROP COLUMN "image",
ADD COLUMN     "image" JSONB NOT NULL;
