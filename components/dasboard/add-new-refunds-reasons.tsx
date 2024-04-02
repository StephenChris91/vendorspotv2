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
import ReactQuill from "react-quill";
import { useCallback, useMemo, useRef } from "react";

const formSchema = z.object({
  header: z.string().min(2, {
    message: "header must be at least 2 characters.",
  }),
  slug: z.string().min(2, {
    message: "slug must be at least 2 characters.",
  }),
});

const AddNewRefundsReasons = () => {
  const imageHandler = useCallback(() => {
    // Create an input element of type 'file'
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    // When a file is selected
    input.onchange = () => {
      const file = input.files?.[0];
      const reader = new FileReader();

      // Read the selected file as a data URL
      reader.onload = () => {
        const quill = useRef<ReactQuill | null>(null); // Add type annotation and initialize with null
        const imageUrl = reader.result;
        const quillEditor = quill.current?.getEditor(); // Add null check here

        // Get the current selection range and insert the image at that index
        const range = quillEditor?.getSelection(true); // Add null check here
        const index = range?.index ?? 0; // Add null check and provide default value
        quillEditor?.insertEmbed(index, "image", imageUrl, "user"); // Add null check here
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    };
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [2, 3, 4, false] }],
          ["bold", "italic", "underline", "blockquote"],
          [{ color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      clipboard: {
        matchVisual: true,
      },
    }),
    [imageHandler]
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "clean",
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      header: "",
      slug: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="mb-32 p-10">
      <h2 className="pb-5 border-b-gray-500 border-b-2 border-dashed">
        Add New Refunds Reason
      </h2>
      <div className="flex justify-between  mx-auto mt-10">
        <div className="w-1/3">
          <h4>Description</h4>
          <p>Add Refund Reason's information from here.</p>
        </div>
        <div className="bg-white rounded-sm w-2/3 p-7">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="header"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Refund Reason Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your refund reasons title..."
                        {...field}
                        className="p-5 rounded-sm focus:border-green-500"
                      />
                    </FormControl>
                    <FormDescription>
                      This will be the title of your policy{" "}
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
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter the heading for your policy"
                        {...field}
                        className="p-5 rounded-sm focus:border-green-500"
                      />
                    </FormControl>
                    <FormDescription>
                      This is a short description of the policy{" "}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </div>
      <div className="sticky bottom-0 -mx-5 bg-gray-100/10 py-3 px-5 backdrop-blur text-end md:py-5 lg:-mx-8 lg:px-8 z-10">
        <div className="text-end">
          <button
            data-variant="normal"
            className=" bg-green-600 text-white inline-flex items-center justify-center flex-shrink-0 font-semibold rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 bg-accent text-light border border-transparent hover:bg-accent-hover px-5 py-0 h-12 text-sm md:text-base"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewRefundsReasons;
