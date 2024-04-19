import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions, User } from 'next-auth';
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
            async authorize(credentials, req) {
                if(!credentials?.email || !credentials?.password) {
                    return null;
                }
                
                const existingUser = await db.user.findUnique({
                    where: {
                        email: credentials?.email
                    }
                });
            
                if(!existingUser){
                    return null;
                }
            
                const passwordMatch = await compare(credentials?.password, existingUser?.password);
                if(!passwordMatch){
                    return null;
                }
            
                // Construct the User object 
                const user = {
                    id: existingUser.id + '',
                    email: existingUser.email,
                    password: existingUser.password,
                    role: existingUser.role, // Assuming role is defined in your user model
                    firstname: existingUser.firstname,
                    lastname: existingUser.lastname,
                    profileId: existingUser.profileId
                };
            
                return user;
            }
            
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        async jwt ({ token, user }){
            if(user) {
                return {
                    ...token,
                     email: user.email,
                     firstname: user.firstname,
                     lastname: user.lastname,
                     role: user.role
                }
            }
            return token
        }, 


        async session({ session, token }: { session: any; token: any }) {
        return {
            ...session,
            user: {
                ...session.user,
                email: token.email,
                firstname: token.firstname,
                lastname: token.lastname,
                role: token.role
            }
        }
        return session;
        },
      },
}

