import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { signOut } from "@/auth";
import { currentUser } from "@/actions/user";
import { useEffect, useState } from "react";
import { User } from "next-auth";
import { Logout } from "@/actions/logout";
import Login from "@/app/(pages)/_authComponents/signin";

const UserDropdown = () => {
  const [user, setUser] = useState<User>();

  const handleSignOut = async () => {
    await Logout();
  };

  useEffect(() => {
    const fetchUser = async () => {
      const user = await currentUser();
      setUser(user);
    };

    fetchUser();
  }, []);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center">
        {!user ? (
          <Button
            className="w-full rounded-sm bg-transparent shadow-none hover:bg-transparent hover:shadow-none"
            // onClick={handleSignOut}
          >
            Sign In
          </Button>
        ) : !user?.isOnboardedVendor ? (
          <>
            <FaRegUser className="text-2xl text-white" />
            <span className="ml-2 text-sm font-semibold hidden md:block text-white">
              Welcome {user?.firstname}
            </span>
          </>
        ) : (
          <FaRegUser className="text-2xl text-white" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72">
        {!user ? (
          <Login />
        ) : !user?.isOnboardedVendor ? (
          <>
            <Button className="w-full rounded-sm" onClick={handleSignOut}>
              Sign Out
            </Button>
          </>
        ) : user?.role === "Vendor" ? (
          <div className="p-2">
            <Link href="/dashboard">
              <Button className="w-full rounded-sm">Dashboard</Button>
            </Link>
            <div className="relative w-full mt-2 mb-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-gray-50 px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>
            <Button
              variant="outline"
              type="submit"
              className="w-full rounded-sm p-4 text-black uppercase"
              onClick={handleSignOut}
            >
              Logout
            </Button>
          </div>
        ) : user?.role === "Customer" ? (
          <div className="flex flex-col gap-2 p-2">
            <p>My Account</p>
            <Link href="/auth/profile">
              <Button
                variant="outline"
                className="w-fu`ll bg-transparent shadow-none rounded-sm"
              >
                Profile
              </Button>
            </Link>
            <Link href="/orders">
              <Button
                variant="outline"
                className="w-full bg-transparent shadow-none rounded-sm"
              >
                Orders
              </Button>
            </Link>
            <div className="relative w-full mt-2 mb-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-gray-50 px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>
            <Button
              variant="outline"
              type="submit"
              className="w-full rounded-sm p-4 text-black uppercase"
              onClick={handleSignOut}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Login />
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
