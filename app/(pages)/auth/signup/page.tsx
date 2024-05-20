import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Signup from "../../_authComponents/signup";

export default async function SignUpPage() {
  return <Signup />;
}
