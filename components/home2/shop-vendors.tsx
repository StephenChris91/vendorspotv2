import { Card } from "../ui/card";
import Image from "next/image";
import shopLogo from "@/public/shop/shop-logo.png";

const ShopVendors = () => {
  return (
    <section className="small-wrapper flex-col flex justify-between items-center mx-auto gap-5 w-full mb-12">
      <h1>Shop By Vendors</h1>

      <div className="flex justify-between items-center mx-auto gap-3 w-full">
        {Array.from({ length: 5 }).map((item) => (
          <Card className="w-full max-w-xs border rounded-none h-auto border-gray-400">
            <div className="flex justify-between px-6 items-center mx-auto w-full">
              <div className="overflow-hidden">
                <Image
                  src={shopLogo}
                  alt="banner-3"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    // height: "auto",
                    objectFit: "cover",
                  }}
                  className="py-7"
                />
              </div>
              <div className="mb-5">
                <h3 className="font-semibold text-sm md:text-base w-full">
                  Vendor Name
                </h3>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ShopVendors;
