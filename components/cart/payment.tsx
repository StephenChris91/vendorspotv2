"use client";

import { useCart } from "@/lib/context/cart/cart-provider";
import { usePaystackPayment } from "react-paystack";
import { useState } from "react";
import { ShippingDetails } from "@/app/(checkout)/checkout/page";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useCurrentUser } from "@/lib/use-session-client";

interface PaymentProps {
  onSuccess: () => void;
  shippingDetails: ShippingDetails;
}

const Payment: React.FC<PaymentProps> = ({ onSuccess, shippingDetails }) => {
  const { cart, clearCart } = useCart();
  const [details, setDetails] = useState(shippingDetails);
  const [email, setEmail] = useState(shippingDetails.email);
  const [loading, setLoading] = useState(false); // State for loading
  const [paymentMethod, setPaymentMethod] = useState("paystack"); // Default payment method
  const user = useCurrentUser();

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const paystackConfig = {
    reference: new Date().getTime().toString(),
    email: details.email,
    amount: totalAmount * 100, // Paystack uses kobo
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
  };

  const flutterwaveConfig = {
    // Define Flutterwave configuration
    public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY!,
    tx_ref: new Date().getTime().toString(),
    amount: totalAmount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: details.email,
      phone_number: "",
      name: details.name,
    },
    customizations: {
      title: "Vendorspot",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const initializePaystackPayment = usePaystackPayment(paystackConfig);
  const handleFlutterPayment = useFlutterwave(flutterwaveConfig);

  const handlePayment = () => {
    setLoading(true); // Start loading
    if (paymentMethod === "paystack") {
      initializePaystackPayment({
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
    } else if (paymentMethod === "flutterwave") {
      // Initialize Flutterwave payment
      handleFlutterPayment({
        callback: (response) => {
          console.log(response);
          onSuccess(); // Payment successful
          closePaymentModal();
          clearCart();
        },
        onClose: () => {
          onSuccess();
        },
      });
    } else if (paymentMethod === "bankTransfer") {
      // Handle Bank Transfer
    }
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
          value={details.email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Payment Method
          </label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="paystack">Paystack</option>
            <option value="flutterwave">Flutterwave</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
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
