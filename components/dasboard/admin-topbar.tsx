import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const AdminTopbar = () => {
  return (
    <div className="p-4 min-w-full shadow-sm bg-white grid grid-cols-12 gap-5">
      <div className="flex gap-2 col-span-8">
        <HiOutlineMenuAlt3 className="text-3xl cursor-pointer" />
        <div className="relative h-10 w-full">
          <PiMagnifyingGlassLight className="absolute  left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10" />
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 pr-3 py-2 rounded-full text-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6E23DD] focus:border-transparent" // Add additional styling as needed
            value=""
          />
        </div>
      </div>
      <div>
        <Button className="rounded-full bg-green-600 border-2">
          Create Shop
        </Button>
      </div>
      <div>
        <h1>test</h1>
      </div>
    </div>
  );
};

export default AdminTopbar;
