"use client";

import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";
import { startTransition, useState } from "react";
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
import { NewPasswordSchema } from "@/app/(shop)/schemas";

import FormError from "@/components/form-response/form-error";
import Link from "next/link";
import FormSuccess from "@/components/form-response/form-success";
import { reset } from "@/actions/reset";
import CardWrapper from "@/components/auth/card-Wrapper";
import { useSearchParams } from "next/navigation";
import { NewPassword } from "@/actions/new-password";

export default function NewPasswordForm() {
  const [errorMsg, setErrorMsg] = useState<string | undefined>();
  const [formSuccess, setFormSuccess] = useState<string | undefined>();

  const { toast } = useToast();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof NewPasswordSchema>) {
    setErrorMsg("");
    setFormSuccess("");
    console.log(values);

    startTransition(() => {
      NewPassword(values).then((res: any) => {
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
        title: "Success ��",
        description: formSuccess,
      });
    }
  }
  return (
    <div className="w-[500px] mx-auto flex justify-center items-center">
      <CardWrapper title="Enter New Password">
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
                      className="w-full p-6 rounded-sm"
                      type="password"
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
