import { S3Client } from "@aws-sdk/client-s3";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { ProductType, CartItem } from "@/app/types/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_BUCKET_REGION!,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
  },
});





// lib/utils.ts

export function convertProductToCartItem(product: ProductType): CartItem {
  return {
    id: product.id as string,
    product: product.name,
    price: product.price,
    quantity: 1,
    name: product.name,
    image: product.image ?? "/images/products/default-product.png", // Add this line
  };
}

