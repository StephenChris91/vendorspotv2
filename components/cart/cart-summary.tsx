"use client";

import { useCart } from "@/lib/context/cart/cart-context";

const CartSummary: React.FC = () => {
  const { cart } = useCart();

  const totalQuantity = cart.reduce(
    (sum: any, item: any) => sum + item.quantity,
    0
  );
  const totalPrice = cart.reduce(
    (sum: any, item: any) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Summary</h2>
      <div className="flex justify-between">
        <span>Total Quantity:</span>
        <span>{totalQuantity}</span>
      </div>
      <div className="flex justify-between mt-2">
        <span>Total Price:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <button className="bg-blue-500 text-white mt-4 p-2 rounded w-full">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
