import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
// import "@/styles/globals.css"
import { cn } from "@/lib/utils"
import Navbar from "@/components/navbar";
import { SubNav } from "@/components/sub-nav";


export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "VendorSpot",
  description: "Buy Anything, Anywhere, Anytime",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={GeistSans.className}>
      <body className={cn(fontSans.variable)}>
        <main className="min-h-screen flex flex-col items-center md:p-0 ">
          <Navbar />
          <SubNav />
          <div className="wrapper">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
