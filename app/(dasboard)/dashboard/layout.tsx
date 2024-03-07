import AdminMainSection from "@/components/dasboard/admin-main";
import AdminSideBar from "@/components/dasboard/admin-sidebar";
import Footer from "@/components/footer";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <section>
      <main className="min-h-screen  md:p-0 w-full">
        <div className="container flex items-start justify-start">
          <AdminSideBar />
          <AdminMainSection>{children}</AdminMainSection>
        </div>
        <Footer showSubscribe={false} />
      </main>
    </section>
  );
}
