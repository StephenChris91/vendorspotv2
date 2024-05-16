import NextAuth, { type DefaultSession } from "next-auth"
// import { db } from "@/prisma/prisma";
import { userRole } from "@prisma/client";
import NextAuth from "next-auth/next";


// export type userRole = 'Admin' | 'Vendor' | 'Customer' | null;


// declare module 'next-auth' {
//     interface User {
//       firstname: string | null,
//           lastname: string | null,
//           email: string | null,
//           role: userRole | null,
//           name: string | null,
//           emailVerified: Date | null
//     }

//     interface Session {
//         user: User & {
//           firstname: string | null,
//           lastname: string | null,
//           email: string | null,
//           role: userRole | null,
//           name: string | null,
//           emailVerified: Date | null
//           }

//         token: {
//           firstname: string | null,
//           lastname: string | null,
//           email: string | null,
//           role: userRole | null,
//           name: string | null,
//           emailVerified: Date | null
//         }       
//     }
// } 


export type ExtendedUser = DefaultSession['user'] & {
  firstname: string,
  lastname: string,
  email: string,
  role: userRole,
}
 
declare module "next-auth" {
  // interface User {
  //   firstname: string | null,
  //   lastname: string | null,
  //   email: string | null,
  //   role: userRole | null,
  //   name: string | null,
  //   emailVerified: Date | null
  // } 

  interface Session {
    user: ExtendedUser

    token: {
      firstname: string | null,
      lastname: string | null,
      email: string | null,
      role: userRole | null,
      name: string | null,
      emailVerified: Date | null,
    } & DefaultSession["token"]
  }
}

  /**
   * Returned by `useUser`, and received as a prop on the `UserProvider` React Context
   */
  // interface User {
  //   firstname: string,
  //   lastname: string,
  //   email: string,
  //   role: userRole | null,
  //   name: string,
  //   emailVerified: Date
  // } 
