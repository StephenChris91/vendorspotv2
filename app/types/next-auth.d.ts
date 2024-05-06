import { db } from "@/prisma/prisma";
import { userRole } from "@prisma/client";
import NextAuth from "next-auth/next";


// export type userRole = 'Admin' | 'Vendor' | 'Customer' | null;


declare module 'next-auth' {
    interface User {
        firstname: string,
        lastname: string
        email: string,
        role: userRole | null,
    }

    interface Session {
        user: User & {
            firstname: string,
            lastname: string
            email: string,
            role: userRole | null,        }

        token: {
            firstname: string,
            lastname: string
            email: string,
            role: userRole | null,        }
    }
}