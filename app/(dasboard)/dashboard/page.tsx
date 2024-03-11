"use client";

import { useUser } from "@/app/hooks/useUser";
import AdminMainSection from "@/components/dasboard/admin-main";
import AdminSideBar from "@/components/dasboard/admin-sidebar";
import OrderStatus from "@/components/dasboard/orderStatus";
import Summary from "@/components/dasboard/summary";

export default async function Dashboard() {
  // const supabase = createClient();

  const user = useUser();

  return (
    <div className="p-10">
      <Summary />
      <OrderStatus />
    </div>
  );
}
