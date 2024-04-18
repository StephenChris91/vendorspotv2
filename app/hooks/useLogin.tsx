import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import Login from "@/components/auth/signin";

export default async function SignInPage() {
  return <Login />;
}
