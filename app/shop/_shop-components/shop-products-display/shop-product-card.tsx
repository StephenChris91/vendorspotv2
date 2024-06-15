"use client";

import ProductModal from "@/components/shop/product-modal";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { PiHeartStraightDuotone } from "react-icons/pi";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { PiEyeDuotone } from "react-icons/pi";

interface ProductCardProps {
  imageUrl: string;
  rating: number;
  productName: string;
  description: string;
  price: number;
  onSale?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  rating,
  productName,
  description,
  price,
  onSale = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }
  return (
    <>
      <div className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
        {/* Product Image */}
        <div className="relative overflow-hidden">
          <img src={imageUrl} alt={productName} className="w-full h-auto" />
          {onSale && (
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
            <button className="text-white text-2xl font-semibold">
              <PiEyeDuotone onClick={openModal} />
            </button>
          </div>
        </div>
        {/* Product details */}
        <div className="p-4">
          {/* Product Name */}
          <h3 className="text-lg font-semibold mb-2">{productName}</h3>
          {/* Rating (assuming a star icon or rating display component) */}
          <div className="flex items-center mb-2">
            <span className="text-yellow-400 flex">
              {[...Array(Math.floor(rating))].map((_, index) => (
                <FaStar key={index} className="text-yellow-400" />
              ))}
            </span>
          </div>
          {/* Description */}
          <p className="text-gray-600 text-sm mb-2">{description}</p>
          {/* Price */}
          <p className="text-lg font-semibold">${price}</p>
          {/* Sale Badge */}
        </div>
      </div>
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProductCard;
