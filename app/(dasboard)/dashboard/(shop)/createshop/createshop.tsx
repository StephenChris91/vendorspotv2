"use client";

import AddBasicInfo from "@/components/dasboard/tables/createshop/addBasicInfo";
import AddCoverImage from "@/components/dasboard/tables/createshop/addCoverImage";
import AddLogo from "@/components/dasboard/tables/createshop/addLogo";
import AddPaymentInfo from "@/components/dasboard/tables/createshop/addPaymentInfo";
import AddShopAddress from "@/components/dasboard/tables/createshop/addShopAddress";
import AddShopSettings from "@/components/dasboard/tables/createshop/addShopSettings";
import Separator from "@/components/separator";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { FormContext } from "../../../../context/FormContext/formcontext";

const CreateShop = () => {
  const formContext = useContext(FormContext);

  if (!formContext) {
    throw new Error("CreateShop must be used within a FormProvider");
  }

  const { formData, updateFormData } = formContext;

  const onSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="px-20 relative mt-32 mb-20">
      <Separator>
        <h1 className="font-semibold">Create Shop</h1>
      </Separator>
      <AddLogo />
      <AddCoverImage />
      <AddBasicInfo />
      <AddPaymentInfo />
      <AddShopAddress />
      <AddShopSettings />

      <div className="sticky bottom-0 -mx-5 bg-gray-100/10 py-3 px-5 backdrop-blur text-end md:py-5 lg:-mx-8 lg:px-8 z-10">
        <div className="text-end">
          <button
            data-variant="normal"
            className=" bg-green-600 text-white inline-flex items-center justify-center flex-shrink-0 font-semibold rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 bg-accent text-light border border-transparent hover:bg-accent-hover px-5 py-0 h-12 text-sm md:text-base"
          >
            Submit
          </button>
        </div>
      </div>
      {/* <CreateShopPage /> */}
    </div>
  );
};

export default CreateShop;
