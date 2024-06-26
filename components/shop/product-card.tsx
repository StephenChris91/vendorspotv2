import Image from "next/image";
import { useState } from "react";
import ProductModal from "./product-modal";
import { ProductType } from "@/app/types/types";

interface ShopProductCardProps {
  product: ProductType;
}

const ShopProductCard: React.FC<ShopProductCardProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <>
      <article className=" bg-white h-auto transform overflow-hidden rounded border border-border-200 border-opacity-70 bg-light transition-all duration-200 hover:-translate-y-0.5 hover:border-transparent hover:shadow">
        <div className="relative flex h-48 w-auto cursor-pointer items-center justify-center sm:h-64">
          <span className="sr-only">Product Image</span>
          <Image
            src={product.image || "/shop/Laptop-5.webp"}
            alt="Product Image"
            width={634}
            height={634}
            className="object-cover object-center w-full h-full cursor-pointer"
            onClick={openModal}
          />
          <div className="absolute top-3 rounded bg-accent px-1.5 text-xs font-semibold leading-6 text-light ltr:left-3 rtl:right-3 md:top-4 md:px-2 ltr:md:left-4 rtl:md:right-4 lg:px-2.5">
            {product.price ? `${product.price}%` : ""}
          </div>
        </div>
        <header className="p-3 md:p-6">
          <h3 className="cursor-pointer truncate text-xs text-body md:text-sm">
            {product.name}
          </h3>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex flex-col md:flex-row md:items-center">
              <span className="text-sm font-semibold text-heading md:text-base">
                ${product.price}
              </span>
              {product.sale_price && (
                <del className="mt-1 text-xs text-muted md:mt-0 ltr:md:ml-2 rtl:md:mr-2">
                  ${product.sale_price}
                </del>
              )}
            </div>
            <div>
              <button className="flex h-7 w-7 items-center justify-center rounded border border-border-200 bg-gray-100 text-sm hover:border-blue-500 hover:bg-green-600 hover:text-white focus:border-blue-500 focus:bg-blue-500 focus:text-white focus:outline-0 md:h-9 md:w-9">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5 stroke-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </header>
      </article>
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ShopProductCard;
