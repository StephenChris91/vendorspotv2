// AddBasicInfo.tsx
"use client";

import { Input } from "@/components/ui/input";
import Separator from "@/components/separator";
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
import { useEffect } from "react";
import { createShopSchema } from "@/app/schemas";

type AddBasicInfoType = {
  name: string;
  slug: string;
  description: string;
};

type AddBasicInfoProps = AddBasicInfoType & {
  updateFields: (fields: Partial<AddBasicInfoType>) => void;
};

const AddBasicInfo = ({
  name,
  slug,
  description,
  updateFields,
}: AddBasicInfoProps) => {
  const form = useForm<z.infer<typeof createShopSchema>>({
    resolver: zodResolver(createShopSchema),
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

  const handleInputeChange = () => {
    updateFields({
      name: watchedName,
      slug: watchedSlug,
      description: watchedDesc,
    });
  };

  return (
    <Separator>
      <div className="w-full flex">
        <div className="px-2 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5">
          <h1 className="font-semibold mb-2 heading-color">Basic Info</h1>
          <p className="text-sm text-gray-500">
            Add some basic info about your shop from here
          </p>
        </div>
        <div className="rounded bg-white p-5 shadow w-full sm:w-8/12 md:w-2/3">
          <Form {...form}>
            <form className="space-y-5">
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
                        value={name}
                        className="p-6"
                        onChange={handleInputeChange}
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
                        value={slug}
                        className="p-6"
                        onChange={handleInputeChange}
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
                        value={description}
                        onChange={handleInputeChange}
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
