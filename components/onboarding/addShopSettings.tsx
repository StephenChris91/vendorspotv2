"use client";

import { Input } from "@/components/ui/input";
import Separator from "@/components/separator";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
} from "@/components/ui/form";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useEffect, useCallback } from "react";
import { shopSettingsSchema } from "@/app/schemas";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "@/store/store";
import debounce from "lodash.debounce";
import { updateShopField } from "@/store/slices/shopSlice";
import { useFormContext } from "@/app/context/FormContext/formcontext";

interface AddShopSettingsProps {
  phoneNumber: string;
  website: string;
  updateFormData: (
    data: Partial<{
      phoneNumber: string;
      website: string;
    }>
  ) => void;
}

const AddShopSettings: React.FC<AddShopSettingsProps> = ({
  phoneNumber,
  website,
  updateFormData,
}) => {
  const form = useForm<z.infer<typeof shopSettingsSchema>>({
    resolver: zodResolver(shopSettingsSchema),
    defaultValues: {
      phoneNumber,
      website,
    },
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
      <div className="w-full flex">
        <div className="px-2 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5">
          <h1 className="font-semibold mb-2 heading-color">Shop Settings</h1>
          <p className="text-sm text-gray-500">
            Add your shop settings information from here
          </p>
        </div>
        <div className="rounded bg-white p-5 shadow md:p-8 w-full sm:w-8/12 md:w-2/3">
          <Form {...form}>
            <form className="space-y-5">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <PhoneInput
                        country={"us"}
                        value={field.value}
                        onChange={(e) => {
                          field.onChange(e);
                          updateFormData({ phoneNumber: e });
                        }}
                        inputClass="p-6 rounded-sm w-full"
                        containerClass="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="p-6 rounded-sm"
                        value={field.value}
                        onChange={(e) => {
                          field.onChange(e);
                          updateFormData({ website: e.target.value });
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
      </div>
    </Separator>
  );
};

export default AddShopSettings;
