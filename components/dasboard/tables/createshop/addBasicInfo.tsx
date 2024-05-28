"use client";

import { Input } from "@/components/ui/input";
import Separator from "@/components/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { createShopSchema } from "@/app/schemas";
import { updateShopField } from "@/store/slices/shopSlice";
import debounce from "lodash.debounce";
import { RootState } from "@/store/store";

const AddBasicInfo = () => {
  const dispatch = useDispatch();
  const { name, slug, description } = useSelector(
    (state: RootState) => state.shop
  );

  const form = useForm<z.infer<typeof createShopSchema>>({
    resolver: zodResolver(createShopSchema),
    defaultValues: {
      name,
      slug,
      description: description ?? "",
    },
  });

  const { control, watch, setValue } = form;
  const watchedName = watch("name");
  const watchedSlug = watch("slug");
  const watchedDesc = watch("description");

  const debouncedUpdateFields = useCallback(
    debounce((field, value) => {
      dispatch(updateShopField({ field, value }));
    }, 500),
    [dispatch]
  );

  useEffect(() => {
    setValue("name", name);
    setValue("slug", slug);
    setValue("description", description ?? "");
  }, [name, slug, description, setValue]);

  useEffect(() => {
    debouncedUpdateFields("name", watchedName);
  }, [watchedName, debouncedUpdateFields]);

  useEffect(() => {
    debouncedUpdateFields("slug", watchedSlug);
  }, [watchedSlug, debouncedUpdateFields]);

  useEffect(() => {
    debouncedUpdateFields("description", watchedDesc);
  }, [watchedDesc, debouncedUpdateFields]);

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
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Shop Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your business name..."
                        {...field}
                        value={watchedName}
                        className="p-6"
                        onChange={(e) => {
                          setValue("name", e.target.value);
                          dispatch(
                            updateShopField({
                              field: "name",
                              value: e.target.value,
                            })
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your tagline</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Set a tagline for your business"
                        {...field}
                        value={watchedSlug}
                        className="p-6"
                        onChange={(e) => {
                          setValue("slug", e.target.value);
                          dispatch(
                            updateShopField({
                              field: "slug",
                              value: e.target.value,
                            })
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a little bit about your business"
                        className="resize p-2 h-32 w-full rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#266235] focus:border-transparent"
                        {...field}
                        value={watchedDesc ?? ""}
                        onChange={(e) => {
                          setValue("description", e.target.value);
                          dispatch(
                            updateShopField({
                              field: "description",
                              value: e.target.value,
                            })
                          );
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
