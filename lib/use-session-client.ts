import { useSession } from 'next-auth/react';

export const useCurrentUser = () => {
    const session = useSession();
    console.log("Session:", session);
    const user = session?.data?.user;
    console.log("User from client:", user);
    return user;
}
