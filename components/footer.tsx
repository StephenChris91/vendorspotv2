import Subscribe from "./subscribe-section";
import logo from "@/app/v-logo.png";
import Image from "next/image";

//import icons
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

import apple from "@/public/app-store.png";
import google from "@/public/google-pay.png";

export default function Footer() {
  return (
    <>
      <Subscribe />
      <footer className="bg-gray-50 flex justify-between items-center mx-auto w-full px-28 py-12">
        <div className="flex flex-col space-y-2 w-96">
          <Image src={logo} alt="footer logo" width={120} height={undefined} />
          <p>
            Best information about the company gies here but now lorem ipsum is
          </p>
          <div className="flex justify-start items-start gap-2 text-gray-600">
            <a href="/" target="_blank" rel="noreferrer">
              <AiFillFacebook className="text-3xl text-gray-400" />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <AiFillTwitterCircle className="text-gray-400 text-3xl" />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <AiFillInstagram className="text-gray-400 text-3xl" />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <AiFillLinkedin className="text-gray-400 text-3xl" />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <AiFillYoutube className="text-gray-400 text-3xl" />
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-700">About</h3>
          <div className="flex flex-col space-y-2">
            <a href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-700">About Us</p>
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-700">Find Stores</p>
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-700">Categories</p>
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-700">Blogs</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-700">Partnership</h3>
          <div className="flex flex-col space-y-2">
            <a href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-700">About Us</p>
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-700">Find Stores</p>
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-700">Categories</p>
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-700">Blogs</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-700">Information</h3>
          <div className="flex flex-col space-y-2">
            <a href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-700">About Us</p>
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-700">Find Stores</p>
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-700">Categories</p>
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-700">Blogs</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-700">For Users</h3>
          <div className="flex flex-col space-y-2">
            <a href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-700">About Us</p>
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-700">Find Stores</p>
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-700">Categories</p>
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <p className="text-gray-700">Blogs</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-700">Get App</h3>
          <Image src={apple} alt="alt" width={160} height={undefined} />
          <Image src={google} alt="alt" width={160} height={undefined} />
        </div>
      </footer>
    </>
  );
}