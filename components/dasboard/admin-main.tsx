"use client";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

type AdminMainSectionProps = {
  children?: React.ReactNode;
};

const AdminMainSection: React.FC<AdminMainSectionProps> = ({ children }) => {
  const router = useRouter();
  // ...
  return (
    <div>
      {/* ... */}
      {children}
      <Link
        href="/"
        className="h-[800px] rounded-sm p-2 text-gray-100 bg-gray-800 w-20"
      >
        Back
      </Link>
      {/* ... */}
    </div>
  );
};

export default AdminMainSection;
