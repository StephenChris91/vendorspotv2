"use client";
import { gsap } from "gsap";
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
import { useState, useEffect, useRef, FC } from "react";
import { PiHeart } from "react-icons/pi";
import { PiEye } from "react-icons/pi";
import { PiShoppingCartSimple } from "react-icons/pi";
import ProductModal from "@/components/shop/product-modal";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/actions/products";
import { ProductType } from "@/app/types/types";
import { db } from "@/prisma/prisma";

interface ProductCardProps {
  product: ProductType;
  single?: boolean;
  hasButton?: boolean;
}

export const ProductCard = ({
  single,
  hasButton,
  product,
}: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );

  const overlayRef = useRef(null);

  useEffect(() => {
    gsap.from(overlayRef?.current, {
      autoAlpha: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  function openModal() {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }

  return (
    <>
      <Card className="w-auto max-w-xs border rounded-none h-auto border-gray-400">
        <div className="grid  p-4">
          <div
            className={`relative ${
              single ? "aspect-[4/5]" : ""
            } w-full overflow-hidden rounded-sm`}
          >
            <Image
              src={product?.image ?? laptop}
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

            {!single ? (
              <div
                ref={overlayRef}
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50"
              >
                <PiHeart className="text-white h-7 w-7 p-1 mx-2 cursor-pointer" />
                <PiShoppingCartSimple className=" text-white h-7 w-7 p-1 mx-2 cursor-pointer" />
                <PiEye
                  className=" text-white h-7 w-7 p-1 mx-2 cursor-pointer"
                  onClick={openModal}
                />
              </div>
            ) : null}
          </div>
          <div className="grid gap-1.5 mb-5">
            <h3 className="font-semibold text-sm md:text-base">
              {product?.name}
            </h3>
            <p className="font-semibold text-sm md:text-base">
              ${product?.price}
            </p>
            <p className="text-sm md:text-base text-muted">
              {product?.description || ""}
            </p>
            <p className="text-sm md:text-base ">{product?.categories || ""}</p>
            <p className="text-sm md:text-base ">{product?.shop_name || ""}</p>
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
      {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={selectedProduct}
        />
      )}
    </>
  );
};

export default ProductCard;
