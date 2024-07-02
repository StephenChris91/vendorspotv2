"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
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
  const router = useRouter();
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
      <div className="flex items-center justify-center mx-auto">
        <SyncLoader cssOverride={override} color={color} />
      </div>
    );

  if (error) return <ErrorPage title="Error" message="No Products found" />;

  return (
    <section className="small-wrapper flex flex-col items-center mx-auto gap-5 w-full mb-12">
      <h1 className="text-2xl font-bold mb-6">Shop By Vendors</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {limited?.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-xs border rounded-none h-auto border-gray-300 shadow-sm transition-transform duration-200 hover:scale-105 cursor-pointer"
            onClick={() => router.push(`/vendors/${item.id}`)}
          >
            <div className="flex flex-col items-center p-6">
              <div className="overflow-hidden mb-4 w-full h-40">
                <Image
                  src={item.logo}
                  alt={`${item.shopname} logo`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  className="rounded-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-base md:text-lg">
                  {item.shopname}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopVendors;
