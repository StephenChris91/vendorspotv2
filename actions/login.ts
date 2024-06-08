'use server'

import * as z from 'zod';

import { loginSchema } from '@/app/schemas';
import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';
import { getUserByEmail } from '@/lib/data/user';
import { generateVerificationToken } from '@/lib/data/tokens';
import { sendVerificationEmail } from '@/lib/mail';

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

        await sendVerificationEmail(
            verificationToken.email,
            verificationToken.token
        )

        return {
            success: 'Confirmation email sent'
        }
    }

    const vendorOnboard = existingUser.role === 'Vendor' && existingUser.isOnboardedVendor
    const vendorNotOnboarded = existingUser.role === 'Vendor' && !existingUser.isOnboardedVendor

        try {
            await signIn('credentials', {
                email,
                password,
                redirectTo: vendorOnboard ? '/dashboard' : vendorNotOnboarded ? '/auth/onboarding' : '/auth/profile'
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