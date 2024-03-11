"use client";

import { useUser } from "@/app/hooks/useUser";
import AdminMainSection from "@/components/dasboard/admin-main";
import AdminSideBar from "@/components/dasboard/admin-sidebar";

export default async function Dashboard() {
  // const supabase = createClient();

  const user = useUser();

  return <></>;
}
