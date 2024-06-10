import Image from "next/image";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ContactIcon } from "@/components/icons/contact-icon";
import { CouponsIcon } from "../icons/coupons-icon";
import { FAQIcons } from "../icons/faqs-icon";
import { TermsIcon } from "../icons/terms-icon";
import { WebsiteIcon } from "../icons/website-icon";
import { shopType } from "@/app/types/types";

const ProfileInfo = ({
  logo,
  shopname,
  state,
  address,
  description,
  phoneNumber,
}: shopType) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div>
      <div className="p-5 flex flex-col justify-between mx-auto border-2 border-b-gray-200">
        <div className="flex flex-col w-full p-6 border-b border-gray-200">
          <div className="flex items-center justify-start mb-4">
            <div className="flex items-center justify-center w-24 h-24 border border-gray-200 rounded-full shrink-0">
              <div className="relative w-[calc(100%-8px)] h-[calc(100%-8px)] overflow-hidden bg-gray-200 rounded-full">
                <Image
                  src={logo}
                  alt="vendor-logo"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>

            <div className="ltr:pl-2.5 rtl:pr-2.5">
              <div className="text-sm text-gray-400">Since 2023</div>
              <h3 className="mb-2 overflow-hidden text-lg font-semibold truncate text-heading">
                {shopname}
              </h3>
              <div className="flex flex-wrap text-sm rounded gap-x-4">
                <div className="flex justify-center gap-1.5 text-gray-500">
                  <div className="font-medium text-heading">26</div> products
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-500 font-normal mt-5">{description}</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(70px,1fr))] text-sm gap-5 p-6 pb-10 border-2 border-b-gray-200">
        <div className="flex flex-col items-center justify-center p-10 pt-3.5 pb-3 text-gray-500 rounded bg-gray-100 hover:bg-blue-100 hover:text-blue-500 transition-all">
          <CouponsIcon />
          <p className="text-md mt-3">Coupons</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 pt-3.5 pb-3 text-gray-500 rounded bg-gray-100 hover:bg-blue-100 group hover:text-blue-500 transition-all">
          <ContactIcon />
          <p className="text-md mt-3">Contact</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 pt-3.5 pb-3 text-gray-500 rounded bg-gray-100 hover:bg-blue-100 group hover:text-blue-500 transition-all">
          <WebsiteIcon />
          <p className="text-md mt-3">Website</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 pt-3.5 pb-3 text-gray-500 rounded bg-gray-100 hover:bg-blue-100 group hover:text-blue-500 transition-all">
          <TermsIcon />
          <p className="text-md mt-3">Terms</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 pt-3.5 pb-3 text-gray-500 rounded bg-gray-100 hover:bg-blue-100 group hover:text-blue-500 transition-all">
          <FAQIcons />
          <p className="text-md mt-3">FAQs</p>
        </div>
      </div>
      <div className="p-6 border-t border-gray-200 text-gray-600">
        <div className="flex flex-col mb-5 last:mb-0">
          <span className="mb-1.5 font-semibold text-lg">Address</span>
          <p className="text-sm font-normal">{address}</p>
        </div>
        <div className="flex flex-col mb-5 last:mb-0">
          <span className="mb-1.5 text-lg font-semibold text-heading">
            Phone
          </span>
          <p className="text-sm font-normal blur-sm">{phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
