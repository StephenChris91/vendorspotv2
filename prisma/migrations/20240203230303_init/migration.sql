/*
  Warnings:

  - You are about to drop the column `authorId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `externalProductButtonNext` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `externalProductUrl` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `galleryId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `inStock` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `inWishlist` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `isDigital` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `isExternal` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `isTaxable` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `manufacturerId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `maxPrice` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `minPrice` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `myReview` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `productType` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `ratingCount` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `salePrice` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `shippingClassId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `shopId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `totalReviews` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[shipping_class_id]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `gallery_id` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_id` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `in_stock` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_taxable` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `manufacturer_id` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `max_price` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `min_price` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shop_id` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_reviews` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_shopId_fkey";

-- DropIndex
DROP INDEX "Product_shippingClassId_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "authorId",
DROP COLUMN "externalProductButtonNext",
DROP COLUMN "externalProductUrl",
DROP COLUMN "galleryId",
DROP COLUMN "imageId",
DROP COLUMN "inStock",
DROP COLUMN "inWishlist",
DROP COLUMN "isDigital",
DROP COLUMN "isExternal",
DROP COLUMN "isTaxable",
DROP COLUMN "manufacturerId",
DROP COLUMN "maxPrice",
DROP COLUMN "minPrice",
DROP COLUMN "myReview",
DROP COLUMN "productType",
DROP COLUMN "ratingCount",
DROP COLUMN "salePrice",
DROP COLUMN "shippingClassId",
DROP COLUMN "shopId",
DROP COLUMN "totalReviews",
DROP COLUMN "typeId",
ADD COLUMN     "author_id" TEXT,
ADD COLUMN     "external_product_button_next" TEXT,
ADD COLUMN     "external_product_url" TEXT,
ADD COLUMN     "gallery_id" INTEGER NOT NULL,
ADD COLUMN     "image_id" INTEGER NOT NULL,
ADD COLUMN     "in_stock" BOOLEAN NOT NULL,
ADD COLUMN     "in_wishlist" BOOLEAN,
ADD COLUMN     "is_digital" BOOLEAN,
ADD COLUMN     "is_external" BOOLEAN,
ADD COLUMN     "is_taxable" BOOLEAN NOT NULL,
ADD COLUMN     "manufacturer_id" TEXT NOT NULL,
ADD COLUMN     "max_price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "min_price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "my_review" TEXT,
ADD COLUMN     "product_type" "ProductType" NOT NULL DEFAULT 'SIMPLE',
ADD COLUMN     "rating_count" INTEGER,
ADD COLUMN     "sale_price" INTEGER,
ADD COLUMN     "shipping_class_id" SERIAL,
ADD COLUMN     "shop_id" INTEGER NOT NULL,
ADD COLUMN     "total_reviews" INTEGER NOT NULL,
ADD COLUMN     "type_id" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Product_shipping_class_id_key" ON "Product"("shipping_class_id");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_shop_id_fkey" FOREIGN KEY ("shop_id") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
