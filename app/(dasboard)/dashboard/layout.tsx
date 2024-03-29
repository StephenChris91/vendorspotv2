import { GeistSans } from "geist/font/sans";
import "../../globals.css";
import { Inter as FontSans } from "next/font/google";
// import "@/styles/globals.css"
import { cn } from "@/lib/utils";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AdminSideBar from "@/components/dasboard/admin-sidebar";
import AdminMainSection from "@/components/dasboard/admin-main";

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

type LayoutProps = {
  // children: React.ReactNode;
  isDashboard?: boolean;
  session?: any;
};
const revalidate = 0;

export default function Layout({ children }: { children: React.ReactNode }) {
  // { isDashboard, session }: LayoutProps
  const supabase = createServerComponentClient({ cookies });

  // <AuthProvider accessToken={session?.access_token}>{children}</AuthProvider>;

  return (
    <html lang="en" className={cn(GeistSans.className)}>
      <body className={cn(fontSans.variable)}>
        <main className="md:p-0 w-full p-20">
          <div className="container flex items-start justify-start p-20">
            <AdminSideBar />
            <AdminMainSection>{children}</AdminMainSection>
          </div>
          {/* <Footer showSubscribe={false} /> */}
        </main>
      </body>
    </html>
  );
}
