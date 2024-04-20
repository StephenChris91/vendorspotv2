import { GeistSans } from "geist/font/sans";
import "../../../app/globals.css";
import { Inter as FontSans } from "next/font/google";
// import "@/styles/globals.css"
import { cn } from "@/lib/utils";

// import AuthProvider from "@/components/authprovider";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";
import ProductCart from "@/components/cart/product-cart";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "VendorSpot | Home Two",
  description: "Buy Anything, Anywhere, Anytime",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en" className={cn(GeistSans.className)}>
      <div className={cn(fontSans.variable)}>
        <main className="">
          <ProductCart />
          <div className="">{children}</div>
          <Toaster />
        </main>
      </div>
    </div>
  );
}
