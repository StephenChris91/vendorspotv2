import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions, User } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { db } from '@/prisma/prisma';
import { compareSync } from 'bcrypt-ts';
// import { compare } from 'bcrypt';

export const authOptions: NextAuthOptions = {
    // secret: 'secret',
    adapter: PrismaAdapter(db),
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {},
                password: {},

            },
            async authorize(credentials, req) {
                if(!credentials?.email || !credentials?.password) {
                    return null;
                }
                
                const existingUser = await db.user.findUnique({
                    where: {
                        email: credentials?.email
                    }
                });
            
                if(!existingUser){
                    return null;
                }
            
                const passwordMatch = await compareSync(credentials?.password, existingUser?.password);
                if(!passwordMatch){
                    return null;
                }
            
                // Construct the User object 
                const user = {
                    id: existingUser.id + '',
                    email: existingUser.email,
                    password: existingUser.password,
                    role: existingUser.role, // Assuming role is defined in your user model
                    firstname: existingUser.firstname,
                    lastname: existingUser.lastname,
                    profileId: existingUser.profileId
                };
            
                return user;
            }
            
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        async jwt ({ token, user }){
            if(user) {
                return {
                    ...token,
                     email: user.email,
                     firstname: user.firstname,
                     lastname: user.lastname,
                     role: user.role
                }
            }
            return token
        }, 


        async session({ session, token }: { session: any; token: any }) {
        return {
            ...session,
            user: {
                ...session.user,
                email: token.email,
                firstname: token.firstname,
                lastname: token.lastname,
                role: token.role
            }
        }
        return session;
        },
      },
}


// Retrieve the file uploaded by the user
    // const fileInput = (await document.getElementById(
    //   "picture"
    // )) as HTMLInputElement;

    // if (!fileInput.files || fileInput.files.length === 0) {
    //   console.log(fileInput.files);
    //   console.error("No file selected");
    //   return;
    // }

    // const file = fileInput.files[0];

    // // Upload the file to the user's folder in the 'vendors' bucket
    // const filePath = `vendors/${d.firstname}/${file.name}`;
    // const { error: uploadError } = await supabase.storage
    //   .from("vendors")
    //   .upload(filePath, file);

    // if (uploadError) {
    //   console.error(uploadError);
    //   return;
    // }

    // // Retrieve the URL of the uploaded file
    // const { data: urlData } = supabase.storage
    //   .from("vendors")
    //   .getPublicUrl(filePath);

    // if (!urlData || !urlData.publicUrl) {
    //   console.error("Error retrieving URL");
    //   return;
    // }

    // Add the URL as the user's avatar in the additional data sent to the database
    // const { data, error } = await supabase.auth.signUp({
    //   email: d.email,
    //   password: d.password ?? "",
    //   options: {
    //     // emailRedirectTo: `${window.location.origin}/auth/callback`,
    //     data: {
    //       // avatar: urlData.publicUrl,
    //       confirmPassword: d.confirmPassword ?? "",
    //       firstname: d.firstname,
    //       lastname: d.lastname,
    //       role: d.role,
    //       shop: d.shop,
    //     },
    //   },
    // });

    // console.log(d, data);
    // supabase.from("users").insert([data]);

