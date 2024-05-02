import Github from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";
import Credentials from 'next-auth/providers/credentials'
import { loginSchema } from "./app/(shop)/schemas";
import { getUserByEmail } from "./lib/data/user";
import { compare } from "bcrypt-ts";
export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validInputFields = loginSchema.safeParse(credentials);

                if(validInputFields.success) {
                    const { email, password } = validInputFields.data;

                    const user = await getUserByEmail(email);

                    if(!user || !user.password) return null;

                    const isPasswordMatch = await compare(password, user.password);
                    
                    if(isPasswordMatch) return user;


                }

                return null;
            },
        }),
    ],
} satisfies NextAuthConfig;