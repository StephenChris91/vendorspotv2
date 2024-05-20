import ShopFilter from "./_shop-components/shop-filter";
import ShopProductsDisplay from "./_shop-components/shop-products-display";

const Page = () => {
  return (
    <section className="flex justify-between items-center mx-auto gap-1 w-full m-10">
      <ShopFilter />
      <ShopProductsDisplay />
    </section>
  );
};

export default Page;
