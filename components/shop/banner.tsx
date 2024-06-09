import Image from "next/image";
import { Button } from "../ui/button";
import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import { shopType } from "@/app/types/types";

const Banner = ({ banner }: shopType) => {
  return (
    <div className="relative">
      <Image
        src={banner}
        alt="banner"
        width={0}
        height={0}
        sizes="400vw"
        style={{ width: "100%", height: "auto" }}
      />
      <Button className="bg-black opacity-90 z-10 text-white p-4 rounded-full absolute top-[20px] right-5">
        <PiPencilSimpleLineDuotone className="" />
      </Button>
    </div>
  );
};

export default Banner;
