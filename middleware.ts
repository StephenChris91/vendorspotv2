import NextAuth from 'next-auth'
import authConfig from '@/auth.config';

const { auth } = NextAuth(authConfig);
import { DEFAULT_LOGIN_REDIRECT, publicRoutes, authRoutes, apiAuthPrefix, adminRoutes} from '@/routes'



import { NextResponse } from 'next/server';



export default auth((req, res) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthenticatedRoute = authRoutes.includes(nextUrl.pathname);
    const isAdminRoutes = adminRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
        return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }

    if (isAuthenticatedRoute) {
        if (!isLoggedIn) {
            return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
    }

    if (!isLoggedIn && !isPublicRoute) {
        return NextResponse.redirect(new URL('/', nextUrl));
    }

    // If no redirection or response is needed, return void
    return;
});

 
// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)',],
};
