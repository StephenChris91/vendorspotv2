import Image from "next/image";
import banner3 from "@/public/shop/banner-3.png";
import banner2 from "@/public/shop/banner-2.png";
import banner1 from "@/public/shop/banner-1.png";
import { MainSlider } from "./main-slider";

const MainBanner = () => {
  return (
    <div className="small-wrapper py-7">
      <div className="flex gap-5 justify-between items-center mx-auto">
        <div className="w-2/3">
          <MainSlider />
        </div>
        <div className="w-1/3 gap-5 flex flex-col h-auto rounded-sm">
          <Image
            src={banner2}
            alt="banner-3"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <Image
            src={banner3}
            alt="banner-3"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
