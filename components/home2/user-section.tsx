import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Login from "../auth/signin";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";
import { signOutUser } from "@/store/slices/userSlice";

export default function UserDropdown() {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSignOut = () => {
    dispatch(signOutUser() as any);
    router.refresh();
  };

  console.log(user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-transparent text-lg shadow-none hover:bg-transparent">
          <FaRegUser />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72">
        {user?.user.role === "Vendor" || user?.user.role === "Admin" ? (
          <div className="p-2">
            <Link href="dashboard">
              <Button className="w-full rounded-sm">Dashboard</Button>
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
              <Link href="/signup" className="w-full">
                <Button
                  variant="outline"
                  type="submit"
                  className="w-full rounded-sm p-4 text-black uppercase"
                  onClick={handleSignOut}
                >
                  Logout
                </Button>
              </Link>
            </Link>
          </div>
        ) : (
          <Login />
        )}
        {/* <Login /> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
