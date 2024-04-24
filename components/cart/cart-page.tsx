import CartSummary from "./cart-summary";
import CartTable from "./cart-table/cart-table";
import CheckOutCoupons from "./checkout-coupons";

const CartPage = () => {
  return (
    <>
      <div className="w-full bg-white mb-8">
        <div className="flex space-x-3 justify-between items-center mx-auto p-7 border-b-2 pb-8 rounded-md">
          <h1>Cart</h1>
          {/* <div className="flex space-x-4">
            <Input
              placeholder="Filter orders by status..."
              value={
                (table.getColumn("status")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("status")?.setFilterValue(event.target.value)
              }
              className="max-w-lg p-3 rounded-sm shadow-none"
            />
            <Input
              placeholder="Filter orders by status..."
              value={
                (table.getColumn("status")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("status")?.setFilterValue(event.target.value)
              }
              className="max-w-lg p-3 rounded-sm shadow-none"
            />
          </div> */}
        </div>
      </div>
      <div className="flex justify-between items-center mx-auto gap-3 w-full h-auto">
        <div className="w-3/4">
          <CartTable />
        </div>
        <div className="w-1/4 flex flex-col">
          <CartSummary />
          <CheckOutCoupons />
        </div>
      </div>
    </>
  );
};

export default CartPage;
