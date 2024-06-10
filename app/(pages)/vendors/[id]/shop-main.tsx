import React, { useEffect, useState } from "react";
import ProductCard from "@/components/shop/product-card";
import Banner from "@/components/shop/banner";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMediaQuery } from "react-responsive";
import ProfileInfo from "@/components/shop/profile-info";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { getShopById } from "@/actions/createshop";
import { shopType } from "@/app/types/types";
import { shop } from "@prisma/client";

const ShopMain = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const [shop, setShop] = useState<shop | null>(null);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({ query: "(max-width: 1224px)" });

  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator while fetching data
  }

  const defaultLogo = "/default-logo.png"; // Provide a path to a default logo image
  const defaultBanner = "/default-banner.png"; // Provide a path to a default banner image

  return (
    <div
      className={`w-full flex gap-6 ${
        isDesktopOrLaptop ? "lg:flex-row" : "sm:flex-col"
      } justify-between p-10`}
    >
      <ScrollArea
        className={`${
          isDesktopOrLaptop ? "w-2/6" : "w-full"
        } h-auto rounded-md`}
      >
        <div className="bg-gray-50 h-auto">
          <ProfileInfo
            shopname={shop?.shopname ?? ""}
            description={shop?.description ?? ""}
            address={shop?.address ?? ""}
            logo={shop?.logo ?? ""}
            banner={shop?.banner ?? ""}
            slug={shop?.slug ?? ""}
            bankName={shop?.bankName ?? ""}
            accountNo={shop?.accountNo ?? ""}
            country={shop?.country ?? ""}
            city={shop?.city ?? ""}
            state={shop?.state ?? ""}
            zip={shop?.zip ?? ""}
            phoneNumber={shop?.phoneNumber ?? ""}
            website={shop?.website ?? ""}
            accountName={shop?.accountName ?? ""}
          />
        </div>
      </ScrollArea>
      <div
        className={`${
          isDesktopOrLaptop ? "w-full" : "w-full"
        } h-full flex gap-6 flex-wrap`}
      >
        <Banner
          shopname={shop?.shopname ?? ""}
          description={shop?.description ?? ""}
          address={shop?.address ?? ""}
          logo={shop?.logo ?? ""}
          banner={shop?.banner ?? ""}
          slug={shop?.slug ?? ""}
          bankName={shop?.bankName ?? ""}
          accountNo={shop?.accountNo ?? ""}
          country={shop?.country ?? ""}
          city={shop?.city ?? ""}
          state={shop?.state ?? ""}
          zip={shop?.zip ?? ""}
          phoneNumber={shop?.phoneNumber ?? ""}
          website={shop?.website ?? ""}
          accountName={shop?.accountName ?? ""}
        />
        <div className="w-full flex flex-wrap gap-6 justify-between items-center mx-auto">
          {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).map((_, i) => (
            <ProductCard key={i} />
          ))}
        </div>
        <div className="flex justify-between items-center mx-auto">
          <Button className="bg-green-600 text-white text-center p-3 hover:bg-green-700 rounded-sm">
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShopMain;
