"use client";

import { useCart } from "@/lib/context/cart/cart-provider";
import { useRouter } from "next/navigation";
import CartPage from "./cart-page";

interface CartSummaryProps {
  onProceed: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ onProceed }) => {
  const { cart } = useCart();
  const router = useRouter();

  const totalQuantity = cart.reduce(
    (sum: number, item: any) => sum + item.quantity,
    0
  );
  const totalPrice = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      {/* <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Total Items:</span>
        <span>{totalQuantity}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span>Total Price:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div> */}
      <CartPage />
      <button
        onClick={onProceed}
        className="bg-blue-500 text-white mt-4 p-2 rounded w-md"
      >
        Proceed to Shipping
      </button>
    </div>
  );
};

export default CartSummary;
