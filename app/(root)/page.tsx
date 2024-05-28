import Banners from "@/components/home2/banners";
import BestDeals from "@/components/home2/best-deals";
import MainBanner from "@/components/home2/main-banner";
import ShopVendors from "@/components/home2/shop-vendors";
import { persistor } from "@/store/store";
import ReactDOM from "react-dom";
const Page = () => {
  return (
    <>
      <MainBanner />
      <BestDeals />
      <ShopVendors />
      <Banners />
    </>
  );
};

export default Page;
