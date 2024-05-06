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

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// import "react-phone-number-input/style.css";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState, useContext } from "react";
import { FormContext } from "@/app/context/FormContext/formcontext";

const AddShopSettings = () => {
  const [countries, setCountries] = useState([]);
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("AddShopAddress must be used within a FormProvider");
  }

  const { formData, updateFormData } = context;

  // const { updateFormData } = formContext;
  const formSchema = z.object({
    phoneNumber: z.string().min(1, {
      message: "Phone number is required.",
    }),
    website: z.string().min(2, {
      message: "website must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
      website: "",
    },
  });

  const getCountryOptions = () => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      const countriesData = response.data.map((country: any) => ({
        value: country.alpha2Code,
        label: `${country.name} (${country.callingCodes[0]})`,
        flag: country.flags.svg,
      }));
      setCountries(countriesData); // Set the state with the new countriesData
    });
  };

  const { control, watch } = form;
  const watchedPhoneNumber = watch("phoneNumber");
  const watchedWebsite = watch("website");

  useEffect(() => {
    updateFormData({
      ...formData,
      phoneNumber: watchedPhoneNumber,
      website: watchedWebsite,
    });
  }, [watchedPhoneNumber, watchedWebsite]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // updateFormData({ formData: values });
  }
  // const form = useForm()
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            {/* <FormLabel>Phone Number</FormLabel> */}
                            <FormControl>
                              <PhoneInput
                                country={"us"}
                                value={field.value}
                                onChange={field.onChange}
                                inputClass="p-6 rounded-sm w-full"
                                containerClass="w-full"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
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
                      <Input {...field} className="p-6 rounded-sm" />
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

export default AddShopSettings;
