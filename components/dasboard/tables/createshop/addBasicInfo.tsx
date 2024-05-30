// components/dasboard/tables/createshop/AddBasicInfo.tsx

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
  );
};

export default AddBasicInfo;
