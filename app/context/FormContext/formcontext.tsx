import { createContext, useState } from "react";
import { ReactNode } from "react";

// Define a generic type for form data
type FormData = Record<string, any>;

// Define the shape of the form context
interface FormContextType {
  formData: FormData;
  updateFormData: (newData: Partial<FormData>) => void;
}

// Create the initial form data object
const initialFormData: FormData = {};

// Create the form context
const FormContext = createContext<FormContextType | null>(null);

// Define the form provider component
const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentFormData, setCurrentFormData] =
    useState<FormData>(initialFormData);

  // Function to update form data
  const updateFormData = (newData: Partial<FormData>) => {
    setCurrentFormData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <FormContext.Provider value={{ formData: currentFormData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
