import { GeistSans } from "geist/font/sans";
import "../../globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import AdminSideBar from "@/components/dasboard/admin-sidebar";
import AdminMainSection from "@/components/dasboard/admin-main";
import Provider from "@/lib/context/provider";
import { Metadata } from "next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "VendorSpot | Dashboard",
  description: "Buy Anything, Anywhere, Anytime",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en" className={cn(GeistSans.className)}>
      <div className={cn(fontSans.variable)}>
        <Provider>
          <main className="md:p-0 w-full p-20">
            <div className="container flex items-start justify-start p-20">
              <AdminSideBar />
              <AdminMainSection>{children}</AdminMainSection>
            </div>
            {/* <Footer showSubscribe={false} /> */}
          </main>
        </Provider>
      </div>
    </div>
  );
}
