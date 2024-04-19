"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
export default function SignOut() {
  return (
    <Button
      type="button"
      className="bg-blue-600 w-[90%] shadow-none border-2 hover:border-none  text-white hover:bg-red-700"
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: "/",
        })
      }
    >
      Sign Out
    </Button>
  );
}
