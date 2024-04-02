import { columns } from "./columns";
import { DataTable } from "./data-table";
import type { CategoriesType } from "@/app/types/types";

async function getData(): Promise<CategoriesType[]> {
  // Fetch data from your API here.
  return [
    // {
    //   id: "728ed52f",
    //   product: "Product 1",
    //   productType: "simple",
    //   shop: "shop 1",
    //   quantity: 28,
    //   status: "processing",
    // },
    // {
    //   id: "728ed52f",
    //   product: "Product 1",
    //   productType: "simple",
    //   shop: "shop 1",
    //   quantity: 28,
    //   status: "processing",
    // },
    // {
    //   id: "728ed52f",
    //   product: "Product 1",
    //   productType: "simple",
    //   shop: "shop 1",
    //   quantity: 28,
    //   status: "processing",
    // },
    // {
    //   id: "728ed52f",
    //   product: "Product 1",
    //   productType: "simple",
    //   shop: "shop 1",
    //   quantity: 28,
    //   status: "processing",
    // },
    // ...
  ];
}

export default async function CategoriesTable() {
  const data = await getData();

  return (
    <div className="w-full mx-auto p-10 rounded-sm mb-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
