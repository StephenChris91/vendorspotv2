import { auth } from "@/auth"



export const useCurrentUser = async () => {
    const session = await auth();
    const user = session?.user;

    return user;
}