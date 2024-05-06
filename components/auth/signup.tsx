"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { startTransition, useState } from "react";

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
import { useDispatch } from "react-redux";
import { signUpUser } from "@/store/slices/userSlice";
import { register } from "@/actions/register";
import { FiAlertCircle } from "react-icons/fi";

export default function Signup({ open }: any) {
  const router = useRouter();
  const { toast } = useToast();
  const dispatch = useDispatch();
  const [isVendor, setIsVendor] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

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
    // const role = isVendor ? "Vendor" : "Customer";
    // const responseData = dispatch(signUpUser(formData) as any);

    // if (responseData.error) {
    //   toast({
    //     variant: "destructive",
    //     title: "Error",
    //     description: responseData.error,
    //     duration: 5000,
    //   });
    //   return;
    // } else {
    //   toast({
    //     variant: "default",
    //     title: "Success",
    //     description: responseData.message,
    //     duration: 5000,
    //   });
    //   router.refresh();
    // }
    // router.push("/profile");
    setErrorMsg("");
    setSuccessMsg("");

    startTransition(() => {
      register(formData).then((res: any) => {
        if (res?.error) {
          setErrorMsg(res?.error || "");
        } else {
          setSuccessMsg(res?.success || "");
          open(false);
        }
      });
    });

    if (errorMsg) {
      toast({
        variant: "destructive",
        title: "Error 😞",
        description: errorMsg,
      });
    } else {
      toast({
        variant: "default",
        title: "Signed in! 😄",
        description: successMsg,
        duration: 9000,
      });
      // router.refresh();
      // router.push("/");
    }
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
      {errorMsg && (
        <p className="text-red-500 bg-red-100 w-full text-center text-sm p-3 mt-3 rounded-sm flex justify-between items-center mx-auto gap-3">
          <FiAlertCircle className="text-red-500 text-lg" />
          {errorMsg}
        </p>
      )}
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
