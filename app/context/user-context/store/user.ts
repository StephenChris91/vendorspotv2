// In your store/user.ts file
import { atom } from "jotai";

// Define the type for the user session object
interface UserSession {
  user: {
    firstname: string;
    lastname: string;
    email: string;
    // Add any other properties you expect in the user object
  } | null; // User object or null if no user is authenticated
}

// Create the atom to store the user session
export const userSessionAtom = atom<UserSession>({ user: null });
