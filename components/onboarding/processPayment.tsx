"use client";

import { PaystackButton } from "react-paystack";
import { useEffect, useState } from "react";
import { db } from "@/prisma/prisma";
import { useToast } from "@/components/ui/use-toast";

const ProcessPayment = ({
  setPaymentProcessed,
}: {
  setPaymentProcessed: (status: boolean) => void;
}) => {
  const [componentProps, setComponentProps] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  const { toast } = useToast();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/session");
        if (!response.ok) {
          throw new Error("Failed to fetch user session");
        }
        const data = await response.json();
        setUser(data);
        console.log("User session:", data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user session:", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (!loading && user) {
      const initPayment = () => {
        const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

        if (!publicKey) {
          throw new Error("Paystack public key is not defined");
        }

        const props = {
          amount: 200000, // Paystack expects the amount in kobo, so this would be 2000 Naira
          email: user.email,
          publicKey,
          text: "Proceed to Payment",
          onSuccess: ({ reference }: { reference: any }) => {
            setPaymentProcessed(true);
            db.user.update({
              where: {
                id: user.id,
              },
              data: {
                hasPaid: true,
              },
            });
            toast({
              variant: "default",
              title: "Payment Successfull 😄",
              description: "",
              duration: 9000,
            });
          },
          onClose: () => {
            alert("Transaction closed");
          },
        };

        setComponentProps(props);
      };

      initPayment();
    }
  }, [loading, user, setPaymentProcessed]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!componentProps) {
    return <div>Loading Paystack button...</div>;
  }

  return (
    <PaystackButton
      {...componentProps}
      className="bg-blue-600 p-4 font-semibold text-white rounded-sm"
    />
  );
};

export default ProcessPayment;
