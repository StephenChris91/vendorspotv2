import ProductList from "./product/product-list";
import SingleFeatureProduct from "./product/single-feature-product";

const BestDeals = () => {
  return (
    <div className="small-wrapper w-full flex gap-0 mb-5">
      <SingleFeatureProduct />
      <ProductList />
    </div>
  );
};

export default BestDeals;
