import { loginSchema } from "@/app/(shop)/schemas";
import { NextResponse } from "next/server";
import { compareSync } from "bcrypt-ts";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { getUserByEmail } from "@/lib/data/user";
import { AuthError } from "next-auth";

export async function POST(req: Request) {
    const body = await req.json();
    const validInputFields = loginSchema.safeParse(body)

    if (!validInputFields.success){
        return {error: 'Your details are incorrect!'}
    }

    const { email, password } = validInputFields.data;

    const existingUser = getUserByEmail(email)

    if(!existingUser) {
        return {error: 'This user does not exist!'}
    }

    try {
        await signIn('credentials', {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
        
    } catch (error) {
        if(error instanceof AuthError) {
            switch(error.type) {
                case 'CredentialsSignin':
                    return {error: 'Your details are incorrect!'}
                default: return {error: 'Something Went Wrong!'}
            }
        }

        throw error
    }

    // return NextResponse.json({
    //     status: "success",
    //     message: "Login successful",
    //     user: existingUser,
    // });
}
