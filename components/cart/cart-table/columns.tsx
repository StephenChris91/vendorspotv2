"use client";

import { ColumnDef } from "@tanstack/react-table";
import { PiTrashDuotone } from "react-icons/pi";
import { TbEdit } from "react-icons/tb";
import { CartTableType } from "@/app/types/types";
import { useCart } from "@/lib/context/cart/cart-provider";

// Define the columns for the cart table
export const columns: ColumnDef<CartTableType>[] = [
  {
    accessorKey: "product",
    header: "Product",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const item = row.original as CartTableType;
      return `$${item.price.toFixed(2)}`;
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => {
      const { updateQuantity } = useCart();
      const item = row.original as CartTableType;
      return (
        <input
          type="number"
          value={item.quantity}
          onChange={(e) =>
            updateQuantity(item.id, parseInt(e.target.value, 10))
          }
          className="w-16 border rounded p-1"
        />
      );
    },
  },
  {
    accessorKey: "subtotal",
    header: "Subtotal",
    cell: ({ row }) => {
      const item = row.original as CartTableType;
      return `$${(item.price * item.quantity).toFixed(2)}`;
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const { removeFromCart } = useCart();
      const item = row.original as CartTableType;
      return (
        <div className="text-lg font-normal flex justify-end items-end space-x-3">
          <PiTrashDuotone
            className="text-red-500 cursor-pointer"
            onClick={() => removeFromCart(item.id)}
          />
          <TbEdit className="cursor-pointer" />
        </div>
      );
    },
  },
];
