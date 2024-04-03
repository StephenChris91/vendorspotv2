// page.tsx
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Category from "@/components/category";
import DealsSection from "@/components/deals-section";
import ExtraServices from "@/components/extra-services";
import QuoteSection from "@/components/quotesection";
import RecommendedProducts from "@/components/recommended";
import { Button } from "@/components/ui/button";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Layout from "./layout";
import { SessionProvider } from "../context/user-context/user-context";
async function getSession() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return { session };
}

export default async function Page() {
  const { session } = await getSession();

  if (session) {
    return redirect("/dashboard");
  }

  return (
    <SessionProvider session={session}>
      <div className="flex-1 w-full flex flex-col gap-5 items-center">
        <Layout>
          <Header />
          <DealsSection />
          <Category />
          <QuoteSection />
          <RecommendedProducts />
          <ExtraServices />
        </Layout>
      </div>
    </SessionProvider>
  );
}