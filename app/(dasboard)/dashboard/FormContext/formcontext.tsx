import { createContext, useState } from "react";
import { ReactNode } from "react";

interface FormDataType<T> {
  formData: T;
}

interface FormContextType<T> {
  formData: FormDataType<T>;
  updateFormData: (newData: FormDataType<T>) => void;
}

const FormContext = createContext<FormContextType<any> | null>(null);

const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentFormData, setCurrentFormData] = useState<FormDataType<any>>({
    formData: {},
  });

  const updateFormData = (newData: FormDataType<any>) => {
    setCurrentFormData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <FormContext.Provider value={{ formData: currentFormData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };