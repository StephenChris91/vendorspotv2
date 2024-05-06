"use client";

import { newVerification } from "@/actions/new-verification";
import CardWrapper from "@/components/auth/card-Wrapper";
import FormError from "@/components/form-response/form-error";
import FormSuccess from "@/components/form-response/form-success";
import { AlertOctagonIcon, AlertTriangle, CheckCircleIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const NewVerificationForm = () => {
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing Token");
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch((error) => {
        setError("Something Went Wrong!");
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);
  return (
    <div className="flex mx-auto justify-center items-center">
      <CardWrapper
        title="Verifying your account"
        backButtonLabel="Go Back"
        backButtonLink="/"
      >
        <div className="flex flex-col items-center justify-center w-full h-full text-center mb-3">
          <p>
            Your account is being verified, please wait while we confirm your
            verification. Make sure you click the link we sent to your email
          </p>
        </div>
        {!success && !error && <BeatLoader color="#3364FF" size={15} />}
        {error && <FormError Icon={<AlertOctagonIcon />} message={error} />}
        {success && (
          <FormSuccess Icon={<CheckCircleIcon />} message={success} />
        )}
      </CardWrapper>
    </div>
  );
};

export default NewVerificationForm;
