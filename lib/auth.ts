import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { db } from '@/prisma/prisma';
import { compare } from 'bcrypt';

export const authOptions: NextAuthOptions = {
    // secret: 'secret',
    adapter: PrismaAdapter(db),
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {},
                password: {},

            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password) {
                    return null
                }
                
                const existingUser = await db.user.findUnique({
                    where: {
                        email: credentials?.email
                    }
                })

                if(!existingUser){
                    return null
                }

                const passwordMatch = compare(credentials?.password, existingUser?.password)
                if(!passwordMatch){
                    return null
                }

                return {
                    id: existingUser.id + '',
                    email: existingUser.email,
                    password: existingUser.password,
                    role: existingUser.role,
                    firstname: existingUser.firstname,
                    lastname: existingUser.lastname,
                    profileId: existingUser.profileId
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,

};