"use client";

import React, { useState } from "react";
import PriceRange from "./shop-filter/range";
import PopularBrands from "./shop-filter/popular-brands";
import Separator from "@/components/separator";
import { CategoryDisplay } from "./shop-filter/categories";
import PopularTags from "./shop-filter/popular-tag";

const FilterComponent: React.FC = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
    console.log("Selected price range:", range);
  };

  const handleBrandChange = (brands: string[]) => {
    setSelectedBrands(brands);
    console.log("Selected brands:", brands);
  };

  const handleTagChange = (tags: string[]) => {
    setSelectedTags(tags);
    console.log("Selected tags:", tags);
  };

  return (
    <div className="w-full mx-auto p-2">
      <Separator>
        <CategoryDisplay />
      </Separator>
      <Separator>
        <PriceRange
          min={0}
          max={1000}
          step={10}
          initialMin={priceRange[0]}
          initialMax={priceRange[1]}
          onChange={handlePriceChange}
        />
      </Separator>
      <Separator>
        <PopularBrands
          brands={["Nike", "Adidas", "Puma", "Reebok", "Under Armour"]}
          onChange={handleBrandChange}
        />
      </Separator>
      <Separator>
        <PopularTags
          tags={["New Arrival", "Discount", "Best Seller", "Limited Edition"]}
          selectedTags={selectedTags}
          onChange={handleTagChange}
        />
      </Separator>
    </div>
  );
};

export default FilterComponent;
