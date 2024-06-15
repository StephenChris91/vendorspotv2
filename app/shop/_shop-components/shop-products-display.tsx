"use client";

import React, { useState } from "react";
import SearchInput from "./shop-products-display/search-input";
import SortDropdown from "./shop-products-display/sort-dropdown";
import SelectedFilters from "./shop-products-display/selectedfilters";
import ProductCard from "./shop-products-display/shop-product-card";

const ShopProductsDisplay: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("popularity");
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string[];
  }>({
    category: [],
    brands: [],
    tags: [],
  });
  const [totalItems, setTotalItems] = useState(65867); // Example value, replace with actual count

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Trigger search functionality here
  };

  const handleSortChange = (value: string) => {
    setSortOption(value);
    // Trigger sorting functionality here
  };

  const handleClearFilter = (filterType: string, filterValue: string) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].filter(
        (value) => value !== filterValue
      ),
    }));
    // Trigger filter update functionality here
  };

  const handleClearAll = () => {
    setSelectedFilters({ category: [], brands: [], tags: [] });
    // Trigger clear all filters functionality here
  };

  // Mock product data (replace with actual data fetching if needed)
  const products = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    imageUrl: `https://picsum.photos/500/300?random=1`, // change this image part to actual product image url
    rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1 to 5
    productName: `Product ${index + 1}`,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: (Math.random() * 1000).toFixed(2), // Random price
    onSale: index % 3 === 0, // Example condition for on sale
  }));

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <SearchInput value={searchQuery} onChange={handleSearchChange} />
        <SortDropdown value={sortOption} onChange={handleSortChange} />
      </div>
      <SelectedFilters
        filters={selectedFilters}
        totalItems={totalItems}
        onClearFilter={handleClearFilter}
        onClearAll={handleClearAll}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Render product items here */}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            rating={product.rating}
            productName={product.productName}
            description={product.description}
            price={Number(product.price)}
            onSale={product.onSale}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopProductsDisplay;
