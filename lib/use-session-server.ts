import { auth } from "@/auth"



export const useCurrentUser = async () => {
    const session = await auth();
    const user = session?.user;
    console.log('User from server: ', user)

    return user;
}