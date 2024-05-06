import { CheckCircleIcon } from "lucide-react";

interface FormSuccessProps {
  message?: string | undefined;
  Icon: React.ReactNode;
}

const FormSuccess = ({ message, Icon }: FormSuccessProps) => {
  return (
    <div className="bg-green-200 w-lg p-4 rounded-sm text-green-600 flex justify-center gap-4 items-center mx-auto">
      {Icon}
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
