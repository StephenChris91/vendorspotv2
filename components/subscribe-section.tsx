import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { HiOutlineMail } from "react-icons/hi";

export default function Subscribe() {
  return (
    <div className="flex flex-col space-y-4 justify-between items-center mx-auto py-12 w-full">
      <h4>Subscribe to our Newsletter</h4>
      <p>
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      <div className="lg:flex w-full max-w-sm items-center sm:hidden gap-2">
        <div className="flex items-center py-4">
          <HiOutlineMail className="relative left-7 top-2 transform -translate-y-1/2 text-gray-500" />
          <Input
            placeholder="Subscribe..."
            className="max-w-sm p-5 bg-gray-50 rounded-sm pl-10"
          />
        </div>
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 p-5 rounded-sm"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
}
