"use client";

import { ProductType } from "@/app/types/types";
import ProductDetails from "@/components/shop/product-details";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function Product() {
  const { id } = useParams();

  const {
    data: productData,
    isLoading,
    error,
  } = useQuery<ProductType>({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await fetch(`/api/products/${id}`);
      if (!response.ok) {
        throw new Error("Product not found");
      }
      const product = await response.json();
      return product;
    },
    enabled: !!id, // Ensure the query runs only when id is truthy
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return productData ? <ProductDetails product={productData} /> : null;
}
