"use client";

import axios from "axios";
import { ProductCard } from "./product-card";
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

const fetchProducts = async (): Promise<ProductType[]> => {
  const response = await axios.get("/api/products");
  const data = response.data;

  if (!Array.isArray(data)) {
    throw new Error("Data is not an array");
  }

  return data.slice(1); // Get all products except the first one
};

const ProductList = () => {
  const color = "#3364FF";
  const {
    data: products = [],
    error,
    isLoading,
  } = useQuery<ProductType[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center mx-auto">
        <SyncLoader cssOverride={override} color={color} />
      </div>
    );

  if (error || products.length === 0)
    return <ErrorPage title="Error" message="No Products found" />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
