import NextAuth from 'next-auth';
import authConfig from '@/auth.config';
import { pathToRegexp } from 'path-to-regexp';
import { NextResponse } from 'next/server';

const { auth } = NextAuth(authConfig);

import { 
  DEFAULT_LOGIN_REDIRECT, 
  publicRoutes, 
  authRoutes, 
  apiAuthPrefix, 
  adminRoutes, 
  DEFAULT_ADMIN_REDIRECT 
} from '@/routes';

// Helper function to filter undefined values
const filterRoutes = (routes: (string | undefined)[]): string[] => {
  return routes.filter((route): route is string => typeof route === 'string');
};

const matchRoute = (path: string, routes: string[]): boolean => {
  return routes.some(route => {
    const regex = pathToRegexp(route);
    return regex.test(path);
  });
};

export default auth((req, res) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isUser = req.auth?.user;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = matchRoute(nextUrl.pathname, filterRoutes(publicRoutes));
  const isAuthenticatedRoute = matchRoute(nextUrl.pathname, filterRoutes(authRoutes));
  const isAdminRoute = matchRoute(nextUrl.pathname, filterRoutes(adminRoutes));

  if (isApiAuthRoute) {
    return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
  }

  if (isAuthenticatedRoute) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_ADMIN_REDIRECT, nextUrl));
    }
  }

  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL('/', nextUrl));
  }

  // If no redirection or response is needed, return void
  return;
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
