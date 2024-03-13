import SaleHistory from "./order-processing/sale-history";
import PopularProducts from "./popularProducts";

const OrderHistory = () => {
  return (
    <div className="flex justify-between items-center mx-auto w-full">
      <SaleHistory />
      <PopularProducts />
    </div>
  );
};

export default OrderHistory;
