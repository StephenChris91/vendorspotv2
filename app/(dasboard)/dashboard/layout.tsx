// "use client";

import { GeistSans } from "geist/font/sans";
import "../../globals.css";
import { Inter as FontSans } from "next/font/google";
// import "@/styles/globals.css"
import { cn } from "@/lib/utils";
// import "../../../node_modules/react-quill/dist/quill.snow.css";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AdminSideBar from "@/components/dasboard/admin-sidebar";
import AdminMainSection from "@/components/dasboard/admin-main";
import Provider from "@/lib/context/provider";

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

// type LayoutProps = {
//   // children: React.ReactNode;
//   isDashboard?: boolean;
//   session?: any;
// };
const revalidate = 0;

export default function Layout({ children }: { children: React.ReactNode }) {
  // { isDashboard, session }: LayoutProps
  // const supabase = createServerComponentClient({ cookies });

  // <AuthProvider accessToken={session?.access_token}>{children}</AuthProvider>;

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
