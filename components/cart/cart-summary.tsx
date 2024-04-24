import { Button } from "../ui/button";

const CartSummary = () => {
  return (
    <div className="border p-3">
      <h5>Card Totals</h5>
      <div className="flex flex-col gap-2 border-b-2 pb-3 mb-3">
        <div className="flex justify-between items-center mx-auto w-full">
          <p>Test</p>
          <p>Test</p>
        </div>
        <div className="flex justify-between items-center mx-auto w-full">
          <p>Test</p>
          <p>Test</p>
        </div>
        <div className="flex justify-between items-center mx-auto w-full">
          <p>Test</p>
          <p>Test</p>
        </div>
        <div className="flex justify-between items-center mx-auto w-full">
          <p>Test</p>
          <p>Test</p>
        </div>
      </div>
      <div className="flex justify-between items-center mx-auto w-full mb-3">
        <p>Test</p>
        <p>Test</p>
      </div>
      <Button className="rounded-none bg-yellow-400 shadow-none hover:text-white p-3 text-black w-full ">
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default CartSummary;
