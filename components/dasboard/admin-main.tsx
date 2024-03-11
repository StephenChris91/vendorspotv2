"use client";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AdminTopbar from "./admin-topbar";

type AdminMainSectionProps = {
  children?: React.ReactNode;
};

const AdminMainSection: React.FC<AdminMainSectionProps> = ({ children }) => {
  const router = useRouter();
  // ...
  return (
    <div className="w-full">
      <AdminTopbar />
      {children}
    </div>
  );
};

export default AdminMainSection;
