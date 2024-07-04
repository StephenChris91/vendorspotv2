import { useRouter } from "next/navigation";
import CartTable from "./cart-table/cart-table";
import CartSummary from "./cart-summary";
import CheckOutCoupons from "./checkout-coupons";

const CartPage = () => {
  const router = useRouter();

  const handleProceedToCheckout = () => {
    router.push("/checkout");
  };

  return (
    <>
      <div className="w-full bg-white mb-8">
        <div className="flex space-x-3 justify-between items-center mx-auto p-7 border-b-2 pb-8 rounded-md">
          <h1>Cart</h1>
        </div>
      </div>
      <div className="flex justify-between items-start mx-auto gap-3 w-full h-auto">
        <div className="w-3/4">
          <CartTable />
        </div>
        <div className="w-1/4 flex flex-col">
          {/* <CartSummary onProceed={handleProceedToCheckout} /> */}
          <CheckOutCoupons />
        </div>
      </div>
    </>
  );
};

export default CartPage;
