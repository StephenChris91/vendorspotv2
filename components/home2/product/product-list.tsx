"use client";

import axios from "axios";
import { ProductCard } from "./product-card";
import monitor from "@/public/shop/Monitor-3.webp";
import { useQuery } from "@tanstack/react-query";
import { ProductType } from "@/app/types/types";
import { SyncLoader } from "react-spinners";
import ErrorPage from "../error";
import { CSSProperties } from "react";

const override: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  marginTop: "43px",
  borderColor: "red",
};

const ProductList = () => {
  const color = "#3364FF";
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<ProductType[]>({
    queryKey: ["products"], // Ensure query key is plural to match queryFn
    queryFn: async () => {
      const response = await axios.get("/api/products");
      const data = await response.data;
      console.log(data);
      return data;
    },
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-between mx-auto">
        <SyncLoader cssOverride={override} color={color} />
      </div>
    );

  if (error) return <ErrorPage title="Error" message="No Products found" />;
  return (
    <div className="grid grid-cols-4 gap-0">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
