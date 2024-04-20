"use client";

import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "../ui/button";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { IoCloseSharp } from "react-icons/io5";

const PromoBanner = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  const [isVisible, setIsVisible] = useState(true);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleToggleVisible = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div
      className={`w-full flex ${
        isMobile ? "flex-col" : "flex-row"
      } bg-gray-800 p-5`}
    >
      <div
        className={`w-full flex ${
          isMobile ? "flex-col" : "flex-row"
        } justify-between items-center mx-auto `}
      >
        <div className={`flex ${isMobile ? "hidden" : "block"}`}>
          <Button
            className={`p-5 bg-yellow-300 font-bold text-2xl text-black -rotate-12 rounded-none shadow-none`}
          >
            Black
          </Button>{" "}
          <span className="text-white">Friday</span>
        </div>
        <div
          className={`${
            isMobile
              ? "flex flex-col space-y-1 items-center"
              : "flex text-center justify-center mx-auto"
          }`}
        >
          <span className="text-white">up to</span>
          <h1 className="text-yellow-300 text-4xl font-bold">80%</h1>
          <span className="text-white">OFF</span>
        </div>
        <div>
          <Button className="bg-yellow-300 p-5 rounded-none hover:bg-yellow-400 text-black">
            Shop Now <LiaLongArrowAltRightSolid className="ml-2 shadow-none" />
          </Button>
        </div>
      </div>
      <IoCloseSharp
        className={`${
          isMobile
            ? "text-center block w-full p-2 cursor-pointer rounded-sm text-4xl text-white"
            : "p-2 cursor-pointer rounded-sm text-4xl hover:bg-gray-900 text-white"
        }`}
        onClick={handleToggleVisible}
      />
    </div>
  ) : null;
};

export default PromoBanner;
