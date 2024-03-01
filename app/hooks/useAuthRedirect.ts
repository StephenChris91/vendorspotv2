// "use client"

// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { createClient } from '@/utils/supabase/client';

// export function useAuthRedirect() {
//   const router = useRouter();
//   const supabase = createClient();

//   useEffect(() => {
//     const { data: authListener } = supabase.auth.onAuthStateChange(
//       async (event, session) => {
//         const user = session?.user;

//         if (user) {
//           // If there's a user, redirect them to the dashboard
//           router.push('/dashboard');
//         } else {
//           // If there's no user, redirect them to the homepage
//           router.push('/');
//         }
//       }
//     );

//     // Clean up the listener when the component unmounts
//     return () => {
//         authListener?.subscription.unsubscribe();
//     };
//   }, [router, supabase]);

//   // This hook doesn't return anything
// }