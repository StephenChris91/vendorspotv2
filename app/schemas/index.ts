import { z } from "zod";
export const signupSchema = z
  .object({
    firstname: z.string().min(1, 'Username is required').max(100),
    lastname: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
    role: z.literal('Vendor').or(z.literal('Customer')).or(z.literal('Admin')).optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',
  });

    export const loginSchema: any = z.object({
        email: z.string().min(2, {
          message: "email must be at least 2 characters.",
        }),
        password: z.string().min(2, {
          message: "password must be at least 2 characters.",
        }),
      });

    export const ResetSchema: any = z.object({
        email: z.string().email({
          message: "email must be a valid email.",
        }),
      });

    export const NewPasswordSchema: any = z.object({
        password: z.string().min(6, {
          message: "This password does not exist",
        }),
      });
      
      export const addPaymentSchema = z.object({
        name: z.string().min(2, {
          message: "Bank Name cannot be empty",
        }),
        email: z.string().min(2, {
          message: "email must be at least 2 characters.",
        }),
        bankName: z.string().min(10, {
          message: "Please provide your bank name.",
        }),
        accountNo: z
          .number()
          .min(2, {
            message: "Provided account number is not a valid account number.",
          })
          .max(12, {
            message: "Provided account number exceeds the maximum length.",
          }),
      });

      export const shopSettingsSchema = z.object({
        phoneNumber: z.string().min(1, {
          message: "Phone number is required.",
        }),
        website: z.string().min(2, {
          message: "website must be at least 2 characters.",
        }),
      });
      
      
export const shopAddressSchema = z.object({
  country: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  city: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  state: z.string().min(10, {
    message: "Please provide your bank name.",
  }),
  zip: z
    .string()
    .min(2, {
      message: "Provided accound number is not a valid account number.",
    })
    .max(6, {
      message: "Provided account number exceeds the maximum length.",
    }),
  address: z.string().min(2, {
    message: "Please provide your physical address.",
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
            message: "Bio must not be longer than 160 characters.",
          }),
      });

      export const searchInputSchema = z.object({
        search: z.string().min(2, {
          message: "The input cannot be less than 2 characters",
        }),
      })

      export const categorySchema = z.object({
        name: z.string().min(2, {
          message: "Username must be at least 2 characters.",
        }),
        slug: z.string().min(2, {
          message: "slug must be at least 2 characters.",
        }),
      });