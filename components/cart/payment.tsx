"use client";

import { useCart } from "@/lib/context/cart/cart-provider";
import { usePaystackPayment } from "react-paystack";
import { useState } from "react";
import { ShippingDetails } from "@/app/(checkout)/checkout/page";

interface PaymentProps {
  onSuccess: () => void;
  shippingDetails: ShippingDetails;
}

const Payment: React.FC<PaymentProps> = ({ onSuccess, shippingDetails }) => {
  const { cart, clearCart } = useCart();
  const [email, setEmail] = useState(shippingDetails.email);
  const [loading, setLoading] = useState(false); // State for loading

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: totalAmount * 100, // Paystack uses kobo
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
  };

  const initializePayment = usePaystackPayment(config);

  const handlePayment = () => {
    setLoading(true); // Start loading
    initializePayment({
      onSuccess: () => {
        // Payment successful
        setLoading(false); // Stop loading
        onSuccess();
        clearCart();
      },
      onClose: () => {
        // Payment failed or closed
        setLoading(false); // Stop loading
        console.log("Payment failed or was closed");
      },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Payment
        </h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handlePayment}
          className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading} // Disable button when loading
        >
          {loading ? "Processing..." : `Pay $${totalAmount.toFixed(2)}`}
        </button>
      </div>
    </div>
  );
};

export default Payment;
