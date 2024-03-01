"use server"
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import type { User } from "../types/types";




export const signUp = async (formData: User) => {
    "use server";
    const supabase = createClient();


  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/dashboard");
  }


      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${origin}/auth/callback`,
          data: {
                              confirmPassword: formData.confirmPassword,
                              firstname: formData.firstname,
                              lastname: formData.lastname,
                              role: formData.role,
                              shop: formData.shop
                          }
        },
      });

      console.log(data);

        // const { user } = data
  
    //   if(user){
    //     // router.push('/')
    //     console.log(user)
    //     console.log(data)
    //   } else {
    //     console.log(error)
    //   }

    

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login?message=Check email to continue sign in process");
  };