"use client";

import { FormProvider } from "../../../../context/FormContext/formcontext";
import { useContext } from "react";
// import { FormContext } from "../../../../context/FormContext/formcontext";
import CreateShop from "./createshop";

const Shop = () => {
  // const onSubmit = () => {
  //   console.log(formData);
  // };
  return (
    <FormProvider>
      <CreateShop />
    </FormProvider>
  );
};

export default Shop;
