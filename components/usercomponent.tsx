// "use client";

// import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import SignOut from "./auth/signout";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export default async function UserComponent() {
  // const router = useRouter();
  const session = await getServerSession(authOptions);
  console.log(session);
  let user = session?.user;
  console.log(user?.role);
  const firstInit = session?.user.firstname.charAt(0);
  const lastInit = session?.user.lastname.charAt(0);

  const abbvName = firstInit + "." + lastInit;

  return (
    <>
      <div className="col-span-1 h-full flex flex-col gap-2">
        <div className="w-full h-auto p-1 rounded-sm bg-blue-50 flex flex-col items-center mx-auto gap-2">
          <div className="flex gap-2">
            {user ? (
              <Avatar>
                <AvatarImage src="" alt="@shadcn" />
                <AvatarFallback className="p-2 rounded-full bg-blue-600 text-white">
                  {abbvName}
                </AvatarFallback>
              </Avatar>
            ) : // <Image src={avatar} alt="avatar" width={50} height={50} />
            null}
            {user ? (
              <p>Hi! {user.firstname} Welcome to Vendorspot</p>
            ) : (
              <p>Hi!, Please sign in to enjoy all our benefits</p>
            )}
          </div>
          {user && user.role == "Vendor" ? (
            <Button
              className="bg-blue-600 hover:bg-blue-700 w-[90%] shadow-none"
              // onClick={() => router.push("/dashboard")}
            >
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          ) : null}

          {!user ? (
            <Link href="/login" className="w-full text-center">
              <Button className="bg-gray-50 hover:bg-blue-700 p-5  w-[90%] shadow-none border-2 hover:border-none border-blue-200 text-blue-600 hover:text-white">
                Login
              </Button>
            </Link>
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
