"use client";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AdminTopbar } from "./admin-topbar";
import { ScrollArea } from "../ui/scroll-area";
import Footer from "@/app/(dasboard)/dashboard/adminFooter";

type AdminMainSectionProps = {
  children?: React.ReactNode;
};

const AdminMainSection: React.FC<AdminMainSectionProps> = ({ children }) => {
  // const router = useRouter();
  // ...
  return (
    <ScrollArea className="w-full h-screen">
      <AdminTopbar />
      {children}
      <Footer />
    </ScrollArea>
  );
};

export default AdminMainSection;
