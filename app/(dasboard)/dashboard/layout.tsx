import { fontSans } from "@/app/(pages)/layout";
import AuthProvider from "@/components/authprovider";
import AdminMainSection from "@/components/dasboard/admin-main";
import AdminSideBar from "@/components/dasboard/admin-sidebar";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { GeistSans } from "geist/font/sans";
import { cookies } from "next/headers";

async function RootLayout({
  children,
  isDashboard,
}: {
  children: React.ReactNode;
  isDashboard?: boolean;
}) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en" className={GeistSans.className}>
      <body className={cn(fontSans.variable)}>
        <main className="min-h-screen  md:p-0 w-full">
          <AuthProvider accessToken={session?.access_token}>
            <div className="container flex items-start justify-start">
              <AdminSideBar />
              <AdminMainSection>{children}</AdminMainSection>
            </div>
            <Footer showSubscribe={false} />
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
