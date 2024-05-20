"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import categories from "@/db/categories";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import { categorySchema } from "@/app/schemas";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { db } from "@/prisma/prisma";
import { CategoriesType } from "@/app/types/types";
import { getAllCategories } from "@/actions/categories";

export function CategoryDisplay() {
  const [category, setCategory] = useState<CategoriesType[]>([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategory(data);
    });
  }, [category, setCategory]);

  const { control, watch } = useForm();

  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
  });

  function onSubmit(data: z.infer<typeof categorySchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="pb-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>CATEGORY</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value as string}
                    className="flex flex-col space-y-1"
                  >
                    <RadioGroup>
                      {category.map((category) => {
                        return (
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              key={category.id}
                              value={category.slug}
                              id={category.id}
                            >
                              {category.name}/
                            </RadioGroupItem>
                            <Label
                              htmlFor={category.id.toString()}
                              className="ml-2 text-black font-bold"
                            >
                              {category.name}
                            </Label>
                          </div>
                        );
                      })}
                    </RadioGroup>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormMessage />
        <Button type="submit">Submit</Button> */}
        </form>
      </Form>
      {/* <Separator /> */}
    </div>
  );
}
