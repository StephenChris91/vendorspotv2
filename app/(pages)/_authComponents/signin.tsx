"use client";

import Link from "next/link";
import { SyncLoader } from "react-spinners";
import { useState } from "react";
import { useDispatch } from "react-redux";
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
import { useToast } from "@/components/ui/use-toast";
import { loginSchema } from "@/app/(shop)/schemas";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signInUser } from "@/store/slices/userSlice";
import { AppDispatch } from "@/store/store";
import { login } from "@/actions/login";

export default function Login() {
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();
  const { toast } = useToast();
  const dispatch: AppDispatch = useDispatch();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof loginSchema>) {
    // const signInData = await dispatch(signInUser(values));
    const signInData = await login(values);

    if (!signInData) {
      toast({
        variant: "destructive",
        title: "Error 😞",
        description: "An Error has occured, please try again",
      });
    } else {
      toast({
        variant: "default",
        title: "Signed in! 😄",
        description: "",
        duration: 9000,
      });
      router.refresh();
      // router.push("/");
    }
  }

  return (
    <div className="w-64 p-5 flex flex-col m-auto items-start h-auto bg-gray-50 shadow-sm">
      <h4 className="text-center font-normal mb-2">Sign In to your account</h4>
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
            className="w-full rounded-sm p-4 bg-blue-600 hover:bg-black text-white"
          >
            Submit
          </Button>
        </form>
      </Form>
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
      <div className="relative w-full mt-2 mb-2">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-gray-50 px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Link href="/signup" className="w-full">
        <Button
          variant="outline"
          type="submit"
          className="w-full rounded-sm p-4 text-black uppercase"
        >
          Create an account
        </Button>
      </Link>
    </div>
  );
}