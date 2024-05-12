import { db } from "@/prisma/prisma";
import { userRole } from "@prisma/client";
import NextAuth from "next-auth/next";


// export type userRole = 'Admin' | 'Vendor' | 'Customer' | null;


// declare module 'next-auth' {
//     interface User {
//         firstname: string,
//         lastname: string
//         email: string,
//         role: userRole | null,
//         name: string,
//         emailVerified: Date,
//     }

//     interface Session {
//         user: User & {
//             firstname: string,
//             lastname: string
//             email: string,
//             role: userRole | null, 
//             name: string,
//             emailVerified: Date,}

//         token: {
//             firstname: string,
//             lastname: string
//             email: string,
//             role: userRole | null, 
//             name: string,
//             emailVerified: Date,
//         }       
//     }
// }

import NextAuth, { type DefaultSession } from "next-auth"
 
declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
        firstname: string,
        lastname: string
        email: string,
        role: userRole | null,
        name: string,
        emailVerified: Date,
    } & DefaultSession["user"]
  }
}