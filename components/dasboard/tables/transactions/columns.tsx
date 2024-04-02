"use client";

import { ColumnDef } from "@tanstack/react-table";
import { PiEyeBold, PiTrashDuotone } from "react-icons/pi";
import { TbEdit } from "react-icons/tb";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import { TransactionType } from "@/app/types/types";

export const columns: ColumnDef<TransactionType>[] = [
  {
    accessorKey: "tracking_number",
    header: "Tracking Number",
  },
  {
    accessorKey: "total",
    header: "Total",
  },
  {
    accessorKey: "product_price",
    header: "Product Price",
  },
  {
    accessorKey: "delivery_fee",
    header: "Delivery Fee",
  },
  {
    accessorKey: "Taxable_amount",
    header: "Taxable Amount",
  },
  {
    accessorKey: "discount",
    header: "Discount",
  },
  {
    accessorKey: "payment_geteway",
    header: "Payment Gateway",
  },
  {
    accessorKey: "payment_status",
    header: () => <div className="text-right">Payment Status</div>,
    cell: ({ row }) => {
      // const amount = parseFloat(row.getValue("amount"));
      // const formatted = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // }).format(amount);
      // const []

      return (
        <div className="text-lg font-normal flex justify-end items-end space-x-3">
          <PiTrashDuotone className="text-red-500 cursor-pointer" />
          <PiEyeBold className="cursor-pointer" />
          {/* <TbEdit className="cursor-pointer" /> */}
        </div>
      );
    },
  },
];
