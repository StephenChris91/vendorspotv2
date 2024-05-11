/**
 * @description: Public routes
 * An array of routes accessible to all users who visit the site.
 * @type {string[]}
 */
export const publicRoutes = ['/', '/auth/new-verification', '/auth/forgot-password']


/**
 * @description: Authenticated routes
 * An array of routes accessible to only authenticated users who visit the site.
 * @type {string[]}
 */
export const authRoutes = ['/auth/login', '/auth/signup', '/auth/profile', '/auth/new-password']

// '/auth/forgot-password', '/auth/reset-password', '/dashboard', '/auth/profile', '/settings', '/checkout'


/**
 * @description: Authenticated routes
 * An array of routes accessible to only users with admin roles. This routes will redirect to the admin dashboard
 * @type {string[]}
 */
export const adminRoutes = ['/dashboard']


/**
 * @description: Authenticated routes
 * An array of routes accessible to only users with vendor roles. This routes will redirect to the vendor dashboard
 * @type {string[]}
 */
export const vendorRoutes = []

/**
 * @description: A prefix for api auth routes
 * Routes with this prefix are used for api authentication processes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth'


/**
 * @description: A default redirect path for authenticated users
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings'


/**
 * @description: A default redirect path for admin users
 * @type {string}
 */
export const DEFAULT_ADMIN_REDIRECT = '/dashboard'


/**
 * @description: A default redirect path for vendor users
 * @type {string}
 */
export const DEFAULT_VENDOR_REDIRECT = '/dashboard'