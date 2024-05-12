// "use client";
import React from "react";
import { AdminTopbar } from "@/components/dasboard/admin-topbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Footer from "@/app/(dasboard)/dashboard/adminFooter";

type AdminMainSectionProps = {
  children?: React.ReactNode;
};

const AdminMainSection = ({ children }: AdminMainSectionProps) => {
  return (
    <ScrollArea className="w-full h-screen">
      <AdminTopbar />
      {children}
      <Footer />
    </ScrollArea>
  );
};

export default AdminMainSection;
