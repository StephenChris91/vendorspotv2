import React, { useEffect, useState } from "react";
// import ShopProductCard from "@/components/shop/shop-product-card";
import Banner from "@/components/shop/banner";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMediaQuery } from "react-responsive";
import ProfileInfo from "@/components/shop/profile-info";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { getShopById, getShopWithProductsById } from "@/actions/createshop";
import { ShopWithProducts } from "@/app/types/types";
import { SyncLoader } from "react-spinners";
import ShopProductCard from "@/components/shop/product-card";

const ShopMain = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [shop, setShop] = useState<ShopWithProducts | null>(null);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });

  useEffect(() => {
    const fetchShop = async () => {
      if (id) {
        try {
          setLoading(true);
          const shopData = await getShopWithProductsById(id as string);
          setShop(shopData as ShopWithProducts);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching shop data:", error);
          setLoading(false);
        }
      }
    };
    fetchShop();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <SyncLoader color="#36D7B7" />
      </div>
    );
  }

  // Ensure logo and banner are always strings
  const logo = shop?.logo ?? "/default-logo.png";
  const banner = shop?.banner ?? "/default-banner.png";

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
            logo={logo}
            banner={banner}
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
            products={shop?.products ?? []}
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
          logo={logo}
          banner={banner}
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
          // products={shop?.products ?? []}
        />
        <div className="w-full flex flex-wrap gap-6 justify-between items-center mx-auto">
          {shop?.products.map((product: any) => (
            <ShopProductCard key={product.id} product={product} />
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
