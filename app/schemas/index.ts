import { z } from "zod";

export const signupSchema: any = z.object({
        firstname: z.string().min(2, {
            message: "First name can not be empty.",
        }),
        lastname: z.string().min(2, { message: "Last Name can not be empty" }),
        email: z
            .string()
            .email({ message: "Password must be at least 8 characters." }),
        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters." }),
        confirmPassword: z
            .string()
            .min(8, { message: "Passwords do not match" })
            .refine((data) => data !== signupSchema.password, {
                message: "Passwords do not match",
            }),
        role: z.boolean().default(false).optional(),
        shop: z.boolean().default(false).optional(),
        avatar: z.string().optional(), // Add file field to the schema
    });

    export const loginSchema: any = z.object({
        email: z.string().min(2, {
          message: "email must be at least 2 characters.",
        }),
        password: z.string().min(2, {
          message: "password must be at least 2 characters.",
        }),
      });


      export const createShopSchema = z.object({
        name: z.string().min(2, {
          message: "Username must be at least 2 characters.",
        }),
        slug: z.string().min(2, {
          message: "Username must be at least 2 characters.",
        }),
        description: z
          .string()
          .min(10, {
            message: "Bio must be at least 10 characters.",
          })
          .max(160, {
            message: "Bio must not be longer than 30 characters.",
          }),
      });