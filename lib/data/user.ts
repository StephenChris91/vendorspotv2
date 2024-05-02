import { db } from '@/prisma/prisma';

export const getUserByEmail = async (email: string) => {
    const user = await db.user.findUnique({
        where: {
            email: email,
        }
    })

    if(!user) {
        return 'user not found'
    }

    return user;
}

export const getUserById = async (id: string) => {
    const user = await db.user.findUnique({
        where: {
            id: id,
        }
    })

    return user;
}