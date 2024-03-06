"use client";

import { useUser } from "@/app/hooks/useUser";
import AdminMainSection from "@/components/dasboard/admin-main";
import AdminSideBar from "@/components/dasboard/admin-sidebar";

export default async function Dashboard() {
  // const supabase = createClient();

  const user = useUser();

  return (
    <>
      {/* <h1>Welcome to your Dashboard {user?.user_metadata.firstname}</h1> */}
      <div className="w-full flex justify-between text-white">
        <div className=" bg-gray-900 w-96">
          <AdminSideBar />
        </div>
        <div className=" bg-gray-800 w-full">
          <AdminMainSection />
        </div>
      </div>
    </>
  );
}
