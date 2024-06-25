// import { categories } from '@/db/categories';
import { ProductType } from "@/app/types/types";
import { db } from "@/prisma/prisma"


export const getAllProducts = async (): Promise<ProductType[]> => {
    const products = await db.product.findMany();
  
    // Transform products to match ProductType
    return products.map(product => ({
      id: product.id,
      name: product.name,
      slug: product.slug,
      description: product.description,
      price: product.price,
      sale_price: product.sale_price ?? 0,
      sku: product.sku ?? 0,
      quantity: product.quantity ?? 0,
      in_stock: product.in_stock ?? false,
      is_taxable: product.is_taxable ?? false,
      image: product.image ?? "",
      video: product.video ?? "",
      gallery: product.gallery ?? [],
      ratings: product.ratings ?? 0,
      total_reviews: product.total_reviews ?? 0,
      my_review: product.my_review ?? "",
      in_wishlist: product.in_wishlist ?? false,
    //   categories: product.categories ?? [],
      status: product.status,
      product_type: product.product_type,
    }));
  };


export const getProductById = async (id: string) => {

    const product = await db.product.findUnique({
        where: {
            id
        }
    })

    return product
}

export const deleteProductById = async (id: string) => {

    const product = await db.product.delete({
        where: {
            id
        }
    })

    return product
}