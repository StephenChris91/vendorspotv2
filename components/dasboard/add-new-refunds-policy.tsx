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
import QuillEditor from "react-quill";

const formSchema = z.object({
  header: z.string().min(2, {
    message: "header must be at least 2 characters.",
  }),
  slug: z.string().min(2, {
    message: "slug must be at least 2 characters.",
  }),
  policy: z.string().min(2, {
    message: "slug must be at least 2 characters.",
  }),
});

const AddNewRefundsPolicyPage = () => {
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
      policy: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="mt-32 mb-32 p-10">
      <h2 className="pb-5 border-b-gray-500 border-b-2 border-dashed">
        Add New Refunds Policy
      </h2>
      <div className="flex justify-between  mx-auto mt-10">
        <div className="w-1/3">
          <h4>Description</h4>
          <p>Add Refund Policy's information from here.</p>
        </div>
        <div className="bg-white rounded-sm w-2/3 p-7">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="header"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Refund Policy Heading</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter the heading for your policy"
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
              <FormField
                control={form.control}
                name="policy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Refund Policy Description</FormLabel>
                    <FormControl>
                      <ReactQuill
                        theme="snow"
                        {...field}
                        modules={modules}
                        formats={formats}
                      />
                    </FormControl>
                    <FormDescription>
                      This is the main policy text{" "}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-green-600 text-white font-normal p-5 rounded-sm w-1/4"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddNewRefundsPolicyPage;
