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
import { addPaymentSchema } from "@/app/schemas";

interface AddPaymentInfoProps {
  accountName: string;
  bankName: string;
  accountNo: string;
  updateFormData: (
    data: Partial<{
      accountName: string;
      bankName: string;
      accountNo: string;
    }>
  ) => void;
}

const AddPaymentInfo: React.FC<AddPaymentInfoProps> = ({
  accountName,
  bankName,
  accountNo,
  updateFormData,
}) => {
  const form = useForm<z.infer<typeof addPaymentSchema>>({
    resolver: zodResolver(addPaymentSchema),
    defaultValues: {
      accountName,
      bankName,
      accountNo,
    },
  });

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
            <form className="space-y-5">
              <FormField
                control={form.control}
                name="accountName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Holder Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="p-6"
                        // value={accountName}
                        onChange={(e) => {
                          field.onChange(e);
                          updateFormData({ accountName: e.target.value });
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bankName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bank Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="p-6"
                        // value={bankName}
                        onChange={(e) => {
                          field.onChange(e);
                          updateFormData({ bankName: e.target.value });
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="accountNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        id="number-input"
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        // value={accountNo}
                        onChange={(e) => {
                          field.onChange(e);
                          updateFormData({
                            accountNo: e.target.value,
                          });
                        }}
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
