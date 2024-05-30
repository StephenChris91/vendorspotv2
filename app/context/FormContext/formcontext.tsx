"use client";

import { createContext, useContext, useState } from "react";

interface FormContextType {
  formData: {
    shopname: string;
    description: string;
    address: string;
    logo: string;
    banner: string;
    slug: string;
    bankName: string;
    accountNo: string;
    country: string;
    city: string;
    state: string;
    zip: string;
    phoneNumber: string;
    website: string;
    accountName: string;
    // Add other fields as needed
  };
  updateFormData: (data: Partial<FormContextType["formData"]>) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormContextType["formData"]>({
    shopname: "",
    description: "",
    address: "",
    logo: "",
    banner: "",
    slug: "",
    bankName: "",
    accountNo: "",
    country: "",
    city: "",
    state: "",
    zip: "",
    phoneNumber: "",
    website: "",
    accountName: "",
  });

  const updateFormData = (data: Partial<FormContextType["formData"]>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    console.log("Form data updated:", data);
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
