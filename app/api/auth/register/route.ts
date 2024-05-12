import { NextResponse } from 'next/server';
import { hash } from 'bcrypt-ts';
import { db } from '@/prisma/prisma';
import { signupSchema } from '@/app/schemas';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {email, password, firstname, lastname, role } = signupSchema.parse(body);

        const existingUser = await db.user.findUnique({
            where: {
                email: email
            }
        })
        if(existingUser) {
            return NextResponse.json({user: null, message: 'A User with this email already exists'}, {status: 409})
        }

        const hashedPassword = await hash(password, 10)

        const newUser = await db.user.create({
            data: {
                email,
                password: hashedPassword,
                firstname,
                lastname,
                role
            }
        })

        const { password: newUserPassword, ...rest} = newUser;

        return NextResponse.json({ message: `${role === 'Vendor' ? 'Signed Up Successfully! Welcome Vendor 😇' : 'Signed Up Successful! Happy Shopping'}`, user: rest}, {status: 201})
        
        // return NextResponse.json(body)
    } catch (error) {
        console.log(error)
    }

    return NextResponse.json({ message: 'User created successfully'})
    
}