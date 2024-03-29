"use client";

import AddBasicInfo from "@/components/dasboard/createshop/addBasicInfo";
import AddCoverImage from "@/components/dasboard/createshop/addCoverImage";
import AddLogo from "@/components/dasboard/createshop/addLogo";
import AddPaymentInfo from "@/components/dasboard/createshop/addPaymentInfo";
import AddShopAddress from "@/components/dasboard/createshop/addShopAddress";
import AddShopSettings from "@/components/dasboard/createshop/addShopSettings";
import Separator from "@/components/separator";
import { FormProvider } from "../FormContext/formcontext";
import { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import { FormContext } from "../FormContext/formcontext";

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

      <Button
        className="p-6 bg-green-500 text-white max-w-lg"
        onClick={onSubmit}
      >
        Save
      </Button>
      {/* <CreateShopPage /> */}
    </div>
  );
};

export default CreateShop;
