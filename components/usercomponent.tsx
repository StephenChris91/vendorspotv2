"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import userAvatar from "@/public/user.png";
import avatar from "@/public/avatar.jpg";
import { redirect } from "next/navigation";
import { useLogout } from "@/app/hooks/useLogout";
import { createClient } from "@/utils/supabase/client";

export default async function UserComponent() {
  const [username, setUsername] = useState("James");

  const logout = useLogout();

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <>
      <div className="col-span-1 h-full flex flex-col gap-2">
        <div className="w-full h-aut,mo p-1 rounded-sm bg-blue-50 flex flex-col items-center mx-auto gap-2">
          <div className="flex gap-2">
            {user ? (
              <Image
                src={userAvatar}
                alt="alt"
                width={50}
                height={50}
                className="rounded-full"
              />
            ) : (
              <Image src={avatar} alt="avatar" width={50} height={50} />
            )}
            {user ? (
              <p>Hi! {username} Welcome to Vendorspot</p>
            ) : (
              <p>Hi!, Please sign in to enjoy all our benefits</p>
            )}
          </div>
          <Button
            className="bg-blue-600 hover:bg-blue-700 w-[90%] shadow-none"
            onClick={redirect("/profile")}
          >
            {user ? "Profile" : "Join Us"}
          </Button>
          {!user ? (
            <Button className="bg-gray-50 hover:bg-blue-700  w-[90%] shadow-none border-2 hover:border-none border-blue-200 text-blue-600 hover:text-white">
              Login
            </Button>
          ) : (
            <Button
              className="bg-blue-600 hover:bg-blue-700 w-[90%] shadow-none"
              onClick={logout}
            >
              Logout
            </Button>
          )}
        </div>
        <div className="w-full h-full p-1 rounded-sm bg-neutral-orange">
          <p className="font-normal text-lg py-5 px-2 text-white">
            Get US $10 off with a new supplier
          </p>
        </div>
        <div className="w-full h-full p-1 rounded-sm bg-neutral-green">
          <p className="font-normal text-lg py-5 px-2 text-white">
            Send quotes with supplier preferences
          </p>
        </div>
      </div>
    </>
  );
}
