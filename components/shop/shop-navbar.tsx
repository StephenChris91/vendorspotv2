"use client";

import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "@/public/shop/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)", // Adjust breakpoint for desktop screens
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" }); // Adjust breakpoint for tablet and mobile screens
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      duration: 1,
      y: "-100%",
      ease: "bounce",
    });
  });

  function toggleMobileMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav ref={navRef} className="w-full sticky top-0 z-10 bg-gray-50 p-5">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image width={120} src={Logo} alt="logo" />
        </Link>

        {/* Navigation Links */}
        {isDesktopOrLaptop && (
          <div className="hidden lg:flex gap-4">
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
        )}

        {/* Mobile Menu Toggle */}
        {isTabletOrMobile && (
          <button
            className="lg:hidden"
            onClick={() => toggleMobileMenu()}
            ref={navRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isTabletOrMobile && isOpen ? (
        <div className="container mx-auto px-4 py-2">
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
              <Button className="bg-blue-600 text-white p-3 hover:bg-blue-700 rounded-sm">
                Become A Seller
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navigation;
