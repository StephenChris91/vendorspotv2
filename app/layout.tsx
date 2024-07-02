import { GeistSans } from "geist/font/sans";
import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store";

import Providers from "@/provider";
import QueryClientContextProvider from "@/lib/context/queryclient-providers";
import { CartProvider } from "@/lib/context/cart/cart-context";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "VendorSpot",
  description: "Buy Anything, Anywhere, Anytime",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en" className={cn(GeistSans.className)}>
      <body className={cn(fontSans.variable)}>
        {/* <PersistGate persistor={persistor} loading={null}> */}
        <Providers>
          <SessionProvider session={session}>
            <CartProvider>
              <QueryClientContextProvider>
                <div>{children}</div>
              </QueryClientContextProvider>
            </CartProvider>
          </SessionProvider>
        </Providers>
        {/* </PersistGate> */}
      </body>
    </html>
  );
}
