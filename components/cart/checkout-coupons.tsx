"use client";

import { useState } from "react";

const CheckOutCoupons = () => {
  const [coupon, setCoupon] = useState("");

  const handleApplyCoupon = () => {
    // Logic to apply the coupon
    console.log(`Applying coupon: ${coupon}`);
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow mt-4">
      <h2 className="text-xl font-bold mb-4">Apply Coupon</h2>
      <div className="flex space-x-2">
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter coupon code"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleApplyCoupon}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default CheckOutCoupons;
