import AddBasicInfo from "@/components/dasboard/createshop/addBasicInfo";
import AddCoverImage from "@/components/dasboard/createshop/addCoverImage";
import AddLogo from "@/components/dasboard/createshop/addLogo";
import AddPaymentInfo from "@/components/dasboard/createshop/addPaymentInfo";
import AddShopAddress from "@/components/dasboard/createshop/addShopAddress";
import AddShopSettings from "@/components/dasboard/createshop/addShopSettings";
import Separator from "@/components/separator";

const CreateShop = () => {
  return (
    <div className="px-20 relative mt-32">
      <Separator>
        <h1 className="font-semibold">Create Shop</h1>
      </Separator>
      <AddLogo />
      <AddCoverImage />
      <AddBasicInfo />
      <AddPaymentInfo />
      <AddShopAddress />
      <AddShopSettings />
    </div>
  );
};

export default CreateShop;
