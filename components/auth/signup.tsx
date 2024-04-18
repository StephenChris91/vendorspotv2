"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
import { Checkbox } from "@/components/ui/checkbox";
import { signupSchema } from "@/app/(shop)/schemas";
import { db } from "@/prisma/prisma";
import { useToast } from "../ui/use-toast";
import { CheckedState } from "@radix-ui/react-checkbox";

export default function Signup() {
  const router = useRouter();
  const { toast } = useToast();

  const [isVendor, setIsVendor] = useState(false);

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: isVendor ? "Vendor" : "Customer", // Use the isVendor state to set the role field
    },
  });

  const onSubmit = async (
    formData: Omit<z.infer<typeof signupSchema>, "data">
  ) => {
    // Retrieve the file uploaded by the user
    // const fileInput = (await document.getElementById(
    //   "picture"
    // )) as HTMLInputElement;

    // if (!fileInput.files || fileInput.files.length === 0) {
    //   console.log(fileInput.files);
    //   console.error("No file selected");
    //   return;
    // }

    // const file = fileInput.files[0];

    // // Upload the file to the user's folder in the 'vendors' bucket
    // const filePath = `vendors/${d.firstname}/${file.name}`;
    // const { error: uploadError } = await supabase.storage
    //   .from("vendors")
    //   .upload(filePath, file);

    // if (uploadError) {
    //   console.error(uploadError);
    //   return;
    // }

    // // Retrieve the URL of the uploaded file
    // const { data: urlData } = supabase.storage
    //   .from("vendors")
    //   .getPublicUrl(filePath);

    // if (!urlData || !urlData.publicUrl) {
    //   console.error("Error retrieving URL");
    //   return;
    // }

    // Add the URL as the user's avatar in the additional data sent to the database
    // const { data, error } = await supabase.auth.signUp({
    //   email: d.email,
    //   password: d.password ?? "",
    //   options: {
    //     // emailRedirectTo: `${window.location.origin}/auth/callback`,
    //     data: {
    //       // avatar: urlData.publicUrl,
    //       confirmPassword: d.confirmPassword ?? "",
    //       firstname: d.firstname,
    //       lastname: d.lastname,
    //       role: d.role,
    //       shop: d.shop,
    //     },
    //   },
    // });

    // console.log(d, data);
    // supabase.from("users").insert([data]);
    const role = isVendor ? "Vendor" : "Customer";
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        role: role,
      }),
    });

    const responseData = await response.json();

    if (responseData.error) {
      toast({
        variant: "default",
        title: "Error",
        description: responseData.error,
        duration: 5000,
      });
      return;
    } else {
      toast({
        variant: "default",
        title: "Success",
        description: responseData.message,
        duration: 5000,
      });
      router.refresh();
      router.push("/login");
    }
    console.log(response);
  };

  return (
    <div className="w-96 p-5 mt-32 flex flex-col m-auto items-start h-auto bg-gray-50 shadow-sm">
      <h1 className="text-3xl font-semibold mb-5">Sign Up</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 min-w-full"
        >
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="First Name"
                    {...field}
                    className="w-full p-5 rounded-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      {...field}
                      className="w-full p-5 rounded-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className="w-full p-5 rounded-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Password"
                      {...field}
                      className="w-full block p-5 rounded-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirm Password"
                      {...field}
                      className="w-full block p-5 rounded-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          {/* <FormField
            control={form.control}
            name="avatar"
            render={({
              field,
            }: {
              field: ControllerRenderProps<
                {
                  firstname: string;
                  lastname: string;
                  email: string;
                  password: string;
                  confirmPassword: string;
                  role?: boolean | undefined;
                  shop?: boolean | undefined;
                  avatar?: string | undefined;
                },
                "avatar"
              >;
            }) => (
              <FormItem className="flex flex-col items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                <FormControl>
                  {/* <Label htmlFor="picture">Picture</Label> */}
          {/* <Input id="picture" type="file" /> */}
          {/* </FormControl> */}
          {/* <div className="space-y-1 leading-none"></div> */}
          {/* </FormItem> */}
          {/* )} */}
          {/* /> */}
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md  p-4 ">
                <FormControl>
                  <Checkbox
                    checked={isVendor}
                    onCheckedChange={(checkedState: CheckedState) => {
                      if (typeof checkedState === "boolean") {
                        setIsVendor(checkedState);
                      }
                    }}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Are you a seller?</FormLabel>
                  <FormDescription>
                    By selecting this option, you agree to become a seller on
                    Vendorspot{" "}
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="min-w-full bg-blue-600 rounded-sm p-5"
          >
            Submit
          </Button>
        </form>
      </Form>
      <p className="mt-3">
        Already have an account?{" "}
        <span
          className="font-bold cursor-pointer"
          onClick={() => router.push("/login")}
        >
          Login
        </span>
      </p>
    </div>
  );
}
