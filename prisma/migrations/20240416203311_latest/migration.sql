/*
  Warnings:

  - A unique constraint covering the columns `[shop_id]` on the table `product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "shop" DROP CONSTRAINT "shop_profileId_fkey";

-- AlterTable
ALTER TABLE "shop" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "logo" DROP NOT NULL,
ALTER COLUMN "banner" DROP NOT NULL,
ALTER COLUMN "profileId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "product_shop_id_key" ON "product"("shop_id");

-- AddForeignKey
ALTER TABLE "shop" ADD CONSTRAINT "shop_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
