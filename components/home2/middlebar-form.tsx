"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Input } from "@/components/ui/input";
import { searchInputSchema } from "@/app/(shop)/schemas";

export function MiddleBarForm() {
  const form = useForm<z.infer<typeof searchInputSchema>>({
    resolver: zodResolver(searchInputSchema),
    defaultValues: {
      search: "",
    },
  });

  function onSubmit(values: z.infer<typeof searchInputSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-white rounded-sm w-96 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 dark:bg-gray-700 dark:focus-within:ring-gray-500 dark:focus-within:ring-opacity-50"
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="search..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
