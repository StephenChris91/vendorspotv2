import Image from "next/image";
import { Button } from "../ui/button";
import { PiPencilSimpleLineDuotone } from "react-icons/pi";

const Banner = () => {
  return (
    <div className="relative">
      <Image
        src="/shop/Gadget-banner.webp"
        alt="banner"
        width={1920}
        height={500}
        className="w-full rounded-md"
      />
      <Button className="bg-black opacity-90 z-10 text-white p-4 rounded-full absolute top-[20px] right-5">
        <PiPencilSimpleLineDuotone className="" />
      </Button>
    </div>
  );
};

export default Banner;
