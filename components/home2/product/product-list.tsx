import { ProductCard } from "./product-card";
import monitor from "@/public/shop/Monitor-3.webp";
const ProductList = () => {
  return (
    <div className="grid grid-cols-4 gap-0">
      {Array.from({ length: 8 }).map((_, i) => (
        <div className="">
          <ProductCard title="Acme Circles T-Shirt" image={monitor} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
