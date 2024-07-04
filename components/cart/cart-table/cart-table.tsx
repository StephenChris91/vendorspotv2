"use client";

import { useCart } from "@/lib/context/cart/cart-provider";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import type { CartTableType } from "@/app/types/types";

export default function CartTable() {
  const { cart } = useCart();

  return (
    <div className="w-full mx-auto p-10 rounded-sm mb-10">
      <DataTable columns={columns} data={cart as CartTableType[]} />
    </div>
  );
}
