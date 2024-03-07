import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { SubNav } from "@/components/sub-nav";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  isDashboard?: boolean;
};

export default function Layout({ children, isDashboard }: LayoutProps) {
  // const isDashboard = false; // Declare and assign a default value to 'isDashboard'

  return (
    <section>
      <Navbar />
      <SubNav />
      <div className={isDashboard ? "" : "wrapper"}>{children}</div>
      <Footer />
    </section>
  );
}
