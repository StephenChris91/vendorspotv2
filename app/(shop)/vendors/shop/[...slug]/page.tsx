"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ShopMain from "./shop-main";
import ProductCartTray from "@/components/cart/product-cart-tray";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import ProductCart from "@/components/cart/product-cart";
import CartDialog from "@/components/cart/cart-dialog";

const Shop = () => {
  return (
    <div className="">
      <ShopMain />
      <ProductCart />
    </div>
  );
};

export default Shop;
