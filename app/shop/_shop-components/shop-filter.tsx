import { Separator } from "@/components/ui/separator";
import { CategoryDisplay } from "./shop-filter/categories";
// import PriceRange from "./shop-filter/PriceRange";

const ShopFilter = () => {
  return (
    <section className="bg-red w-96 h-auto p-8 flex flex-col gap-2">
      <CategoryDisplay />
      <Separator />
      {/* <PriceRange /> */}
      <Separator />
    </section>
  );
};

export default ShopFilter;
