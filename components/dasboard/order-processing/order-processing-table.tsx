import { columns } from "./columns-def";
import { OrderTable } from "./data-table";
import { OrderProcessing } from "@/app/types/types";

async function getData(): Promise<OrderProcessing[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      trackingNumber: Math.random() * 100000,
      customer: "James",
      productQty: 100,
      orderDate: new Date().toDateString(),
      total: 100,
      //   actions: "pending",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "processing",
      email: "",
      trackingNumber: Math.random() * 100000,
      customer: "James",
      productQty: 100,
      orderDate: new Date().toDateString(),
      total: 100,
      //   actions: "processing",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "",
      trackingNumber: Math.random() * 100000,
      customer: "James",
      productQty: 100,
      orderDate: new Date().toDateString(),
      total: 100,
      //   actions: "success",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "failed",
      email: "",
      trackingNumber: Math.random() * 100000,
      customer: "James",
      productQty: 100,
      orderDate: new Date().toDateString(),
      total: 100,
      //   actions: "failed",
    },
  ];
}
export default function OrderProcessingTable() {
  const data = getData();

  return (
    <div className="bg-white w-full mx-auto p-10 rounded-sm mb-10">
      <OrderTable columns={columns} data={data} />
    </div>
  );
}
