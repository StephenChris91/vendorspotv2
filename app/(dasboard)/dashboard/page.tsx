"use client";

import { useUser } from "@/app/hooks/useUser";
import OrderProcessingTable from "@/components/dasboard/order-processing/order-processing-table";
import OrderHistory from "@/components/dasboard/orderHistory";
import OrderStatus from "@/components/dasboard/orderStatus";
import Summary from "@/components/dasboard/summary";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Dashboard() {
  // const supabase = createClient();

  const user = useUser();

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
