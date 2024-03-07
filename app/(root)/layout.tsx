import { GeistSans } from "geist/font/sans";
import "../globals.css";
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
  children: React.ReactNode;
  isDashboard?: boolean;
};
const revalidate = 0;

export default async function Layout({ children, isDashboard }: LayoutProps) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // <AuthProvider accessToken={session?.access_token}>{children}</AuthProvider>;

  return (
    <html lang="en" className={GeistSans.className}>
      <body className={cn(fontSans.variable)}>
        <main className="min-h-screen flex flex-col items-center md:p-0 ">
          <AuthProvider accessToken={session?.access_token}>
            <Navbar />
            <SubNav />
            <div className={isDashboard ? "" : "wrapper"}>{children}</div>
            <Footer />
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
