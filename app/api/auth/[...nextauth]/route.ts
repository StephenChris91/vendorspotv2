import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { db } from '@/prisma/prisma';



const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/signin',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        // const res = await db.user.findUnique({
        //     where: {
        //         email: credentials.email as string,
        //     },
        //     select: {
        //         id: true,
        //         email: true,
        //         password: true,
        //     }
        // })
        // })
        // const user = res
  
          return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };