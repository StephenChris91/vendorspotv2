'use server'

import * as z from 'zod';
import { hash } from 'bcrypt-ts'
import { signupSchema } from '@/app/(shop)/schemas';
import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';
import { getUserByEmail } from '@/lib/data/user';
import { db } from '@/prisma/prisma';

export const register = async (values: z.infer<typeof signupSchema>) => {
    const validInput = signupSchema.safeParse(values)

    if (!validInput.success) {
        return { error: 'Invalid Credentials'}
    }

    const {email, password, confirmPassword, firstname, lastname, role } = validInput.data;

    const existingUser = await getUserByEmail(email);
    
    const hashedPassword = await hash(password, 10)
    if(existingUser) {
        if(!password || password !== confirmPassword) {
            return { error: 'Passwords do not match'}
        }
    }

        try {
           await db.user.create({
            data: {
                email,
                password: hashedPassword,
                firstname,
                lastname,
                role,
            }
           })
        } catch (error) {
            console.log(error)

            throw error
        }
}