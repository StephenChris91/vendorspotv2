import { AlertOctagon, LucideIcon } from "lucide-react";

interface FormErrorProps {
  message?: string | undefined;
  Icon: React.ReactNode;
}

const FormError = ({ message, Icon }: FormErrorProps) => {
  return (
    <div className="mt-5 bg-red-200 w-lg p-4 rounded-sm text-red-600 flex justify-center gap-4 items-center mx-auto">
      {Icon}
      <p>{message}</p>
    </div>
  );
};

export default FormError;
