"use client";

import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "@/public/shop/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Navigation = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      duration: 1,
      y: "-100%",
      ease: "bounce",
    });
  });

  return (
    <nav ref={navRef} className="w-full sticky">
      {isDesktopOrLaptop && (
        <div className="flex justify-between items-center mx-auto bg-gray-50 p-6 px-20">
          <Image width={120} src={Logo} alt="logo" />
          <div className="flex gap-3">
            <Link href="/" className="hover:text-blue-500">
              Shops
            </Link>
            <Link href="/" className="hover:text-blue-500">
              Offers
            </Link>
            <Link href="/" className="hover:text-blue-500">
              Contact
            </Link>
            <Link href="/" className="hover:text-blue-500">
              <Button className="bg-green-600 text-white p-3 hover:bg-green-700 rounded-sm">
                Become A Seller
              </Button>
            </Link>
          </div>
        </div>
      )}
      {isTabletOrMobile && (
        <div className="flex flex-col justify-start items-start mx-auto bg-gray-50 p-6">
          <Image width={120} src={Logo} alt="logo" />
          <div className="flex flex-col gap-3">
            <Link href="/" className="hover:text-blue-500">
              Shops
            </Link>
            <Link href="/" className="hover:text-blue-500">
              Offers
            </Link>
            <Link href="/" className="hover:text-blue-500">
              Contact
            </Link>
            <Link href="/" className="hover:text-blue-500">
              <Button className="bg-green-600 text-white p-3 hover:bg-green-700 rounded-sm">
                Become A Seller
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
