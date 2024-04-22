import { ProductCard } from "@/components/home2/product/product-card";
import PS from "@/public/shop/ps.webp";
import Image from "next/image";

const SingleFeatureProduct = () => {
  const title = "Single Feature Product";
  const description =
    "Single Feature Product Description with more details than the others";
  const image = "/public/shop/ps.png";
  return (
    <ProductCard
      title={title}
      description={description}
      single={true}
      hasButton={true}
      image={PS}
    />
  );
};

export default SingleFeatureProduct;
