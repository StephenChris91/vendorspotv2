"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import userAvatar from "@/public/user.png";
import avatar from "@/public/avatar.jpg";

import { useRouter } from "next/navigation";
import { useUser } from "@/app/hooks/useUser";
import SignOut from "./auth/signout";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ReactNode } from "react";

export default function UserComponent() {
  const router = useRouter();

  const user = useUser();
  console.log(user);

  const abbvName =
    user?.user_metadata.firstname.split(" ")[0].charAt(0) +
    user?.user_metadata.lastname.split(" ")[0].charAt(0);

  return (
    <>
      <div className="col-span-1 h-full flex flex-col gap-2">
        <div className="w-full h-auto p-1 rounded-sm bg-blue-50 flex flex-col items-center mx-auto gap-2">
          <div className="flex gap-2">
            {user ? (
              <Avatar>
                <AvatarImage src={user?.user_metadata.avatar} alt="@shadcn" />
                <AvatarFallback>{abbvName}</AvatarFallback>
              </Avatar>
            ) : (
              <Image src={avatar} alt="avatar" width={50} height={50} />
            )}
            {user ? (
              <p>Hi! {user.user_metadata.firstname} Welcome to Vendorspot</p>
            ) : (
              <p>Hi!, Please sign in to enjoy all our benefits</p>
            )}
          </div>
          {user && user.user_metadata.role ? (
            <Button
              className="bg-blue-600 hover:bg-blue-700 w-[90%] shadow-none"
              onClick={() => router.push("/dashboard")}
            >
              Dashboard
            </Button>
          ) : null}

          {!user ? (
            <Button
              onClick={() => router.push("/login")}
              className="bg-gray-50 hover:bg-blue-700  w-[90%] shadow-none border-2 hover:border-none border-blue-200 text-blue-600 hover:text-white"
            >
              Login
            </Button>
          ) : (
            <SignOut />
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
