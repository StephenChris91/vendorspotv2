"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const SHEET_SIDES = ["top"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createCategory } from "@/actions/categories";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  slug: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function AddCategory() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      slug: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await createCategory(values);
      console.log(res);
    } catch (error) {
      console.log(error);
    }

    console.log(values);
  }
  return (
    <div className="grid grid-cols-2 gap-2 mt-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button className="w-32 rounded-sm">Add Category</Button>
          </SheetTrigger>
          <SheetContent side={side} className="bg-blue-600">
            <div className="w-[50%] flex flex-col justify-center mx-auto">
              <SheetHeader>
                <SheetTitle className="text-white">Add Category</SheetTitle>
                <SheetDescription className="text-gray-300 mb-8">
                  Use this to add more categories for products
                </SheetDescription>
              </SheetHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-3"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder=""
                            {...field}
                            className="text-white rounded-sm"
                          />
                        </FormControl>
                        <FormDescription className="text-gray-300">
                          This is the name of your category
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Slug</FormLabel>
                        <FormControl>
                          <Input
                            placeholder=""
                            {...field}
                            className="text-white rounded-sm"
                          />
                        </FormControl>
                        <FormDescription className="text-gray-300">
                          This is the slug of your category. Please leave no
                          empty spaces and mark the gaps with an underscore (_)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <SheetClose asChild>
                    <Button type="submit" className="rounded-sm">
                      Submit
                    </Button>
                  </SheetClose>
                </form>
              </Form>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
