"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { useFormContext } from "@/app/context/FormContext/formcontext";
import { zodResolver } from "@hookform/resolvers/zod";
import Separator from "@/components/separator";
import { shopAddressSchema } from "@/app/schemas";
import debounce from "lodash.debounce";

interface AddShopAddressProps {
  country: string;
  state: string;
  city: string;
  zip: string;
  address: string;
  updateFormData: (
    data: Partial<{
      country: string;
      state: string;
      city: string;
      zip: string;
      address: string;
    }>
  ) => void;
}

const AddShopAddress: React.FC<AddShopAddressProps> = ({
  country,
  state,
  city,
  zip,
  address,
  updateFormData,
}) => {
  const form = useForm<z.infer<typeof shopAddressSchema>>({
    resolver: zodResolver(shopAddressSchema),
    defaultValues: { country, state, city, zip, address },
  });

  // const { control, watch } = form;
  // const watchedFields = watch();

  // const debouncedUpdateFields = useCallback(
  //   debounce((data: Partial<typeof formData>) => {
  //     updateFormData(data);
  //   }, 500),
  //   [updateFormData]
  // );

  // useEffect(() => {
  //   debouncedUpdateFields(watchedFields);
  // }, [watchedFields, debouncedUpdateFields]);

  return (
    <Separator>
      <div className="px-2 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5">
        <h1 className="font-semibold mb-2 heading-color">Shop Address</h1>
        <p className="text-sm text-gray-500">
          Add your shop address information from here
        </p>
      </div>
      <div className="rounded bg-white p-5 shadow md:p-8 w-full sm:w-8/12 md:w-2/3">
        <Form {...form}>
          <form className="space-y-5">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="p-6"
                      onChange={(e) => {
                        field.onChange(e);
                        updateFormData({ country: e.target.value });
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="p-6"
                      onChange={(e) => {
                        field.onChange(e);
                        updateFormData({ state: e.target.value });
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="p-6"
                      onChange={(e) => {
                        field.onChange(e);
                        updateFormData({ city: e.target.value });
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zip"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ZIP</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="p-6"
                      onChange={(e) => {
                        field.onChange(e);
                        updateFormData({ zip: e.target.value });
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street Address</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="p-6"
                      onChange={(e) => {
                        field.onChange(e);
                        updateFormData({ address: e.target.value });
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </Separator>
  );
};

export default AddShopAddress;
