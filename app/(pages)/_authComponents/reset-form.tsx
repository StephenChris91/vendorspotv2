"use client";

import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";
import { SyncLoader } from "react-spinners";
import { startTransition, useState } from "react";
import { useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast, useToast } from "@/components/ui/use-toast";
import { ResetSchema } from "@/app/schemas";

import FormError from "@/components/form-response/form-error";
import Link from "next/link";
import FormSuccess from "@/components/form-response/form-success";
import { reset } from "@/actions/reset";
import CardWrapper from "@/components/auth/card-Wrapper";

export default function ResetPasswordForm() {
  const [errorMsg, setErrorMsg] = useState<string | undefined>();
  const [formSuccess, setFormSuccess] = useState<string | undefined>();

  const { toast } = useToast();

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof ResetSchema>) {
    setErrorMsg("");
    setFormSuccess("");
    console.log(values);

    startTransition(() => {
      reset(values).then((res: any) => {
        if (res?.error) {
          setErrorMsg(res?.error || "");
        } else {
          setFormSuccess(res?.success || "");
        }
      });
    });

    if (errorMsg) {
      toast({
        variant: "destructive",
        title: "Error 😞",
        description: errorMsg,
      });
    } else {
      toast({
        variant: "default",
        title: "Success",
        description: formSuccess,
      });
    }
  }
  return (
    <div className="w-[500px] mx-auto flex justify-center items-center">
      <CardWrapper title="Reset Password">
        {/* <h4 className="text-center font-normal mb-2">Reset your password</h4> */}
        <p className="text-gray-500 text-center mb-2">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 min-w-full"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Email</FormLabel> */}
                  <FormControl>
                    <Input
                      placeholder="Enter your email address..."
                      {...field}
                      className="w-full p-6 rounded-sm bg-white "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full rounded-sm p-6 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Submit
            </Button>
          </form>
        </Form>
        {errorMsg && <FormError message={errorMsg} Icon={<FiAlertCircle />} />}
        {formSuccess && (
          <FormSuccess message={formSuccess} Icon={<FiCheckCircle />} />
        )}
      </CardWrapper>
    </div>
  );
}
