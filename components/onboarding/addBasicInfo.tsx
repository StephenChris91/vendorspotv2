// components/dasboard/tables/createshop/AddBasicInfo.tsx
import Separator from "@/components/separator";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { shopSchema } from "@/app/schemas";

interface AddBasicInfoProps {
  shopname: string;
  slug: string;
  description: string;
  updateFormData: (
    data: Partial<{
      shopname: string;
      description: string;
      slug: string;
    }>
  ) => void;
}

const AddBasicInfo: React.FC<AddBasicInfoProps> = ({
  shopname,
  slug,
  description,
  updateFormData,
}) => {
  const form = useForm<z.infer<typeof shopSchema>>({
    resolver: zodResolver(shopSchema),
    defaultValues: { shopname, slug, description: description ?? "" },
  });

  return (
    <Separator>
      <div className="w-full flex">
        <div className="px-2 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5">
          <h1 className="font-semibold mb-2 heading-color">Add Basic Info</h1>
          <p className="text-sm text-gray-500">
            Add your business information from here
          </p>
        </div>
        <div className="rounded bg-white p-5 shadow md:p-8 w-full sm:w-8/12 md:w-2/3">
          <Form {...form}>
            <form className="space-y-5">
              <FormField
                control={form.control}
                name="shopname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Shop Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your business name..."
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          updateFormData({ shopname: e.target.value });
                        }}
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
                        onChange={(e) => {
                          field.onChange(e);
                          updateFormData({ slug: e.target.value });
                        }}
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
                        {...field}
                        onChange={(e: { target: { value: any } }) => {
                          field.onChange(e);
                          updateFormData({ description: e.target.value });
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

export default AddBasicInfo;
