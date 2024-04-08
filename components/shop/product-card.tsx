import Image from "next/image";
import Laptop1 from "@/public/shop/Laptop-1.webp";
import { Button } from "../ui/button";
const ProductCard = () => {
  return (
    <div className="flex flex-col justify-between items-start p-5 m-0 bg-white rounded-sm w-auto h-auto">
      <Image
        src={Laptop1}
        alt="product"
        className="w-32 h-32 mx-auto"
        width={100}
        height={100}
      />
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <span className="">₦800</span>
        </div>
        <p className="font-normal text-gray-500">Product 1</p>
      </div>
      <Button className="bg-green-600 text-white text-center p-3 hover:bg-green-700 rounded-sm">
        Add to Cart
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        ></svg>
      </Button>
    </div>
  );
};

export default ProductCard;
