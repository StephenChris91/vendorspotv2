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
      <div className="flex justify-start items-start">
        <div className="col-span-4 bg-gray-900">
          <AdminSideBar />
        </div>
        <div className="col-span-10 bg-gray-800">
          <AdminMainSection />
        </div>
      </div>
    </>
  );
}
