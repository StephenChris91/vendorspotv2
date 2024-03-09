import { GeistSans } from "geist/font/sans";
import "../../globals.css";
import { Inter as FontSans } from "next/font/google";
// import "@/styles/globals.css"
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { SubNav } from "@/components/sub-nav";
import Footer from "@/components/footer";
import AuthProvider from "@/components/authprovider";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation";
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

export default function Layout(
  { children }: { children: React.ReactNode },
  { isDashboard, session }: LayoutProps
) {
  const supabase = createServerComponentClient({ cookies });

  // <AuthProvider accessToken={session?.access_token}>{children}</AuthProvider>;

  return (
    <html lang="en" className={GeistSans.className}>
      <body className={cn(fontSans.variable)}>
        <section>
          <main className="min-h-screen  md:p-0 w-full">
            <div className="container flex items-start justify-start">
              <AdminSideBar />
              <AdminMainSection>{children}</AdminMainSection>
            </div>
            <Footer showSubscribe={false} />
          </main>
        </section>
      </body>
    </html>
  );
}

{
  /*  */
}
