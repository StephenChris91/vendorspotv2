// components/OrderConfirmation.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/context/cart/cart-provider";
import Link from "next/link";

const OrderConfirmation = () => {
  const { clearCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    // Clear the cart when the component is mounted
    clearCart();
  }, [clearCart]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Order Confirmed!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Thank you for your purchase. Your order has been successfully placed.
        </p>
        <Link href="/">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
