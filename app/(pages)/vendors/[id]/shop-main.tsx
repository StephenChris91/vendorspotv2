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
  const [shop, setShop] = useState<shop | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShop = async () => {
      if (id) {
        const shopData = await getShopById(id as string);
        setShop(shopData);
        setLoading(false);
      }
    };
    fetchShop();
  }, [id]);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator while fetching data
  }

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
          <ProfileInfo logo={shop?.logo} {...shop} />
        </div>
      </ScrollArea>
      <div
        className={`${
          isDesktopOrLaptop ? "w-full" : "w-full"
        } h-full flex gap-6 flex-wrap`}
      >
        <Banner banner={shop?.banner} />
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
