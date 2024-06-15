"use client";

import React, { useState } from "react";
import SearchInput from "./shop-products-display/search-input";
import SortDropdown from "./shop-products-display/sort-dropdown";
import SelectedFilters from "./shop-products-display/selectedfilters";
import ProductCard from "./shop-products-display/shop-product-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination"; // Adjust the import path as per your project structure

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
  const [totalItems, setTotalItems] = useState(50); // Example value, replace with actual count
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20; // Number of products to display per page

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
  const generateMockProducts = () => {
    return Array.from({ length: totalItems }, (_, index) => ({
      id: index + 1,
      imageUrl: `https://picsum.photos/500/300?random=${index + 1}`,
      rating: Math.floor(Math.random() * 5) + 1,
      productName: `Product ${index + 1}`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: (Math.random() * 1000).toFixed(2),
      onSale: index % 3 === 0,
    }));
  };

  const getTotalPages = () => {
    return Math.ceil(totalItems / productsPerPage);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getPaginatedProducts = () => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const allProducts = generateMockProducts();
    return allProducts.slice(startIndex, endIndex);
  };

  const renderPagination = () => {
    const totalPages = getTotalPages();
    if (totalPages <= 1) return null;

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink href="#" onClick={() => handlePageChange(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return (
      <Pagination>
        <PaginationContent>
          <PaginationPrevious
            // disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          />
          {pageNumbers}
          <PaginationNext
            // disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </PaginationContent>
      </Pagination>
    );
  };

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
        {getPaginatedProducts().map((product) => (
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
      {/* Pagination */}
      {renderPagination()}
    </div>
  );
};

export default ShopProductsDisplay;
