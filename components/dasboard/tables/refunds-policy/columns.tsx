"use client";

import { ColumnDef } from "@tanstack/react-table";
import { PiEyeBold, PiTrashDuotone } from "react-icons/pi";
import { TbEdit } from "react-icons/tb";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import { RefundsPolicyType } from "@/app/types/types";

export const columns: ColumnDef<RefundsPolicyType>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "heading",
    header: "Heading",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "applied_on",
    header: "Applied On",
  },
  {
    accessorKey: "status",
    header: "Status",
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
          <PiTrashDuotone className="text-red-500 cursor-pointer" />
          <PiEyeBold className="cursor-pointer" />
          {/* <TbEdit className="cursor-pointer" /> */}
        </div>
      );
    },
  },
];
