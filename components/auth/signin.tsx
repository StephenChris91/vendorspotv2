"use client";

import Link from "next/link";
import { SyncLoader } from "react-spinners";
// import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import { User } from "@/app/types/types";
import { SubmitButton } from "@/app/(pages)/login/submit-button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { useToast } from "@/components/ui/use-toast";

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
import { useToast } from "../ui/use-toast";
import { loginSchema } from "@/app/(shop)/schemas";

export default function Login() {
  const [errorMsg, setErrorMsg] = useState("");

  // const supabase = createClient();
  // const toast = useToast();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    console.log(values);
    // const { data, error } = await supabase.auth.signInWithPassword({
    //   email: values.email,
    //   password: values.password,
    // });
    // if (data.user) {
    //   // console.log(data);
    //   toast({
    //     variant: "default",
    //     title: "Signed in!",
    //     description: "You are now signed in!",
    //     duration: 9000,
    //   });
    //   // redirect("/");
    // } else {
    //   console.error(error);
    //   toast({
    //     variant: "default",
    //     title: "An error occurred",
    //     description: "An error occurred while signing in",
    //     // isClosable: true,
    //   });
    // }
  }

  return (
    <div className="w-96 p-5 mt-32 flex flex-col m-auto items-start h-auto bg-gray-50 shadow-sm">
      <h1 className="text-3xl font-semibold mb-5">Login</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 min-w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email address..."
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
            name="password"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password..."
                      {...field}
                      className="w-full p-5 rounded-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-black text-white"
          >
            Submit
          </Button>
        </form>
      </Form>
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
      <p>
        Don't have an account?{" "}
        <Link href="/signup" className="font-bold">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
