import Image from "next/image";
import { Button } from "../ui/button";
import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import { shopType } from "@/app/types/types";

const Banner = ({ banner }: shopType) => {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={banner}
        alt="banner"
        layout="responsive"
        width={1600} // Set a large width to ensure good quality
        height={400} // Aspect ratio
        objectFit="cover"
        className="w-full h-auto"
      />
      <Button className="bg-black opacity-90 z-10 text-white p-4 rounded-full absolute top-[20px] right-5">
        <PiPencilSimpleLineDuotone className="" />
      </Button>
    </div>
  );
};

export default Banner;
