"use client";

import { ProductType } from "@/app/types/types";
import ProductModal from "@/components/shop/product-modal";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import {
  PiHeartStraightDuotone,
  PiShoppingCartDuotone,
  PiEyeDuotone,
} from "react-icons/pi";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
        {/* Product Image */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto"
          />
          {product.sale_price && (
            <span className="absolute left-2 top-2 z-10 inline-block bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded-full mt-2">
              On Sale
            </span>
          )}
          {/* Hover overlay with icons */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 bg-gray-800 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            {/* Wishlist icon */}
            <button className="text-white text-2xl font-semibold">
              <PiHeartStraightDuotone />
            </button>
            {/* Cart icon */}
            <button className="text-white text-2xl font-semibold">
              <PiShoppingCartDuotone />
            </button>
            {/* View icon */}
            <button
              className="text-white text-2xl font-semibold"
              onClick={openModal}
            >
              <PiEyeDuotone />
            </button>
          </div>
        </div>
        {/* Product details */}
        <div className="p-4">
          {/* Product Name */}
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          {/* Rating */}
          <div className="flex items-center mb-2">
            <span className="text-yellow-400 flex">
              {[...Array(Math.floor(product.ratings ?? 0))].map((_, index) => (
                <FaStar key={index} className="text-yellow-400" />
              ))}
            </span>
          </div>
          {/* Description */}
          <p className="text-gray-600 text-sm mb-2">{product.description}</p>
          {/* Price */}
          <p className="text-lg font-semibold">${product.price}</p>
        </div>
      </div>
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
};

export default ProductCard;
