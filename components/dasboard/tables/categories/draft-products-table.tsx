import { Button } from "@/components/ui/button";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import type { CategoriesType } from "@/app/types/types";
import { AddCategory } from "./categories-sheet";
import { getAllCategories } from "@/actions/categories";

export default async function CategoriesTable() {
  const data = await getAllCategories();

  return (
    <div className="w-full mx-auto p-10 rounded-sm mb-10">
      <DataTable columns={columns} data={data} />
      <AddCategory />
    </div>
  );
}
