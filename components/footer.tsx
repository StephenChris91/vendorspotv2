import Subscribe from "./subscribe-section";
import logo from "@/app/v-logo.png";
import Image from "next/image";
import Link from "next/link";

//import icons
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

import apple from "@/public/app-store.png";
import google from "@/public/google-pay.png";

export default function Footer({ showSubscribe = true }) {
  return (
    <>
      {showSubscribe && <Subscribe />}
      <footer className="bg-gray-800 flex justify-between items-center mx-auto w-full px-28 py-12">
        <div className="flex flex-col space-y-2 w-96">
          <Image src={logo} alt="footer logo" width={120} height={undefined} />
          <p className="text-gray-400">
            Best information about the company gies here but now lorem ipsum is
          </p>
          <div className="flex justify-start items-start gap-2 text-gray-50">
            <Link href="/" target="_blank" rel="noreferrer">
              <AiFillFacebook className="text-3xl text-gray-400 hover:text-blue-500" />
            </Link>
            <Link href="/" target="_blank" rel="noreferrer">
              <AiFillTwitterCircle className="text-gray-400 text-3xl hover:text-blue-500" />
            </Link>
            <Link href="/" target="_blank" rel="noreferrer">
              <AiFillInstagram className="text-gray-400 text-3xl hover:text-blue-500" />
            </Link>
            <Link href="/" target="_blank" rel="noreferrer">
              <AiFillLinkedin className="text-gray-400 text-3xl hover:text-blue-500" />
            </Link>
            <Link href="/" target="_blank" rel="noreferrer">
              <AiFillYoutube className="text-gray-400 text-3xl hover:text-blue-500" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-50">About</h3>
          <div className="flex flex-col space-y-2">
            <Link href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-500 hover:text-blue-500">About Us</p>
            </Link>
            <Link href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-500 hover:text-blue-500">Find Stores</p>
            </Link>
            <Link href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-500 hover:text-blue-500">Categories</p>
            </Link>
            <Link href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-500 hover:text-blue-500">Blogs</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-50">Partnership</h3>
          <div className="flex flex-col space-y-2">
            <Link href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-500 hover:text-blue-500">About Us</p>
            </Link>
            <Link href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-500 hover:text-blue-500">Find Stores</p>
            </Link>
            <Link href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-500 hover:text-blue-500">Categories</p>
            </Link>
            <Link href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-500 hover:text-blue-500">Blogs</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-50">Information</h3>
          <div className="flex flex-col space-y-2">
            <Link href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-500 hover:text-blue-500">Help Center</p>
            </Link>
            <Link href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-500 hover:text-blue-500">Money Refund</p>
            </Link>
            <Link href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-500 hover:text-blue-500">Shipping</p>
            </Link>
            <Link href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-500 hover:text-blue-500">Contact Us</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-50">For Users</h3>
          <div className="flex flex-col space-y-2">
            <Link href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-500 hover:text-blue-500">Login</p>
            </Link>
            <Link href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-500 hover:text-blue-500">Register</p>
            </Link>
            <Link href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-500 hover:text-blue-500">Settings</p>
            </Link>
            <Link href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-500 hover:text-blue-500">My Orders</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-50">Get App</h3>
          <Image src={apple} alt="alt" width={160} height={undefined} />
          <Image src={google} alt="alt" width={160} height={undefined} />
        </div>
      </footer>
    </>
  );
}
