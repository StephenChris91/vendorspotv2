"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const SocialLogin = () => {
  const onclick = (provider: "github" | "google") => {
    signIn(provider, {
      callback: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <Button
      variant="outline"
      className="w-full rounded-sm p-4 text-black uppercase"
      onClick={() => onclick("github")}
    >
      Sign in with github
    </Button>
  );
};

export default SocialLogin;
