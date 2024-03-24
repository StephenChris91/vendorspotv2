"use client";

import { Input } from "@/components/ui/input";
import Separator from "@/components/separator";
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

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useContext, useEffect } from "react";
import {
  FormContext,
  FormProvider,
} from "@/app/(dasboard)/dashboard/FormContext/formcontext";

const AddPaymentInfo = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("AddShopAddress must be used within a FormProvider");
  }

  const { formData, updateFormData } = context;

  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    bank: z.string().min(10, {
      message: "Please provide your bank name.",
    }),
    number: z
      .number()
      .min(2, {
        message: "Provided accound number is not a valid account number.",
      })
      .max(12, {
        message: "Provided account number exceeds the maximum length.",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      bank: "",
      number: 0,
    },
  });

  const { control, watch } = form;
  const watchedName = watch("name");
  const watchedEmail = watch("email");
  const watchedBank = watch("bank");
  const watchedNumber = watch("number");

  useEffect(() => {
    updateFormData({
      ...formData,
      name: watchedName,
      email: watchedEmail,
      bank: watchedBank,
      number: watchedNumber,
    });
  }, [watchedName, watchedEmail, watchedBank, watchedNumber]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  // const form = useForm()
  return (
    <Separator>
      <div className="w-full flex">
        <div className="px-2 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5">
          <h1 className="font-semibold mb-2 heading-color">Payment Info</h1>
          <p className="text-sm text-gray-500">
            Add your payment information from here
          </p>
        </div>
        <div className="rounded bg-white p-5 shadow md:p-8 w-full sm:w-8/12 md:w-2/3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Holder Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="p-6" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Holder Email</FormLabel>
                    <FormControl>
                      <Input {...field} className="p-6" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bank"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bank Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="p-6" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        id="number-input"
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <Button type="submit">Submit</Button> */}
            </form>
          </Form>
        </div>
      </div>
    </Separator>
  );
};

export default AddPaymentInfo;
