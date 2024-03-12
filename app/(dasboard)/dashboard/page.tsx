"use client";

import { useUser } from "@/app/hooks/useUser";
import AdminMainSection from "@/components/dasboard/admin-main";
import AdminSideBar from "@/components/dasboard/admin-sidebar";
import OrderProcessingTable from "@/components/dasboard/order-processing/order-processing-table";
import OrderStatus from "@/components/dasboard/orderStatus";
import Summary from "@/components/dasboard/summary";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function Dashboard() {
  // const supabase = createClient();

  const user = useUser();

  return (
    <ScrollArea className="mt-20">
      <div className="p-10">
        <Summary />
        <OrderStatus />
        <OrderProcessingTable />
      </div>
    </ScrollArea>
  );
}
