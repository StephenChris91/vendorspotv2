"use client";

import { useUser } from "@/app/hooks/useUser";

export default async function Dashboard() {
  // const supabase = createClient();

  const user = useUser();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <h1>Welcome to your Dashboard {user?.user_metadata.firstname}</h1>
      {/* <p>{user}</p> */}
    </div>
  );
}
