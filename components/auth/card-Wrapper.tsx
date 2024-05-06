import Link from "next/link";
import { Card } from "../ui/card";

import { ReactNode } from "react"; // Add the missing import
import { Button } from "../ui/button";

interface CardProps {
  title?: string;
  backButtonLabel?: string;
  backButtonLink?: string;
  children: ReactNode;
}

export default function CardWrapper({
  title,
  backButtonLabel,
  backButtonLink,
  children,
}: CardProps) {
  return (
    <div
      className="flex flex-col items-center justify-center w-auto h-auto bg-blue-50 mt-32 mb-10 p-10"
      style={{ maxWidth: "500px" }}
    >
      <h1 className="text-blue-600">{title}</h1>

      {children}

      <div className="flex justify-center mt-5 items-center mx-auto gap-3 w-full text-center">
        {backButtonLink && (
          <Link href={backButtonLink}>
            <Button className="bg-blue-600 hover:bg-blue-700 rounded-sm">
              <span>{backButtonLabel}</span>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
