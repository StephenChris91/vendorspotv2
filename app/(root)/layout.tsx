import { GeistSans } from "geist/font/sans";
import "../globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { SubNav } from "@/components/sub-nav";
import Footer from "@/components/footer";
import AuthProvider from "@/components/authprovider";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Layout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <div
      className={cn(
        GeistSans.className,
        fontSans.variable,
        "min-h-screen flex flex-col items-center md:p-0"
      )}
    >
      <AuthProvider accessToken={session?.access_token}>
        <Navbar />
        <SubNav />
        <div className="wrapper">{children}</div>
        <Footer />
      </AuthProvider>
    </div>
  );
}
