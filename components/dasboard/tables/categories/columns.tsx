"use client";

import { ColumnDef } from "@tanstack/react-table";
import { PiEyeBold, PiTrashDuotone } from "react-icons/pi";
import { TbEdit } from "react-icons/tb";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import { CategoriesType } from "@/app/types/types";
import { deleteACategory } from "@/actions/categories";

export const columns: ColumnDef<CategoriesType>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "slug",
    header: "Slug",
  },

  {
    accessorKey: "actions",
    header: () => <div className="text-right">Actions</div>,
    cell: async ({ row }) => {
      //delete a category
      const deleteCategory = async () => {
        await deleteACategory(row.id);
      };

      return (
        <div className="text-lg font-normal flex justify-end items-end space-x-3">
          <PiTrashDuotone
            className="text-red-500 cursor-pointer"
            onClick={deleteCategory}
          />
          <PiEyeBold className="cursor-pointer" />
          <TbEdit className="cursor-pointer" />
        </div>
      );
    },
  },
];
