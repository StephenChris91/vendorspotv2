import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import { useUser } from "../hooks/useUser";

export default async function Dashboard() {
  // const supabase = createClient();

  const user = useUser;

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <h1>Welcome to your Dashboard</h1>
      {/* <p>{user}</p> */}
    </div>
  );
}
