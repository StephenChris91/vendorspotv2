'use server';

import { productSchema } from "@/app/schemas";
import { db } from "@/prisma/prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { getUserById } from "@/lib/data/user";
import { ProductType } from "@/app/types/types";
export async function createProduct(values: ProductType) {
  const session = await auth();

  if (!session?.user) {
    return { error: 'User not authenticated' };
  }

  const user = await getUserById(session.user.id as string)

  if (!user || (user.role !== 'Vendor' && user.role !== 'Admin')) {
    return { error: 'User not authorized to create a product' };
  }

  const validInput = productSchema.safeParse(values);

  if (!validInput.success) {
    return { error: 'Invalid product data' };
  }

  const {
    name,
    slug,
    description,
    type_id,
    price,
    sale_price,
    language = "",
    sku,
    quantity,
    in_stock,
    is_taxable,
    shipping_class_id,
    status,
    product_type,
    height,
    width,
    image,
    video,
    gallery,
    gallery_id,
    is_digital,
    is_external,
    external_product_url,
    external_product_button_text = "",
    ratings = 0,
    total_reviews,
    rating_count,
    my_review,
    in_wishlist,
    shop_id,
  } = validInput.data;

  // Transform gallery data if necessary
  const galleryData = gallery?.map((url) => ({
    original: url,
    thumbnail: url, // Assuming thumbnail is same as original for simplicity
  })) ?? [];

  // Handle the primary image if it exists
  const imageData = image ? [{
    original: image,
    thumbnail: image, // Assuming thumbnail is same as original for simplicity
  }] : [];

  try {
    const product = await db.product.create({
      data: {
        name,
        slug,
        description,
        type_id,
        price,
        sale_price,
        language,
        sku,
        quantity,
        in_stock,
        is_taxable,
        shipping_class_id,
        status,
        product_type,
        height,
        width,
        video,
        gallery: {
          create: galleryData,
        },
        gallery_id,
        is_digital,
        is_external,
        external_product_url,
        external_product_button_text,
        ratings,
        total_reviews,
        rating_count,
        my_review,
        in_wishlist,
        shop: {
          connect: { id: shop_id },
        },
        images: {
          create: imageData,
        },
      },
    });

    revalidatePath('/'); // Adjust this path as necessary
    return { status: 'success', product };
  } catch (error) {
    console.error(error);
    return { status: 'error', message: 'Failed to create product' };
  }
}
