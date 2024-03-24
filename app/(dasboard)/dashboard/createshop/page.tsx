"use client";

import { FormProvider } from "../FormContext/formcontext";
import CreateShop from "./createShop";
import { useContext } from "react";
import { FormContext } from "../FormContext/formcontext";

const Shop = () => {
  const onSubmit = () => {
    console.log(formData);
  };
  return (
    <FormProvider>
      <CreateShop />
    </FormProvider>
  );
};

export default Shop;
