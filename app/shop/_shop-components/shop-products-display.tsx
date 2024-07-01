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
} from "@/components/ui/pagination"; // Adjust the import path as per your project structure
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/actions/products";
import { ProductType } from "@/app/types/types";
import { PaginationNext, PaginationPrevious } from "./pagination";
import { SyncLoader } from "react-spinners";
import { CSSProperties } from "react";
import ErrorPage from "@/components/home2/error";
import axios from "axios";

const override: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  marginTop: "43px",
  borderColor: "red",
};

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
  let [color, setColor] = useState("#3364FF");

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  const { data, error, isLoading } = useQuery<ProductType[]>({
    queryKey: ["products"], // Ensure query key is plural to match queryFn
    queryFn: async () => {
      const response = await axios.get("/api/products");
      const data = await response.data;
      console.log(data);
      return data;
    },
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-between mx-auto">
        <SyncLoader cssOverride={override} color={color} />
      </div>
    );

  if (error) return <ErrorPage title="Error" message="No Products found" />;

  console.log(data); // Debug statement to check fetched data

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

  const totalItems = data ? data.length : 0;

  const getTotalPages = () => {
    return Math.ceil(totalItems / productsPerPage);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getPaginatedProducts = () => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return data ? data.slice(startIndex, endIndex) : [];
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
            isActive={currentPage !== 1}
            onClick={() => handlePageChange(currentPage - 1)}
          />
          {pageNumbers}
          <PaginationNext
            isActive={currentPage !== totalPages}
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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* Pagination */}
      {renderPagination()}
    </div>
  );
};

export default ShopProductsDisplay;
