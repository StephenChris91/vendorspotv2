import NextAuth from 'next-auth'
import authConfig from '@/auth.config';

const { auth } = NextAuth(authConfig);
import { DEFAULT_LOGIN_REDIRECT, publicRoutes, authRoutes, apiAuthPrefix, adminRoutes} from '@/routes'



export default auth((req) => {
   const { nextUrl } = req;
   const isLoggedIn = !!req.auth;
   const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
   const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
   const isAuthenticatedRoute = authRoutes.includes(nextUrl.pathname);
    const isAdminRoutes = adminRoutes.includes(nextUrl.pathname);


   if(isApiAuthRoute) {
    // return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    return null
}

   if(isAuthenticatedRoute) {

    if(isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    // return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    return null
}

    if(!isLoggedIn && !isPublicRoute){
        return Response.redirect(new URL('/', nextUrl));
    }

    return null
});
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)',],
};
