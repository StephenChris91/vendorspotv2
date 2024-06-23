"use client";

import Link from "next/link";
import { IoChevronForward, IoChevronDown } from "react-icons/io5";
import { FiShoppingCart, FiEdit, FiUser, FiUserPlus } from "react-icons/fi";
import { LuLayoutGrid } from "react-icons/lu";
import { useState, useCallback } from "react";
import { BsBoxSeam } from "react-icons/bs";
import { ScrollArea } from "../ui/scroll-area";

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
  PiUsersThreeDuotone,
  PiUserListDuotone,
  PiScrollDuotone,
  PiStorefrontDuotone,
  PiUsersFourDuotone,
  PiUserThin,
  PiStarDuotone,
  PiQuestionDuotone,
  PiGiftDuotone,
  PiLightningDuotone,
  PiChatsCircleDuotone,
  PiFadersDuotone,
  PiArrowSquareOutDuotone,
} from "react-icons/pi";

import { AiTwotoneSetting } from "react-icons/ai";

const AdminSideBar = () => {
  const [isShopDropdown, setShopDropdown] = useState(false);
  const [isProductDropdown, setProductsDropdown] = useState(false);
  const [isRefunds, setRefunds] = useState(false);
  const [isFAQDropdown, setFAQDropdown] = useState(false);
  const [isTermsDropdown, setTermsDropdown] = useState(false);
  const [vendorDropdown, setVendorDropdown] = useState(false);
  const [staffDropdown, setStaffDropdown] = useState(false);
  const [isFlashSale, setIsFlashSale] = useState(false);
  const [isCoupons, setIsCoupons] = useState(false);

  const toggle = useCallback(
    (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
      setter((prev: boolean) => !prev);
    },
    []
  );

  return (
    <ScrollArea className="h-screen w-[350px] bg-white rounded-md border p-4 z-50">
      <div className="">
        <h5 className="text-gray-400 mb-4 mt-4">MAIN</h5>
        <Link
          href="/dashboard"
          className="flex justify-start items-center mx-auto gap-2 hover:bg-blue-100 text-gray-800 hover:text-blue-600 p-3 rounded-sm"
        >
          <LuLayoutGrid />
          <span className="ml-2">Dashboard</span>
        </Link>
      </div>
      <div className="">
        <h5 className="text-gray-400 mb-4 mt-4">SHOP MANAGEMENT</h5>
        <div className="flex justify-start items-center mx-auto hover:bg-blue-100 text-gray-800 hover:text-blue-600 p-3 rounded-sm">
          <Link
            href="/dashboard"
            className="flex justify-start items-center mx-auto gap-2 ml-0  "
          >
            <FiShoppingCart />
            <span className="">Shop</span>
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
              href="/dashboard/all-shops"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              All Shops
            </Link>
            {/* <Link
              href="/dashboard/my-shop"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              My Shop
            </Link> */}
            <Link
              href="/dashboard/createshop"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Add New Shop
            </Link>
            {/* Add more links as needed */}
          </div>
        )}
      </div>
      <div className="">
        <h5 className="text-gray-400 mb-4 mt-4">PRODUCT MANAGEMENT</h5>
        <div className="flex flex-col  mx-auto gap-3">
          <div className="flex justify-start items-center  hover:bg-blue-100 text-gray-800 hover:text-blue-600 p-3 rounded-sm">
            <Link
              href=""
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
                href="/dashboard/all-products"
                className="ml-5 hover:text-blue-600 text-gray-800"
              >
                All Products
              </Link>
              <Link
                href="/dashboard/my-draft-products"
                className="ml-5 hover:text-blue-600 text-gray-800"
              >
                My Draft Products
              </Link>
              <Link
                href="/dashboard/low-and-out-of-stock-products"
                className="ml-5 hover:text-blue-600 text-gray-800"
              >
                All Low & Out of Stock Products
              </Link>
              <Link
                href="/dashboard/addProducts"
                className="ml-5 hover:text-blue-600 text-gray-800"
              >
                Add Products
              </Link>
              {/* Add more links as needed */}
            </div>
          )}
          <Link
            href="/dashboard/inventory"
            className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
          >
            <span>
              <PiStackDuotone />
            </span>{" "}
            Inventory
          </Link>
          <Link
            href="/dashboard/categories"
            className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
          >
            <span>
              <PiShapesDuotone />
            </span>{" "}
            Categories
          </Link>
          <Link
            href="/dashboard/tags"
            className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
          >
            <span>
              <PiTagDuotone />
            </span>{" "}
            Tags
          </Link>
          <Link
            href="/dashboard/brands"
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
        <h5 className="text-gray-400 mb-4 mt-4">E-COMMERCE MANAGEMENT</h5>
        <Link
          href="/dashboard/tax"
          className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
        >
          <span>
            <PiPercentDuotone />
          </span>{" "}
          Taxes
        </Link>
        <Link
          href="/dashboard/shippings"
          className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
        >
          <span>
            <PiTruckDuotone />
          </span>{" "}
          Shippings
        </Link>
        <Link
          href="/dashboard/withdrawals"
          className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
        >
          <span>
            <PiReceiptDuotone />
          </span>{" "}
          Withdrawals
        </Link>
        <div className="flex justify-start items-center  hover:bg-blue-100 text-gray-800 hover:text-blue-600 p-3 rounded-sm">
          <Link
            href=""
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
              href="/dashboard/reported-refunds"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Reported Refunds
            </Link>
            <Link
              href="/dashboard/refunds-policy"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Refund Policies
            </Link>
            <Link
              href="/dashboard/add-new-refunds-policy"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Add New Refunds Policy
            </Link>
            <Link
              href="/dashboard/refunds-reasons"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Refunds Reasons
            </Link>
            <Link
              href="/dashboard/add-new-refunds-reasons"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Add New Refunds Reasons
            </Link>
            {/* Add more links as needed */}
          </div>
        )}
      </div>
      <div>
        <h5 className="text-gray-400 mt-4 mb-4">PAGE CONTROL</h5>
        <Link
          href="/dashboard/page-groups"
          className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
        >
          <span>
            <PiHouseLineDuotone />
          </span>{" "}
          Page Groups
        </Link>

        <div className="flex justify-start items-center  hover:bg-blue-100 text-gray-800 hover:text-blue-600 p-3 rounded-sm">
          <Link
            href="/"
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
              href="/dashboard/all-faqs"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              All FAQs
            </Link>
            <Link
              href="/dashboard/add-new-faqs"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Add new FAQs
            </Link>
          </div>
        )}
        <div className="flex justify-start items-center  hover:bg-blue-100 text-gray-800 hover:text-blue-600 p-3 rounded-sm">
          <Link
            href=""
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
              href="/dashboard/all-terms"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              All Terms
            </Link>
            <Link
              href="/dashboard/add-new-terms"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Add new Terms
            </Link>

            {/* Add more links as needed */}
          </div>
        )}
      </div>
      <div>
        <h5 className="text-gray-400 mb-4 mt-4">ORDER MANAGEMENT</h5>
        <Link
          href="/dashboard/orders"
          className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
        >
          <span>
            <PiListNumbersDuotone />
          </span>{" "}
          Orders
        </Link>
        <Link
          href="/dashboard/create-orders"
          className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
        >
          <span>
            <PiArrowSquareOutDuotone />
          </span>{" "}
          Create Orders
        </Link>
        <Link
          href="/dashboard/transactions"
          className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
        >
          <span>
            <PiSwapDuotone />
          </span>{" "}
          Transaction
        </Link>
      </div>
      <div>
        <h5 className="text-gray-400 mb-4 mt-4">USER MANAGEMENT</h5>
        <Link
          href="/dashboard/all-users"
          className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
        >
          <span>
            <PiUsersThreeDuotone />
          </span>{" "}
          All Users
        </Link>
        <Link
          href="/dashboard/admin-list"
          className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
        >
          <span>
            <PiUserListDuotone />
          </span>{" "}
          Admin List
        </Link>
        <div className="flex justify-start items-center  hover:bg-blue-100 text-gray-800 hover:text-blue-600 p-3 rounded-sm">
          <Link
            href=""
            className="flex justify-start items-center  gap-2 ml-0 w-full "
          >
            <PiStorefrontDuotone />
            <span className="">Vendors</span>
          </Link>
          {!vendorDropdown ? (
            <IoChevronForward
              className="cursor-pointer"
              onClick={() => toggle(setVendorDropdown)}
            />
          ) : (
            <IoChevronDown
              className="cursor-pointer"
              onClick={() => toggle(setVendorDropdown)}
            />
          )}
        </div>
        {vendorDropdown && (
          <div className="flex flex-col gap-3 ml-2 p-2">
            <Link
              href="/dashboard/all-vendors"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              All Vendors
            </Link>
            <Link
              href="/dashboard/pending-vendors"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Pending Vendors
            </Link>
            {/* Add more links as needed */}
          </div>
        )}
        <div className="flex justify-start items-center  hover:bg-blue-100 text-gray-800 hover:text-blue-600 p-3 rounded-sm">
          <Link
            href=""
            className="flex justify-start items-center  gap-2 ml-0 w-full "
          >
            <PiUsersFourDuotone />
            <span className="">Staff</span>
          </Link>
          {!staffDropdown ? (
            <IoChevronForward
              className="cursor-pointer"
              onClick={() => toggle(setStaffDropdown)}
            />
          ) : (
            <IoChevronDown
              className="cursor-pointer"
              onClick={() => toggle(setStaffDropdown)}
            />
          )}
        </div>
        {staffDropdown && (
          <div className="flex flex-col gap-3 ml-2 p-2">
            <Link
              href="/dashboard/my-staff"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              My Staff
            </Link>
            <Link
              href="/dashboard/vendor-staff"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Vendor Staff
            </Link>
            {/* Add more links as needed */}
          </div>
        )}
        <Link
          href="/dashboard/customers"
          className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
        >
          <span>
            <PiUserThin />
          </span>{" "}
          Customers
        </Link>
      </div>

      <div>
        <h5 className="text-gray-400 mb-4 mt-4">FEEDBACK CONTROL</h5>
        <Link
          href="/dashboard/reviews"
          className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
        >
          <span>
            <PiStackDuotone />
          </span>{" "}
          Reviews
        </Link>
        <Link
          href="/dashboard/questions"
          className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
        >
          <span>
            <PiQuestionDuotone />
          </span>{" "}
          Questions
        </Link>
      </div>
      <div>
        <h5 className="text-gray-400 mb-4 mt-4">PROMO MANAGEMENT</h5>
        <div className="flex justify-start items-center  hover:bg-blue-100 text-gray-800 hover:text-blue-600 p-3 rounded-sm">
          <Link
            href=""
            className="flex justify-start items-center  gap-2 ml-0 w-full "
          >
            <PiGiftDuotone />
            <span className="">Coupons</span>
          </Link>
          {!isCoupons ? (
            <IoChevronForward
              className="cursor-pointer"
              onClick={() => toggle(setIsCoupons)}
            />
          ) : (
            <IoChevronDown
              className="cursor-pointer"
              onClick={() => toggle(setIsCoupons)}
            />
          )}
        </div>
        {isCoupons && (
          <div className="flex flex-col gap-3 ml-2 p-2">
            <Link
              href="/dashboard/all-coupons"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              All Coupons
            </Link>
            <Link
              href="/dashboard/add-new-coupons"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Add New Coupons
            </Link>
            {/* Add more links as needed */}
          </div>
        )}
        <div className="flex justify-start items-center  hover:bg-blue-100 text-gray-800 hover:text-blue-600 p-3 rounded-sm">
          <Link
            href=""
            className="flex justify-start items-center  gap-2 ml-0 w-full "
          >
            <PiLightningDuotone />
            <span className="">Flash Sale</span>
          </Link>
          {!isFlashSale ? (
            <IoChevronForward
              className="cursor-pointer"
              onClick={() => toggle(setIsFlashSale)}
            />
          ) : (
            <IoChevronDown
              className="cursor-pointer"
              onClick={() => toggle(setIsFlashSale)}
            />
          )}
        </div>
        {isFlashSale && (
          <div className="flex flex-col gap-3 ml-2 p-2">
            <Link
              href="/dashboard/all-campaigns"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              All Campaigns
            </Link>
            <Link
              href="/dashboard/add-new-campaign"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Add New Campaigns
            </Link>
            <Link
              href="/dashboard/vendor-campaigns"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Vendor Campaigns
            </Link>
            {/* Add more links as needed */}
          </div>
        )}
      </div>
      <div>
        <h5 className="text-gray-400 mb-4 mt-4">FEATURE MANAGEMENT</h5>
        <Link
          href="/dashboard/message"
          className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
        >
          <span>
            <PiChatsCircleDuotone />
          </span>{" "}
          Message
        </Link>
        <Link
          href="/dashboard/store-notice"
          className="flex gap-3 justify-start items-center hover:bg-blue-100 hover:text-blue-600 text-gray-800 p-3 rounded-sm"
        >
          <span>
            <PiScrollDuotone />
          </span>{" "}
          Store Notice
        </Link>
      </div>
      <div>
        <h5 className="text-gray-400 mb-4 mt-4">SITE MANAGEMENT</h5>
        <div className="flex justify-start items-center  hover:bg-blue-100 text-gray-800 hover:text-blue-600 p-3 rounded-sm">
          <Link
            href=""
            className="flex justify-start items-center  gap-2 ml-0 w-full "
          >
            <PiFadersDuotone />
            <span className="">Settings</span>
          </Link>
          {!isFlashSale ? (
            <IoChevronForward
              className="cursor-pointer"
              onClick={() => toggle(setIsFlashSale)}
            />
          ) : (
            <IoChevronDown
              className="cursor-pointer"
              onClick={() => toggle(setIsFlashSale)}
            />
          )}
        </div>
        {isFlashSale && (
          <div className="flex flex-col gap-3 ml-2 p-2">
            <Link
              href="/dashboard/general-settings"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              General Settings
            </Link>
            <Link
              href="/dashboard/payment-settings"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Payment Settings
            </Link>
            <Link
              href="/dashboard/seo-settings"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              SEO Settings
            </Link>
            <Link
              href="/dashboard/event-settings"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Event Settings
            </Link>
            <Link
              href="/dashboard/shop-settings"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Shop Settings
            </Link>
            <Link
              href="/dashboard/maintenance-settings"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Maintenance Settings
            </Link>
            <Link
              href="/dashboard/company-information"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Company Information
            </Link>
            <Link
              href="/dashboard/promo-popup"
              className="ml-5 hover:text-blue-600 text-gray-800"
            >
              Promo Popup
            </Link>
            {/* Add more links as needed */}
          </div>
        )}
      </div>
    </ScrollArea>
  );
};

export default AdminSideBar;
