"use client";
import { Card } from "flowbite-react";
import { ProductType } from "@/app/types/types";
import { useRouter } from "next/navigation";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/lib/context/cart/cart-provider";
import { convertProductToCartItem } from "@/lib/utils";

interface ProductCardProps {
  product: ProductType;
  single?: boolean;
  hasButton?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  const { addToCart } = useCart();

  useEffect(() => {
    console.log(product);
  }, [product]);

  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };

  const handleAddToCart = () => {
    const cartItem = convertProductToCartItem(product);
    addToCart(cartItem);
  };

  return (
    <Card
      className="max-w-sm cursor-pointer"
      imgAlt={product.name}
      imgSrc={product.image ?? "/images/products/default-product.png"}
    >
      <div onClick={handleClick}>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>
        <Link href={`/vendors/${product.shop?.id}`}>
          <p className="text-sm text-muted font-semibold tracking-tight text-gray-500 dark:text-white">
            Seller: {product.shop?.shopname}
          </p>
        </Link>
      </div>

      <div className="mb-5 mt-2.5 flex items-center">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <svg
              key={index}
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          {product.ratings?.toFixed(1) ?? "N/A"}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900 dark:text-white">
          ${product.price}
        </span>
        <button
          className="rounded-sm bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart();
          }}
        >
          <PiShoppingCartDuotone className="text-bold text-lg" />
        </button>
      </div>
    </Card>
  );
};
