// Onboarding.tsx
"use client";

import { FormEvent } from "react";
import AddBasicInfo from "@/components/dasboard/tables/createshop/addBasicInfo";
import AddCoverImage from "@/components/dasboard/tables/createshop/addCoverImage";
import { AddLogo } from "@/components/dasboard/tables/createshop/addLogo";
import AddPaymentInfo from "@/components/dasboard/tables/createshop/addPaymentInfo";
import AddShopAddress from "@/components/dasboard/tables/createshop/addShopAddress";
import AddShopSettings from "@/components/dasboard/tables/createshop/addShopSettings";
import { useMultistepForm } from "@/lib/useMultistep";
import { shopType } from "@/app/types/types";
import { Button } from "@/components/ui/button";
import ProgressBar from "../../_authComponents/onboarding-progressbar";
import { useCurrentUser } from "@/lib/use-session-client";
import { useDispatch, useSelector } from "react-redux";
import { updateShopField } from "@/store/slices/shopSlice";
import { RootState } from "@/store/store";

function Onboarding() {
  const data = useSelector((state: RootState) => state.shop);
  const user = useCurrentUser();
  const dispatch = useDispatch();

  const updateFields = (fields: Partial<shopType>) => {
    for (const [key, value] of Object.entries(fields)) {
      dispatch(updateShopField({ field: key, value }));
    }
  };

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <AddLogo
        userName={user?.firstname ?? ""}
        logo={data.logo}
        updateFields={updateFields}
      />,
      <AddBasicInfo />,
      <AddCoverImage banner={data.banner} updateFields={updateFields} />,
      <AddPaymentInfo {...data} updateFields={updateFields} />,
      <AddShopAddress {...data} updateFields={updateFields} />,
      <AddShopSettings {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    console.log(e.target);
    alert("Successful Account Creation");
  }

  return (
    <div className="flex items-center justify-center w-full h-full bg-none relative border-none rounded-sm">
      <div className="w-full h-screen bg-yellow-400">
        <h1 className="text-7xl mx-auto text-center text-white mt-[40%]">
          Onboarding
        </h1>
      </div>

      <div className="w-full h-auto px-16">
        <div className="w-full h-auto">
          <ProgressBar
            currentStepIndex={currentStepIndex}
            stepsLength={steps.length}
          />
        </div>

        <form onSubmit={onSubmit}>
          {step}
          <div className="flex justify-end gap-2 mt-5 w-full h-12 bg-none border-none rounded-sm">
            {!isFirstStep && (
              <Button type="button" onClick={back}>
                Back
              </Button>
            )}
            <Button type="submit">{isLastStep ? "Finish" : "Next"}</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Onboarding;
