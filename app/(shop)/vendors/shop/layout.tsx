import { GeistSans } from "geist/font/sans";
import "../../../globals.css";
import { Inter as FontSans } from "next/font/google";
// import "@/styles/globals.css"
import { cn } from "@/lib/utils";

// import AuthProvider from "@/components/authprovider";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/shop/shop-navbar";
// import { ShopNavbar } from "@/components/shop/shop-navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "VendorSpot",
  description: "Buy Anything, Anywhere, Anytime",
};

export default function Layout(
  { children }: { children: React.ReactNode },
  session: any
) {
  const supabase = createServerComponentClient({ cookies });

  // <AuthProvider accessToken={session?.access_token}>{children}</AuthProvider>;

  return (
    <div lang="en" className={cn(GeistSans.className)}>
      <div className={cn(fontSans.variable)}>
        <main className="flex flex-col items-center md:p-0 ">
          <Navigation />
          <div className="w-full">{children}</div>
          <Toaster />
        </main>
      </div>
    </div>
  );
}
