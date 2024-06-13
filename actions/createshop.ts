'use server';
import { shopType } from './../app/types/types.d';
// actions/createshop.ts

import { shopSchema } from "@/app/schemas";
import { db } from "@/prisma/prisma";
import { z } from "zod";
// import { getSessionContext } from '@blitzjs/server';
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
export async function createShop(values: z.infer<typeof shopSchema>) {
    const session = await auth();

    if (!session?.user) {
        return { error: 'User not authenticated' };
    }

    const validInput = shopSchema.safeParse(values);

    if (!validInput.success) {
        return { error: 'Invalid credentials' };
    }

    const { id, shopname, description, address, logo, banner, slug, bankName, accountNo, country, city, state, zip, phoneNumber, website, accountName } = validInput.data;
    const existingShop = await getShopById(id as string)

    if (existingShop) {
        return { error: 'This shop already exists!' };
    }

    const data = {
        shopname,
        description,
        address,
        logo,
        banner,
        slug,
        bankName,
        accountNo,
        country,
        city,
        state,
        zip,
        phoneNumber,
        website,
        accountName,
    };

    try {
        const shop = await db.shop.create({
            data: {
                ...data,
            },
        });

        // Update user's onboarded status
        await db.user.update({
            where: { id: session.user.id },
            data: { isOnboardedVendor: true },
        });

        revalidatePath('/');
        return { status: 'success', shop };
    } catch (error) {
        console.error(error);
        return { status: 'error', message: 'Failed to create shop' };
    }
}

export const getShopBySlug = async (slug: string) => {
    const shop = await db.shop.findFirst({
        where: { slug }
    });
    return shop;
};
export const getShopByName = async (shopname: string) => {
    const shop = await db.shop.findFirst({
        where: { shopname }
    });
    return shop;
};


// actions/createshop.ts


export const getShopById = async (id: string) => {
  try {
    const shop = await db.shop.findUnique({
      where: { id },
    });
    return shop;
  } catch (error) {
    console.error("Failed to fetch shop by ID:", error);
    return null;
  }
};

