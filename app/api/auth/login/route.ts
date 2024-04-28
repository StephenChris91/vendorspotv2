import { loginSchema } from "@/app/(shop)/schemas";
import { db } from "@/prisma/prisma";
import { NextResponse } from "next/server";
import { compareSync } from "bcrypt-ts";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password } = loginSchema.parse(body);

        const existingUser = await db.user.findUnique({
            where: {
                email: email,
            },
        });

        if (!existingUser) {
            return NextResponse.json({
                status: "error",
                message: "User does not exist",
            });
        }

        const isValidPassword = compareSync(password, existingUser.password);

        if (!isValidPassword) {
            return NextResponse.json({
                status: "error",
                message: "Invalid Credentials",
            });
        }
        

        console.log('You are now logged In');
        return NextResponse.json({
            status: "success",
            message: "Login successful",
            user: existingUser,
        });
    } catch (error) {
        console.error("Error during login:", error);
        return NextResponse.json({
            status: "error",
            message: "Something went wrong",
        });
    }
}
