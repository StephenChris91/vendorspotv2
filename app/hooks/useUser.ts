"use client"

import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import type { User } from '@/app/types/types';


export function useUser() {
    const [user, setUser] = useState<User | null>(null);

    const supabase = createClient();
    useEffect(() => {
        const fetchUser = async () => {
            const { data, error } = await supabase.auth.getUser();

            if (error) {
                console.error('Error fetching user:', error);
                return;
            }
            console.log(data);
            setUser(data.user as User); // Type assertion to cast email to string
        };

        fetchUser();
    }, []);

  return user;
}