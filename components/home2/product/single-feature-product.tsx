"use client";

import { ProductType } from "@/app/types/types";
import { ProductCard } from "@/components/home2/product/product-card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ErrorPage from "../error";
import { SyncLoader } from "react-spinners";
import { CSSProperties } from "react";

const override: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  marginTop: "43px",
  borderColor: "red",
};

const SingleFeatureProduct = () => {
  const color = "#3364FF";

  const {
    data: singleProduct,
    error,
    isLoading,
  } = useQuery<ProductType>({
    queryKey: ["singleProduct"],
    queryFn: async () => {
      const response = await axios.get("/api/products");
      const data = response.data[0];
      return data;
    },
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center mx-auto">
        <SyncLoader cssOverride={override} color={color} />
      </div>
    );

  if (error || !singleProduct)
    return <ErrorPage title="Error" message="No Products found" />;

  return <ProductCard product={singleProduct} single={true} hasButton={true} />;
};

export default SingleFeatureProduct;
