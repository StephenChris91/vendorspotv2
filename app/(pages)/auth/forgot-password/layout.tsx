// "use client";

import { GeistSans } from "geist/font/sans";
import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";
// import "@/styles/globals.css"
import { cn } from "@/lib/utils";
// import { Provider } from "react-redux";

import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";
import ProductCart from "@/components/cart/product-cart";
import PromoBanner from "@/components/home2/promo-banner";
import UpperNav from "@/components/home2/upper-nav";
import MiddleNav from "@/components/home2/middle-nav";
import LowerNav from "@/components/home2/lower-nav";
import Footer from "@/components/footer";
import { SessionProvider } from "next-auth/react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "VendorSpot | Sign Up",
  description: "Buy Anything, Anywhere, Anytime",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en" className={cn(GeistSans.className)}>
      <div className={cn(fontSans.variable)}>
          <main className="">
            <PromoBanner />
            <UpperNav />
            <MiddleNav />
            <LowerNav />
            <ProductCart />
            <div className="">{children}</div>
            <Footer />
            <Toaster />
          </main>
      </div>
    </div>
  );
}
