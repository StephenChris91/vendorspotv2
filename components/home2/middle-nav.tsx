"use client";

import Image from "next/image";
import Logo from "@/app/v-logo.png";
import Link from "next/link";
import { MiddleBarForm } from "./middlebar-form";
import { UserSection } from "./user-section";
import { useMediaQuery } from "react-responsive";

const MiddleNav = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div
      className={`"small-wrapper w-auto bg-blue-700 rounded-sm p-5 flex ${
        isMobile ? "flex-col space-y-3" : "flex-row small-wrapper "
      } justify-between items-center mx-auto"`}
    >
      <div className={`${isMobile ? "hidden" : "block"}`}>
        <Link href="/">
          <Image src={Logo} alt=" Logo" width={100} height={100} />
        </Link>
      </div>
      <div>
        <MiddleBarForm />
      </div>
      <div>
        <UserSection />
      </div>
    </div>
  );
};

export default MiddleNav;
