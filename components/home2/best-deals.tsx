import DealsCountdown from "../deals-countdown";
import ProductList from "./product/product-list";
import SingleFeatureProduct from "./product/single-feature-product";
import { PiArrowRight } from "react-icons/pi";

const BestDeals = () => {
  return (
    <div className="small-wrapper w-full">
      <div className="flex gap-0 mb-3">
        <div className="w-full items-center mx-auto flex gap-3">
          <p className="font-bold">Best Deals</p>
          <div className="flex justify-between items-center gap-2">
            <p className="w-full text-xs">Deals end in:</p>
            <DealsCountdown />
          </div>
        </div>
        <p className="flex justify-end items-end mx-auto gap-4 w-full space-x-3 text-yellow-400 hover:text-yellow-500 cursor-pointer">
          Browse Featured Products{" "}
          <span>
            <PiArrowRight />
          </span>
        </p>
      </div>
      <div className="flex gap-0 mb-12">
        <SingleFeatureProduct />
        <ProductList />
      </div>
    </div>
  );
};

export default BestDeals;
