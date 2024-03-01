"use client"

import { redirect } from 'next/navigation';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

export async function useLogout() {
//   const router = useRouter();
  const supabase = createClient();
  const router = useRouter();

  const logout = useCallback(async () => {
    const {
        data: { user },
      } = await supabase.auth.getUser();

      if(user) redirect('/login');

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Error signing out:', error);
      return;
    }

    router.push('/');
  }, [router,supabase]);

  return logout;
}