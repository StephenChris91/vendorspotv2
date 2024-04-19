"use client"

import { useEffect, useState } from 'react';
import { User, createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export function useUser() {
    const [user, setUser] = useState(true);
    // const supabase = createClientComponentClient();

    // useEffect(() => {
    //     // Check active user on mount
    //     supabase.auth.getUser().then((user) => setUser(user.data.user));

    //     // Subscribe to auth changes
    //     const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => setUser(session?.user ?? null));

    //     // Unsubscribe on unmount
    //     return () => {
    //         authListener.subscription.unsubscribe();
    //     };
    // }, []);

  return user;
}