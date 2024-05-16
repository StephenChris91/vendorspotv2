import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaRegUser } from "react-icons/fa";
import Login from "../auth/signin";
import Link from "next/link";
import { useCurrentUser } from "@/lib/use-session-client";
import { signOut } from "next-auth/react";

const UserDropdown = () => {
  const user = useCurrentUser();

  console.log(user);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-transparent text-lg shadow-none hover:bg-transparent">
          <FaRegUser />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72">
        {user?.role === "Vendor" || user?.role === "Admin" ? (
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
              onClick={() => signOut()}
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
              onClick={() => signOut()}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Login />
        )}
        {/* <Login /> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
