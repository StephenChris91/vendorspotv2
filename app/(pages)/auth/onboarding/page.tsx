"use client";

import { FormEvent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { updateBasicInfo } from "@/store/slices/basicInfoSlice";
import { updateLogoInfo } from "@/store/slices/logoInfoSlice";
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

const INITIAL_DATA: shopType = {
  name: "",
  description: "",
  address: "",
  phone: "",
  email: "",
  logo: "",
  banner: "",
  slug: "",
  bankName: "",
  accountNo: 0,
  country: "",
  city: "",
  state: "",
  zip: "",
  phoneNumber: "",
  website: "",
};

function Onboarding() {
  const dispatch = useDispatch<AppDispatch>();
  const basicInfo = useSelector((state: RootState) => state.basicInfo);
  const logoInfo = useSelector((state: RootState) => state.logoInfo);
  const user = useCurrentUser();

  useEffect(() => {
    console.log({ basicInfo, logoInfo });
  }, [basicInfo, logoInfo]);

  function updateFields(fields: Partial<shopType>) {
    if ("name" in fields || "slug" in fields || "description" in fields) {
      dispatch(
        updateBasicInfo({
          ...fields,
          description: fields.description || "", // Ensure description is always a string
        })
      );
    }
    if ("logo" in fields) {
      dispatch(updateLogoInfo(fields));
    }
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <AddLogo
        userName={user?.firstname ?? ""}
        logo={logoInfo.logo}
        updateFields={updateFields}
      />,
      <AddBasicInfo
        name={basicInfo.name}
        slug={basicInfo.slug}
        description={basicInfo.description}
        updateFields={updateFields}
      />,
      <AddCoverImage banner={""} {...basicInfo} updateFields={updateFields} />,
      // <AddPaymentInfo {...basicInfo} updateFields={updateFields} />,
      // <AddShopAddress {...basicInfo} updateFields={updateFields} />,
      // <AddShopSettings {...basicInfo} updateFields={updateFields} />,
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
