"use client";

import Link from "next/link";
import { IoChevronForward, IoChevronDown } from "react-icons/io5";
import { FiShoppingCart, FiEdit } from "react-icons/fi";
import { LuLayoutGrid } from "react-icons/lu";
import { useState, useCallback } from "react";
import { BsBoxSeam } from "react-icons/bs";

import {
  PiStackDuotone,
  PiShapesDuotone,
  PiShootingStarDuotone,
  PiTagDuotone,
  PiPercentDuotone,
  PiTruckDuotone,
  PiReceiptDuotone,
  PiHandCoinsDuotone,
  PiGearDuotone,
  PiPackageDuotone,
  PiSealQuestionDuotone,
  PiFactoryDuotone,
  PiFileTextDuotone,
  PiHouseLineDuotone,
  PiListNumbersDuotone,
  PiSwapDuotone,
} from "react-icons/pi";
import { AiTwotoneSetting } from "react-icons/ai";

const AdminSideBar = () => {
  const [isShopDropdown, setShopDropdown] = useState(false);
  const [isProductDropdown, setProductsDropdown] = useState(false);
  const [isRefunds, setRefunds] = useState(false);
  const [isFAQDropdown, setFAQDropdown] = useState(false);
  const [isTermsDropdown, setTermsDropdown] = useState(false);

  const toggle = useCallback(
    (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
      setter((prev: boolean) => !prev);
    },
    []
  );

  return (
    <section
      id="sidebar"
      className="min-h-screen bg-white w-80 px-5 py-2 flex flex-col gap-5"
    >
      <div className="">
        <h5 className="text-gray-400 mb-5">MAIN</h5>
        <Link
          href="/dashboard"
          className="flex justify-start items-center mx-auto gap-2 hover:bg-blue-100 text-gray-800 hover:text-blue-600 p-3 rounded-sm"
        >
          <LuLayoutGrid />
          <span className="ml-2">Dashboard</span>
        </Link>
      </div>
      <div className="">
        <h5 className="text-gray-400 mb-5">SHOP MANAGEMENT</h5>
        <div className="flex justify-start items-center mx-auto hover:bg-blue-100 text-gray-800 hover:text-blue-600 p-3 rounded-sm">
          <Link
            href="/dashboard"
            className="flex justify-start items-center mx-auto gap-2 ml-0  "
          >
            <FiShoppingCart />
            <span className="">My Shop</span>
          </Link>
          {!isShopDropdown ? (
            <IoChevronForward
              className="cursor-pointer"
              onClick={() => toggle(setShopDropdown)}
            />
          ) : (
            <IoChevronDown
              className="cursor-pointer"
              onClick={() => toggle(setShopDropdown)}
            />
          )}
        </div>
        {isShopDropdown && (
          <div className="flex flex-col gap-3 ml-2 p-2">
            <Link
              href="/link1"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Link 1
            </Link>
            <Link
              href="/link2"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Link 2
            </Link>
            {/* Add more links as needed */}
          </div>
        )}
      </div>
      <div className="">
        <h5 className="text-gray-400 mb-5">PRODUCT MANAGEMENT</h5>
        <div className="flex flex-col  mx-auto gap-3">
          <div className="flex justify-start items-center  hover:bg-blue-100 text-gray-800 hover:text-blue-600 p-3 rounded-sm">
            <Link
              href="/dashboard"
              className="flex justify-start items-center  gap-2 ml-0 w-full "
            >
              <BsBoxSeam />
              <span className="">Products</span>
            </Link>
            {!isProductDropdown ? (
              <IoChevronForward
                className="cursor-pointer"
                onClick={() => toggle(setProductsDropdown)}
              />
            ) : (
              <IoChevronDown
                className="cursor-pointer"
                onClick={() => toggle(setProductsDropdown)}
              />
            )}
          </div>
          {isProductDropdown && (
            <div className="flex flex-col gap-3 ml-2 p-2">
              <Link
                href="/link1"
                className="ml-5 hover:text-blue-600 text-gray-800"
              >
                All Products
              </Link>
              <Link
                href="/link2"
                className="ml-5 hover:text-blue-600 text-gray-800"
              >
                My Draft Products
              </Link>
              <Link
                href="/link2"
                className="ml-5 hover:text-blue-600 text-gray-800"
              >
                All Low & Out of Stock Products
              </Link>
              {/* Add more links as needed */}
            </div>
          )}
          <Link
            href="/dashboard"
            className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
          >
            <span>
              <PiStackDuotone />
            </span>{" "}
            Inventory
          </Link>
          <Link
            href="/dashboard"
            className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
          >
            <span>
              <PiShapesDuotone />
            </span>{" "}
            Categories
          </Link>
          <Link
            href="/dashboard"
            className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
          >
            <span>
              <PiTagDuotone />
            </span>{" "}
            Tags
          </Link>
          <Link
            href="/dashboard"
            className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
          >
            <span>
              <PiShootingStarDuotone />
            </span>{" "}
            Brands
          </Link>
        </div>
      </div>
      <div>
        <h5 className="text-gray-400">E-COMMERCE MANAGEMENT</h5>
        <Link
          href="/dashboard"
          className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
        >
          <span>
            <PiPercentDuotone />
          </span>{" "}
          Taxes
        </Link>
        <Link
          href="/dashboard"
          className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
        >
          <span>
            <PiTruckDuotone />
          </span>{" "}
          Shippings
        </Link>
        <Link
          href="/dashboard"
          className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
        >
          <span>
            <PiReceiptDuotone />
          </span>{" "}
          Withdrawals
        </Link>
        <div className="flex justify-start items-center  hover:bg-blue-100 text-gray-800 hover:text-blue-600 p-3 rounded-sm">
          <Link
            href="/dashboard"
            className="flex justify-start items-center  gap-2 ml-0 w-full "
          >
            <PiHandCoinsDuotone />
            <span className="">Refunds</span>
          </Link>
          {!isRefunds ? (
            <IoChevronForward
              className="cursor-pointer"
              onClick={() => toggle(setRefunds)}
            />
          ) : (
            <IoChevronDown
              className="cursor-pointer"
              onClick={() => toggle(setRefunds)}
            />
          )}
        </div>
        {isRefunds && (
          <div className="flex flex-col gap-3 ml-2 p-2">
            <Link
              href="/link1"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Reported Refunds
            </Link>
            <Link
              href="/link2"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Refund Policies
            </Link>
            <Link
              href="/link2"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Add New Refunds Policy
            </Link>
            <Link
              href="/link2"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Refunds Reasons
            </Link>
            <Link
              href="/link2"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Add New Refunds Reasons
            </Link>
            {/* Add more links as needed */}
          </div>
        )}
      </div>
      <div>
        <h5 className="text-gray-400">PAGE CONTROL</h5>
        <Link
          href="/dashboard"
          className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
        >
          <span>
            <PiHouseLineDuotone />
          </span>{" "}
          Page Groups
        </Link>

        <div className="flex justify-start items-center  hover:bg-blue-100 text-gray-800 hover:text-blue-600 p-3 rounded-sm">
          <Link
            href="/dashboard"
            className="flex justify-start items-center  gap-2 ml-0 w-full "
          >
            <AiTwotoneSetting />
            <span className="">FAQs</span>
          </Link>
          {!isFAQDropdown ? (
            <IoChevronForward
              className="cursor-pointer"
              onClick={() => toggle(setFAQDropdown)}
            />
          ) : (
            <IoChevronDown
              className="cursor-pointer"
              onClick={() => toggle(setFAQDropdown)}
            />
          )}
        </div>
        {isFAQDropdown && (
          <div className="flex flex-col gap-3 ml-2 p-2">
            <Link
              href="/link1"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              All FAQs
            </Link>
            <Link
              href="/link2"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Add new FAQs
            </Link>
            {/* Add more links as needed */}
          </div>
        )}
        <div className="flex justify-start items-center  hover:bg-blue-100 text-gray-800 hover:text-blue-600 p-3 rounded-sm">
          <Link
            href="/dashboard"
            className="flex justify-start items-center  gap-2 ml-0 w-full "
          >
            <PiFileTextDuotone />
            <span className="">Terms & Conditions</span>
          </Link>
          {!isTermsDropdown ? (
            <IoChevronForward
              className="cursor-pointer"
              onClick={() => toggle(setTermsDropdown)}
            />
          ) : (
            <IoChevronDown
              className="cursor-pointer"
              onClick={() => toggle(setTermsDropdown)}
            />
          )}
        </div>
        {isTermsDropdown && (
          <div className="flex flex-col gap-3 ml-2 p-2">
            <Link
              href="/link1"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              All Terms
            </Link>
            <Link
              href="/link2"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Add new Terms
            </Link>

            {/* Add more links as needed */}
          </div>
        )}
      </div>
      <div>
        <h5 className="text-gray-400 mb-4">ORDER MANAGEMENT</h5>
        <Link
          href="/dashboard"
          className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
        >
          <span>
            <PiListNumbersDuotone />
          </span>{" "}
          Orders
        </Link>
        <Link
          href="/dashboard"
          className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
        >
          <span>
            <FiEdit />
          </span>{" "}
          Create Orders
        </Link>
        <Link
          href="/dashboard"
          className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
        >
          <span>
            <PiSwapDuotone />
          </span>{" "}
          Transactions
        </Link>
      </div>
      <div>
        <h5 className="text-gray-400">USER CONTROL</h5>
      </div>
      <div>
        <h5 className="text-gray-400">FEEDBACK CONTROL</h5>
      </div>
      <div>
        <h5 className="text-gray-400">PROMO MANAGEMENT</h5>
      </div>
      <div>
        <h5 className="text-gray-400">FEATURE MANAGEMENT</h5>
      </div>
      <div>
        <h5 className="text-gray-400">SITE MANAGEMENT</h5>
      </div>
    </section>
  );
};

export default AdminSideBar;
