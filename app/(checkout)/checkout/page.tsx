"use client";

import CartSummary from "@/components/cart/cart-summary";
import OrderConfirmation from "@/components/cart/order-confirmation";
import Payment from "@/components/cart/payment";
import ShippingForm from "@/components/cart/shipping-form";
import { useState } from "react";
import { useCart } from "@/lib/context/cart/cart-provider";

// Define ShippingDetails type
export type ShippingDetails = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
};

const Checkout = () => {
  const [step, setStep] = useState<number>(1);
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const { cart } = useCart();

  const handleShippingSubmit = (details: ShippingDetails) => {
    setShippingDetails(details);
    setStep(3);
  };

  const handlePaymentSuccess = () => {
    setStep(4);
  };

  if (cart.length === 0 && step !== 4) {
    return (
      <div className="text-center mt-10 text-lg text-gray-600">
        Your cart is empty. Please add items before checking out.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Checkout Process
        </h2>
        {step === 1 && <CartSummary onProceed={() => setStep(2)} />}
        {step === 2 && <ShippingForm onSubmit={handleShippingSubmit} />}
        {step === 3 && (
          <Payment
            onSuccess={handlePaymentSuccess}
            shippingDetails={shippingDetails}
          />
        )}
        {step === 4 && <OrderConfirmation />}
        {step > 1 && step < 4 && (
          <button
            onClick={() => setStep(step - 1)}
            className="bg-gray-500 text-white px-4 py-2 rounded mt-4 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Back
          </button>
        )}
      </div>
    </div>
  );
};

export default Checkout;
