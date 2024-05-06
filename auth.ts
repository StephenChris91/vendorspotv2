import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth, { DefaultSession} from "next-auth";
import authConfig from "@/auth.config";
import { db } from '@/prisma/prisma';
import { getUserById } from './lib/data/user';
import { userRole } from '@prisma/client';


export const {
    
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({ 
    callbacks: {
        // async signIn( { user }) {
        //     const existingUser = await getUserById(user?.id ?? '');

        //     if(!existingUser || !existingUser.emailVerified){
        //         return false;
        //     }
        //     return true;
        // },
        async session({ token, session}){
            // console.log({sessionToken: token})
            if(token.sub && session.user) {
                session.user.id = token.sub;
            }

            if(token.role && session.user) {
                session.user.role = token.role as userRole
            }
            return session
        },
        async jwt({ token }) {
            if(!token.sub) return token;

            const existingUser = await getUserById(token.sub)

            if(!existingUser) return token;

            token.role = existingUser.role
            return token
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: 'jwt'},
    ...authConfig,
})