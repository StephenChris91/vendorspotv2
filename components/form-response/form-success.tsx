import { CheckCircleIcon } from "lucide-react";

interface FormSuccessProps {
  message?: string | undefined;
  Icon: React.ReactNode;
}

const FormSuccess = ({ message, Icon }: FormSuccessProps) => {
  return (
    <div className="bg-green-200 w-full p-2 rounded-sm text-green-600 flex justify-center mt-2 gap-4 items-center mx-auto">
      {Icon}
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
