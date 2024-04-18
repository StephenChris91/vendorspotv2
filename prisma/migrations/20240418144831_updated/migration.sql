-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_shop_id_fkey";

-- AlterTable
ALTER TABLE "product" ALTER COLUMN "total_reviews" DROP NOT NULL,
ALTER COLUMN "shop_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "profileId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_shop_id_fkey" FOREIGN KEY ("shop_id") REFERENCES "shop"("id") ON DELETE SET NULL ON UPDATE CASCADE;
