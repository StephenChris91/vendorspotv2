"use client";

import { useState } from "react";
import { AddLogo } from "@/components/dasboard/tables/createshop/addLogo";
import AddBasicInfo from "@/components/dasboard/tables/createshop/addBasicInfo";
import AddCoverImage from "@/components/dasboard/tables/createshop/addCoverImage";
import AddPaymentInfo from "@/components/dasboard/tables/createshop/addPaymentInfo";
import AddShopAddress from "@/components/dasboard/tables/createshop/addShopAddress";
import AddShopSettings from "@/components/dasboard/tables/createshop/addShopSettings";
import { Button } from "@/components/ui/button";
import { useFormContext } from "@/app/context/FormContext/formcontext";
import { useCurrentUser } from "@/lib/use-session-client";
import { createShop } from "@/actions/createshop";
import { useToast } from "@/components/ui/use-toast";

const steps = [
  { component: AddLogo, label: "Shop Name" },
  { component: AddBasicInfo, label: "Shop Details" },
  { component: AddCoverImage, label: "Cover Image" },
  { component: AddPaymentInfo, label: "Payment Info" },
  { component: AddShopAddress, label: "Shop Address" },
  { component: AddShopSettings, label: "Shop Settings" },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { formData, updateFormData } = useFormContext();
  const user = useCurrentUser();
  const { toast } = useToast();
  const StepComponent = steps[currentStep].component;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = async () => {
    try {
      // const plainFormData = JSON.parse(JSON.stringify(formData));
      const addshop = await createShop(formData);
      if (addshop.status === "success") {
        // alert("Successfully created shop");
        updateFormData({});
        toast({
          variant: "default",
          title: "You Successfully created a shop! 😄",
          description: "",
          duration: 9000,
        });
        window.location.href = "/";
      } else {
        alert(addshop.error || addshop.message || "An error occurred");
      }
      console.log("Submitted data:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="multi-step-form">
      <div className="step-content">
        <StepComponent
          userName={user?.firstname || ""}
          {...formData}
          updateFormData={updateFormData}
        />
      </div>

      <div className="step-actions">
        <Button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="mr-2"
        >
          Previous
        </Button>
        {currentStep === steps.length - 1 ? (
          <Button onClick={handleFinish}>Finish</Button>
        ) : (
          <Button onClick={handleNext}>Next</Button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
