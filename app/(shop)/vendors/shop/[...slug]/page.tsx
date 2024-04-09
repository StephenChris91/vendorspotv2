"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ShopMain from "./shop-main";
import ProductCartTray from "@/components/cart/product-cart-tray";

const Shop = () => {
  return (
    <div className="">
      <Link href="/">
        <Button className="bg-black text-white text-center p-4 rounded-sm">
          Go to Home
        </Button>
      </Link>
      <ShopMain />
      <ProductCartTray />
    </div>
  );
};

export default Shop;
