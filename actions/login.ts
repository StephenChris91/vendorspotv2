'use server'

import * as z from 'zod';

import { loginSchema } from '@/app/(shop)/schemas';
import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';
import { getUserByEmail } from '@/lib/data/user';
import { generateVerificationToken } from '@/lib/data/tokens';

export const login = async (values: z.infer<typeof loginSchema>) => {
    const validInput = loginSchema.safeParse(values)

    if (!validInput.success) {
        return { error: 'Invalid Credentials'}
    }

    const {email, password } = validInput.data;

    const existingUser = await getUserByEmail(email);

    if(!existingUser || !existingUser.email || !existingUser.password) {
        return {error: 'This user does not exist!'}
    }

    if(!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(existingUser.email);

        return {
            success: 'Confirmation email sent'
        }
    }

        try {
            await signIn('credentials', {
                email,
                password,
                redirectTo: DEFAULT_LOGIN_REDIRECT
            })
        } catch (error) {
            if (error instanceof AuthError) {
                switch (error.type) {
                    case 'CredentialsSignin':
                        return { error: 'Your credentials are incorrect!'}
                    default: return { error: 'Something Went Wrong!'}
                }
            }

            throw error
        }
}