import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Login from "@/components/auth/signin";

export default async function SignIn() {
  return <Login />;
}
