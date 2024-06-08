import { PaystackConsumer } from "react-paystack";
import { Button } from "@/components/ui/button";

const config = {
  reference: new Date().getTime().toString(),
  email: "user@example.com",
  amount: 200000, // Amount is in the country's lowest currency. E.g Kobo, so 200000 kobo = N2000
  publicKey: "pk_test_c5b0e671f1bfc942f5a463e3b8e07b043b3f529c",
};

// you can call this function anything
const handleSuccess = (
  reference: any,
  setPaymentProcessed: (status: boolean) => void
) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
  setPaymentProcessed(true);
  alert("Paystack Payment Successful");
};

// you can call this function anything
const handleClose = () => {
  // implementation for whatever you want to do when the Paystack dialog closed.
  console.log("closed");
};

export function ProcessPayment({
  setPaymentProcessed,
}: {
  setPaymentProcessed: (status: boolean) => void;
}) {
  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: (reference: any) =>
      handleSuccess(reference, setPaymentProcessed),
    onClose: handleClose,
  };

  return (
    <div className="App">
      <Button onClick={() => alert("Payment processing...")}>
        Process Payment
      </Button>
    </div>
  );
}
