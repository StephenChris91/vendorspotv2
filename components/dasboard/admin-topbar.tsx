// "use client";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { PiMagnifyingGlassLight, PiStorefront } from "react-icons/pi";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { currentUser } from "@/actions/user";
import { User } from "next-auth";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Logout } from "@/actions/logout";
export const AdminTopbar = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await currentUser();
      setUser(user);
    };

    fetchUser();
  }, []);

  const abbvName = `${user?.firstname?.charAt(0)}${user?.lastname?.charAt(0)}`;

  return (
    <div className="flex bg-white justify-between items-center mx-auto gap-6 border-r-2 fixed top-0 left-0 mb-20 w-[90%] ml-40 z-40">
      <div className="w-3/4 p-6 border-r-2">
        <div className="flex justify-between items-center mx-auto gap-6 border-r-2">
          <HiOutlineMenuAlt3 className="text-3xl cursor-pointer" />
          <div className="relative h-10 w-6/12 ">
            <PiMagnifyingGlassLight className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10" />
            <Input
              type="text"
              placeholder="Search"
              className="pl-10 pr-3 py-2 rounded-full w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#266235] focus:border-transparent" // Add additional styling as needed
            />
          </div>

          <Button
            className="rounded-full border-none bg-green-600"
            onClick={() => Logout()}
          >
            Logout
          </Button>
        </div>
      </div>
      <div className="w-1/3 py- px-1">
        <div className="flex justify-center gap-3 items-center mx-auto w-full">
          <div className="h-full">
            <Link
              href="/"
              className=" p-2 rounded-full text-green-600 hover:bg-green-600 hover:text-white bg-gray-200 flex gap-3"
            >
              <PiStorefront className="text-2xl" />
              Visit Site
            </Link>
          </div>
          {user ? (
            <div className="h-full flex gap-3 justify-between items-center mx-auto">
              <Avatar>
                <AvatarImage src="" alt="user image" />
                <AvatarFallback>{abbvName}</AvatarFallback>
              </Avatar>
              <div>
                <h6>
                  {user?.firstname} {user?.lastname}
                </h6>
                <p className="text-sm text-black">{user?.email}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// export default AdminTopbar;
