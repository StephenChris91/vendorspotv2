import { getAllProducts } from "@/lib/data/products";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import type { ProductType } from "@/app/types/types";

async function getData(): Promise<ProductType[]> {
  // Fetch data from your API here.
  return await getAllProducts();
}

export default async function AllProductsTable() {
  const data = await getData();

  return (
    <div className="w-full mx-auto p-10 rounded-sm mb-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
