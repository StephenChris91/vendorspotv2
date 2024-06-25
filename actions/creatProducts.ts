import { productSchema } from "@/app/schemas";
import { db } from "@/prisma/prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { getUserById } from "@/lib/data/user";

export async function createProduct(values: z.infer<typeof productSchema>) {
  const session = await auth();

  if (!session?.user) {
    return { status: 'error', message: 'User not authenticated' };
  }

  const user = await getUserById(session.user.id as string);

  if (!user || (user.role !== 'Vendor' && user.role !== 'Admin')) {
    return { status: 'error', message: 'User not authorized to create a product' };
  }

  const shop: any = await db.shop.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (!shop) {
    return { status: 'error', message: 'No shop found for the user' };
  }

  const validInput = productSchema.safeParse(values);

  if (!validInput.success) {
    console.error("Invalid product data:", validInput.error.errors);
    return { status: 'error', message: 'Invalid product data' };
  }

  try {
    const productData = {
      ...validInput.data,
      // author_id: user.id,
      shop: {
        connect: { id: shop.id },
      },
      categories: {
        connect: validInput.data.categories?.map(id => ({ id })) ?? [],
      },
      user: session.user.id
    };

    const product = await db.product.create({
      data: productData,
    });

    // if (validInput.data.image) {
    //   await db.image.create({
    //     data: {
    //       url: validInput.data.image,
    //       product: {
    //         connect: { id: product.id },
    //       },
    //     },
    //   });
    // }

    // if (validInput.data.gallery && validInput.data.gallery.length > 0) {
    //   const galleryImages = validInput.data.gallery.map(url => ({ url }));
    //   await db.gallery.create({
    //     data: {
    //       product: {
    //         connect: { id: product.id },
    //       },
    //       Image: {
    //         create: galleryImages,
    //       },
    //     },
    //   });
    // }

    revalidatePath('/');
    return { status: 'success', product };
  } catch (error) {
    console.error(error);
    return { status: 'error', message: 'Failed to create product' };
  }
}
