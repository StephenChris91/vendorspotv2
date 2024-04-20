"use client";

import { SelectDropDown } from "./drop-down";
import { useMediaQuery } from "react-responsive";

const UpperNav = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 640px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const currencies = ["USD", "NGN"];
  const languages = ["ENG", "FRN", "ESP"];
  return (
    <div
      className={`${
        isMobile ? "w-full px-2" : "small-wrapper w-full"
      } flex justify-between bg-blue-700 p-1 small-border items-center mx-auto`}
    >
      <div
        className={`${
          isMobile ? "text-center text-white w-full" : "text-white w-full"
        }`}
      >
        <p>Welcome to Vendorspot</p>
      </div>
      <div
        className={`${
          isMobile ? "hidden" : "flex justify-end items-end mx-auto w-full"
        }`}
      >
        <div>
          <SelectDropDown value="USD" arr={currencies} />
        </div>
        <div>
          <SelectDropDown value="ENG" arr={languages} />
        </div>
      </div>
    </div>
  );
};

export default UpperNav;
