"use client";

import { useUser } from "@/app/hooks/useUser";
import OrderProcessingTable from "@/components/dasboard/tables/order-processing/order-processing-table";
import OrderHistory from "@/components/dasboard/orderHistory";
import OrderStatus from "@/components/dasboard/orderStatus";
import Summary from "@/components/dasboard/summary";
import { ScrollArea } from "@/components/ui/scroll-area";
import { auth } from "@/auth";
import { useRouter } from "next/navigation";

export default async function Dashboard() {
  return (
    <ScrollArea className="mt-20">
      <div className="p-10">
        <Summary />
        <OrderStatus />
        <OrderProcessingTable />
        <OrderHistory />
      </div>
    </ScrollArea>
  );
}
