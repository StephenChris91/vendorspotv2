import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";

import { FormContext } from "@/app/context/FormContext/formcontext";
import { zodResolver } from "@hookform/resolvers/zod";
import Separator from "@/components/separator";

const formSchema = z.object({
  country: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  city: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  state: z.string().min(10, {
    message: "Please provide your bank name.",
  }),
  zip: z
    .string()
    .min(2, {
      message: "Provided accound number is not a valid account number.",
    })
    .max(6, {
      message: "Provided account number exceeds the maximum length.",
    }),
  address: z.string().min(2, {
    message: "Please provide your physical address.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const AddShopAddress = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("AddShopAddress must be used within a FormProvider");
  }

  const { formData, updateFormData } = context;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: "",
      city: "",
      state: "",
      zip: "",
      address: "",
    },
  });

  const { control, watch } = form;
  const watchedCountry = watch("country");
  const watchedCity = watch("city");
  const watchedState = watch("state");
  const watchedZip = watch("zip");
  const watchedAddress = watch("address");

  useEffect(() => {
    updateFormData({
      ...formData,
      country: watchedCountry,
      city: watchedCity,
      state: watchedState,
      zip: watchedZip,
      address: watchedAddress,
    });
  }, [watchedCountry, watchedCity, watchedState, watchedZip, watchedAddress]);

  function onSubmit(values: FormValues) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input {...field} className="p-6" />
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
                    <Input {...field} className="p-6" />
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
                    <Input {...field} className="p-6" />
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
                    <Input {...field} className="p-6" />
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
