"use client";

import React, { createContext, useContext } from "react";
import { GeistSans } from "geist/font/sans";
import "../globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { SubNav } from "@/components/sub-nav";
import Footer from "@/components/footer";
import AuthProvider from "@/components/authprovider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

type SessionContextType = {
  session: any;
};

const SessionContext = createContext<SessionContextType | undefined>(undefined);

type LayoutProps = {
  children: React.ReactNode;
};

export function useSession() {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
}

export function SessionProvider({
  children,
  session,
}: LayoutProps & SessionContextType) {
  return (
    <SessionContext.Provider value={{ session }}>
      {children}
    </SessionContext.Provider>
  );
}

export default function Layout({ children }: LayoutProps) {
  const { session } = useSession();
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
