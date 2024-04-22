"use client";

import laptop from "@/public/shop/Laptop-3.webp";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, FC } from "react";
import { PiHeart } from "react-icons/pi";
import { PiEye } from "react-icons/pi";
import ProductModal from "@/components/shop/product-modal";

interface ProductCardProps {
  title: string;
  description?: string;
  price?: number;
  image?: StaticImageData;
  category?: string;
  subcategory?: string;
  wishlist?: string;
  stock?: number;
  rating?: number;
  ratingCount?: number;
  ratingAverage?: number;
  viewable?: boolean;
  hot?: boolean;
  discount?: number;
  single?: boolean;
  hasButton?: boolean;
}

export const ProductCard: FC<ProductCardProps> = ({
  title,
  description,
  price,
  image,
  single,
  hasButton,
}) => {
  //   const [isSingle, setIsSingle] = useState(single);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }
  return (
    <>
      <Card className="w-auto max-w-xs border rounded-none h-auto border-gray-400">
        <div className="grid  p-4">
          <div
            className={`${
              single ? "aspect-[4/5]" : ""
            } w-full overflow-hidden rounded-xl`}
          >
            <Image
              src={image ?? laptop}
              alt="banner-3"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: `${single ? "100%" : "200px"}`,
                objectFit: "cover",
              }}
              className={`${single ? "aspect-[4/5]" : ""}`}
            />
          </div>
          <div className="grid gap-1.5 mb-5">
            <h3 className="font-semibold text-sm md:text-base">{title}</h3>
            <p className="font-semibold text-sm md:text-base">$99</p>
            <p className="text-sm md:text-base text-muted">
              {description || ""}
            </p>
          </div>
          {hasButton ? (
            <div className="flex justify-between items-center mx-auto gap-1 w-full">
              <PiHeart className="bg-blue-300 text-blue-800 h-10 w-10 p-1 " />
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-green-500 w-[80%] rounded-sm"
              >
                Add to cart
              </Button>
              <PiEye
                className="bg-blue-300 text-blue-800 h-10 w-10 p-1 cursor-pointer "
                onClick={openModal}
              />
            </div>
          ) : null}
        </div>
      </Card>
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
