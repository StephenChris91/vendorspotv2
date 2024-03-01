"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "../ui/button";

export default function SignOut() {
  const supabase = createClientComponentClient();

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      // eslint-disable-next-line no-console
      console.error("ERROR:", error);
    }
  }

  return (
    <Button
      type="button"
      className="bg-blue-600 w-[90%] shadow-none border-2 hover:border-none  text-white hover:bg-blue-700"
      onClick={handleSignOut}
    >
      Sign Out
    </Button>
  );
}
