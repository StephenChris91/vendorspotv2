-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "gallery_id" DROP NOT NULL,
ALTER COLUMN "image_id" DROP NOT NULL,
ALTER COLUMN "manufacturer_id" DROP NOT NULL,
ALTER COLUMN "shipping_class_id" DROP NOT NULL;
