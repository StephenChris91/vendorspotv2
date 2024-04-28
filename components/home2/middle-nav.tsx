"use client";

import Image from "next/image";
import Logo from "@/public/shop/Logo-12.png";
import Link from "next/link";
import { MiddleBarForm } from "./middlebar-form";
import UserDropdown from "./user-section";
import { useMediaQuery } from "react-responsive";

const MiddleNav = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div
      className={`"small-wrapper w-auto bg-blue-700 rounded-sm p-2 flex ${
        isMobile ? "flex-col space-y-3" : "flex-row small-wrapper "
      } justify-between items-center mx-auto"`}
    >
      <div className={`${isMobile ? "hidden" : "block"}`}>
        <Link href="/">
          <Image src={Logo} alt=" Logo" width={150} height={150} />
        </Link>
      </div>
      <div>
        <MiddleBarForm />
      </div>
      <div>
        <UserDropdown />
      </div>
    </div>
  );
};

export default MiddleNav;
