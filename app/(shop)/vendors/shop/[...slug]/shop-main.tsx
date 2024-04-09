import React from "react";
import ProductCard from "@/components/shop/product-card";
import Banner from "@/components/shop/banner";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMediaQuery } from "react-responsive";
import ProfileInfo from "@/components/shop/profile-info";
import { Button } from "@/components/ui/button";

const ShopMain = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)", // Adjust breakpoint for desktop screens
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" }); // Adjust breakpoint for mobile screens

  return (
    <div className="flex flex-col lg:flex-row justify-between lg:p-10 p-2 gap-8">
      {/* Sidebar */}
      <ScrollArea className="w-full lg:w-2/6 h-[600px] rounded-md mb-6 lg:mb-0">
        <div className="bg-gray-50 h-auto">
          <ProfileInfo />
        </div>
      </ScrollArea>

      {/* Main Content */}
      <div className="w-full lg:w-4/6 h-full flex flex-col gap-6">
        {/* Banner */}
        <Banner />

        {/* Product Cards */}
        <div className="w-full py-8">
          <div
            className={`grid grid-cols-[repeat(auto-fill,minmax(250px,2fr))] gap-3 `}
          >
            {/* Render Product Cards */}
            {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).map((_, i) => (
              <ProductCard key={i} />
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="flex justify-center">
          <Button className="bg-green-600 text-white text-center p-3 hover:bg-green-700 rounded-sm">
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShopMain;
