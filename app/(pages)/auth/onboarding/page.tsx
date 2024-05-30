import { FormProvider } from "@/app/context/FormContext/formcontext";
import MultiStepForm from "@/lib/useMultistep";

const Onboarding = () => {
  return (
    <FormProvider>
      <MultiStepForm />
    </FormProvider>
  );
};

export default Onboarding;
