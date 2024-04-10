import { GeistSans } from "geist/font/sans";
import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";
// import "@/styles/globals.css"
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { SubNav } from "@/components/sub-nav";
import Footer from "@/components/footer";
import AuthProvider from "@/components/authprovider";
import "@mantine/core/styles.css";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const metadata = {
  // metadataBase: new URL(defaultUrl),
  title: "VendorSpot",
  description: "Buy Anything, Anywhere, Anytime",
};

type LayoutProps = {
  children: React.ReactNode;
  isDashboard?: boolean;
  session?: any;
};
const revalidate = 0;

// <AuthProvider accessToken={session?.access_token}>{children}</AuthProvider>;

export default async function Layout({
  children,
}: // session,
{
  children: React.ReactNode;
  // session: any;
}) {
  // const { data: sessionData } = useSession();
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  return (
    <html lang="en" className={cn(GeistSans.className)}>
      <head>
        {" "}
        <ColorSchemeScript />
      </head>
      <body className={cn(fontSans.variable)}>
        <main className="min-h-screen flex flex-col items-center md:p-0 ">
          <AuthProvider accessToken={data.session?.access_token}>
            <Navbar />
            <SubNav />
            <div className="wrapper">
              <MantineProvider>{children}</MantineProvider>
            </div>
            <Footer />
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
