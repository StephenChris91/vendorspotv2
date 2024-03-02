"use client";

// components/Navbar.tsx
import { useEffect, useState } from "react";
import { SearchInput } from "./searchInput";
import Image from "next/image";
import Logo from "../app/v-logo.png";
import Link from "next/link";
import { useRef } from "react";

//import icons
import { FaUserAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Button } from "./ui/button";
import { useUser } from "@/app/hooks/useUser";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  const user = useUser();

  const toggleDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCloseDropdown = (event: MouseEvent) => {
    if (
      !cartRef.current?.contains(event.target as Node) &&
      !(event.target as Element).closest(".relative") // Check if the click occurred within the dropdown button
    ) {
      setIsCartOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseDropdown);
    return () => {
      document.removeEventListener("click", handleCloseDropdown);
    };
  }, []);

  return (
    <nav className="border-b-2 p-4 w-full bg-gray-50">
      <div className="max-w-screen-lg mx-auto flex space-x-10 justify-between items-center">
        {/* Brand Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src={Logo} alt=" Logo" width={100} height={100} />
          </Link>
        </div>

        {/* Search Form */}
        <div className="justify-center lg:justify-start sm:block hidden">
          <SearchInput />
        </div>
        {/* Nav Links */}
        <div className="hidden lg:flex space-x-4">
          {user && (
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-700 flex flex-col space-y-4 items-center text-center"
            >
              <FaUserAlt />
              Profile
            </Link>
          )}
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-700 flex flex-col space-y-4 items-center text-center"
          >
            <FaHeart />
            Orders
          </Link>
          {user && (
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-700 flex flex-col space-y-4 items-center text-center"
            >
              <MdMessage />
              Message
            </Link>
          )}
          <div className="relative">
            <button
              className="text-gray-600 flex flex-col space-y-4 items-center text-center hover:text-gray-700 focus:outline-none"
              onClick={toggleDropdown}
            >
              <FaCartShopping />
              Cart
            </button>
            {isCartOpen && (
              <div
                ref={cartRef}
                className="animate-in absolute top-full -left-10 p-4 text-gray-600 bg-gray-50 w-80 h-auto rounded-sm hover:text-gray-700 flex flex-col space-y-4 items-center text-center"
              >
                <a href="#" className="block text-gray-600">
                  Link 1
                </a>
                <a href="#" className="block text-gray-600">
                  Link 2
                </a>
                <Button className="w-full">Checkout</Button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-50 w-52 min-h-screen  py-4 absolute inset-x-0 top-16">
          <Link
            href="#"
            className=" text-gray-600 px-4 py-2 flex m-auto items-start space-x-4"
          >
            <FaUserAlt /> <p>Profile</p>
          </Link>
          <Link
            href="#"
            className=" text-gray-600 px-4 py-2 flex m-auto items-start space-x-4"
          >
            <FaHeart /> <p>Orders</p>
          </Link>
          <Link
            href="#"
            className=" text-gray-600 px-4 py-2 flex m-auto items-start space-x-4"
          >
            <MdMessage /> <p>Message</p>
          </Link>
          <Link
            href="#"
            className=" text-gray-600 px-4 py-2 flex m-auto items-start space-x-4"
          >
            <FaCartShopping /> <p>Cart</p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
