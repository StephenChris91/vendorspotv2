"use client";

import { Card } from "../ui/card";
import Image from "next/image";
import shopLogo from "@/public/shop/shop-logo.png";
import { useQueries, useQuery } from "@tanstack/react-query";
import { shopType } from "@/app/types/types";
import { CSSProperties } from "react";
import { SyncLoader } from "react-spinners";
import ErrorPage from "./error";

const override: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  marginTop: "43px",
  borderColor: "red",
};

const ShopVendors = () => {
  const color = "#3364FF";
  const {
    data: vendors,
    isLoading,
    error,
  } = useQuery<shopType[]>({
    queryKey: ["vendors"],
    queryFn: () => fetch("/api/vendors").then((res) => res.json()),
  });

  const limited = vendors?.slice(0, 4);
  if (isLoading)
    return (
      <div className="flex items-center justify-between mx-auto">
        <SyncLoader cssOverride={override} color={color} />
      </div>
    );

  if (error) return <ErrorPage title="Error" message="No Products found" />;

  return (
    <section className="small-wrapper flex-col flex justify-between items-center mx-auto gap-5 w-full mb-12">
      <h1>Shop By Vendors</h1>

      <div className="flex justify-between items-center mx-auto gap-3 w-full">
        {limited?.map((item) => (
          <Card className="w-full max-w-xs border rounded-none h-auto border-gray-400">
            <div className="flex justify-between px-6 items-center mx-auto w-full">
              <div className="overflow-hidden">
                <Image
                  src={item.logo}
                  alt="banner-3"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    // height: "auto",
                    objectFit: "cover",
                  }}
                  className="py-7"
                />
              </div>
              <div className="mb-5">
                <h3 className="font-semibold text-sm md:text-base w-full">
                  {item.shopname}
                </h3>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ShopVendors;
