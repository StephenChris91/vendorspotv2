import DealsCountdown from "../deals-countdown";
import ProductList from "./product/product-list";
import SingleFeatureProduct from "./product/single-feature-product";
import { PiArrowRight } from "react-icons/pi";

const BestDeals = () => {
  return (
    <div className="small-wrapper w-full">
      <div className="flex flex-col sm:flex-row gap-3 mb-3">
        <div className="flex-1 flex items-center gap-3">
          <p className="font-bold">Best Deals</p>
          <div className="flex items-center gap-2">
            <p className="text-xs">Deals end in:</p>
            <DealsCountdown />
          </div>
        </div>
        <p className="flex items-center justify-end text-yellow-400 hover:text-yellow-500 cursor-pointer">
          Browse Featured Products
          <span className="ml-2">
            <PiArrowRight />
          </span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="md:w-1/3">
          <SingleFeatureProduct />
        </div>
        <div className="md:w-2/3">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
