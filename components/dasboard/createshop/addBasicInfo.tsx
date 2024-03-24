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
import { Textarea } from "@/components/ui/textarea";
import { useContext, useEffect } from "react";
import { FormContext } from "@/app/(dasboard)/dashboard/FormContext/formcontext";

const AddBasicInfo = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("AddShopAddress must be used within a FormProvider");
  }

  const { formData, updateFormData } = context;

  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    slug: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    description: z
      .string()
      .min(10, {
        message: "Bio must be at least 10 characters.",
      })
      .max(160, {
        message: "Bio must not be longer than 30 characters.",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      slug: "",
      description: "",
    },
  });

  const { control, watch } = form;
  const watchedName = watch("name");
  const watchedSlug = watch("slug");
  const watchedDesc = watch("description");

  useEffect(() => {
    updateFormData({
      ...formData,
      name: watchedName,
      slug: watchedSlug,
      description: watchedDesc,
    });
  }, [watchedName, watchedSlug, watchedDesc]);

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
          <h1 className="font-semibold mb-2 heading-color">Basic Info</h1>
          <p className="text-sm text-gray-500">
            Add some basic info about your shop from here
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
                    <FormLabel>Shop Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your business name..."
                        {...field}
                        className="p-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your tagline</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Set a tagline for your business"
                        {...field}
                        className="p-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a little bit about your business"
                        className="resize p-2 h-32 w-full rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#266235] focus:border-transparent"
                        {...field}
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

export default AddBasicInfo;
