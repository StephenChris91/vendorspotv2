import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { PiMagnifyingGlassLight, PiStorefront } from "react-icons/pi";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const AdminTopbar = () => {
  return (
    // <>
    //   <div className="grid grid-cols-12 p-4 max-w-full shadow-sm bg-white justify-between items-center mx-auto gap-5">
    //     <div className="flex justify-between items-center mx-auto gap-6 col-span-6 shrink">
    //       <HiOutlineMenuAlt3 className="text-3xl cursor-pointer" />
    //       <div className="relative h-10 w-full">
    //         <PiMagnifyingGlassLight className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10" />
    //         <Input
    //           type="text"
    //           placeholder="Search"
    //           className="pl-10 pr-3 py-2 rounded-full w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#266235] focus:border-transparent" // Add additional styling as needed
    //         />
    //       </div>
    //       <div className="">
    //         <Button className="rounded-full bg-green-600 border-2">
    //           Create Shop
    //         </Button>
    //       </div>
    //     </div>
    //     <div className="col-span-2 flex justify-between items-center mx-auto w-full gap-5">
    //       <div className="flex justify-between items-center mx-auto w-full">
    //         <Button className="rounded-full bg-green-600 border-2">
    //           Create Product
    //         </Button>
    //       </div>
    //       <div>
    //         <Button className="rounded-full bg-green-600 border-2">
    //           Create Order
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <div className="bg-white px-0 py-0 flex justify-between items-center mx-auto">
      {/* <div className="flex justify-between items-center mx-auto gap-6">
        <HiOutlineMenuAlt3 className="text-3xl cursor-pointer" />
        <div className="relative h-10 w-6/12">
          <PiMagnifyingGlassLight className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10" />
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 pr-3 py-2 rounded-full w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#266235] focus:border-transparent" // Add additional styling as needed
          />
        </div>
        <div className="">
          <Button className="rounded-full bg-green-600 border-2">
            Create Shop
          </Button>
        </div>
      </div>
      <div className="flex justify-end items-center mx-auto w-full">
        <div className="flex justify-between items-center mx-auto w-full">
          <Button className="rounded-full bg-green-600 border-2">
            Create Product
          </Button>
        </div>
        <div>
          <Button className="rounded-full bg-green-600 border-2">
            Create Order
          </Button>
        </div>
      </div> */}
      <div className="w-3/4 p-7">
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
          <div className="">
            <Button className="rounded-full bg-green-600 border-2">
              Create Shop
            </Button>
          </div>
        </div>
      </div>
      <div className="border-2 w-1/4 py-7 px-1">
        <div className="flex justify-between items-center mx-auto w-full">
          <div className="border-2 h-full">
            <Button className="rounded-full text-green-600 hover:bg-green-600 hover:text-white bg-gray-200 border-2 flex gap-3">
              <PiStorefront className="text-2xl" />
              Visit Site
            </Button>
          </div>
          <div className="border-2 h-full">
            <Button className="rounded-full bg-green-600 border-2">
              Create Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTopbar;
