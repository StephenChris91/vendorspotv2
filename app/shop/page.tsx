"use client";

import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import FilterComponent from "./_shop-components/shop-filter";
import ShopProductsDisplay from "./_shop-components/shop-products-display";

const Page: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <section className="flex flex-col md:flex-row justify-between items-start mx-auto gap-4 w-full p-10">
      {isMobile && (
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="bg-blue-600 text-white p-2 rounded-md mb-4 md:hidden"
        >
          {isFilterOpen ? "Close Filters" : "Open Filters"}
        </button>
      )}
      <div
        className={`${
          isMobile
            ? `fixed inset-0 bg-white z-50 transform ${
                isFilterOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300`
            : "w-[25%]"
        }`}
      >
        {isMobile && (
          <button
            onClick={() => setIsFilterOpen(false)}
            className="bg-red-600 text-white p-2 rounded-md absolute top-4 right-4"
          >
            Close
          </button>
        )}
        <FilterComponent />
      </div>
      <div className="w-full md:w-[75%]">
        <ShopProductsDisplay />
      </div>
    </section>
  );
};

export default Page;
