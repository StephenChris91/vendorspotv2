"use client";

import { ColumnDef } from "@tanstack/react-table";
import { PiEyeBold, PiTrashDuotone } from "react-icons/pi";
import { TbEdit } from "react-icons/tb";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import { ReviewsType } from "@/app/types/types";

export const columns: ColumnDef<ReviewsType>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "product",
    header: "Product",
  },
  {
    accessorKey: "customer_review",
    header: "Customer Review",
  },
  {
    accessorKey: "ratings",
    header: "Ratings",
  },
  {
    accessorKey: "reports",
    header: "Reports",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "actions",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => {
      // const amount = parseFloat(row.getValue("amount"));
      // const formatted = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // }).format(amount);
      // const []

      return (
        <div className="text-lg font-normal flex justify-end items-end space-x-3">
          <TbEdit className="cursor-pointer" />
          <PiTrashDuotone className="text-red-500 cursor-pointer" />
          {/* <PiEyeBold className="cursor-pointer" /> */}
        </div>
      );
    },
  },
];
