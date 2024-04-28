import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { PiMagnifyingGlassLight, PiStorefront } from "react-icons/pi";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { User } from "@/app/context/user-context";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";
const AdminTopbar = () => {
  // const { firstname } = getUserSession();
  // const user = User();
  const user = useSelector((state: RootState) => state.user.user);
  const abbvName =
    user?.user.firstname.charAt[0] + user?.user.lastname.charAt[0];
  console.log(user);
  useEffect(() => {
    console.log(user);
  }, [user]);

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
          <div className="border-none">
            <Button
              className="rounded-full border-none bg-green-600"
              // onClick={() => router.push("/dashboard/createshop")}
            >
              <Link href="/dashboard/createshop">Create Shop</Link>
            </Button>
          </div>
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
          <div className="h-full flex gap-3 justify-between items-center mx-auto">
            <Avatar>
              <AvatarImage src="" alt="user image" />
              <AvatarFallback>{abbvName}</AvatarFallback>
            </Avatar>
            <div>
              <h6>
                {user?.user.firstname} {user?.user.lastname}
              </h6>
              <p className="text-sm text-black">{user?.user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTopbar;
