"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

export const User = () => {
  const { data: session } = useSession();

  return session?.user ?? null;
};