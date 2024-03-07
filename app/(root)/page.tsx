import Header from "@/components/Header";
import Category from "@/components/category";
import DealsSection from "@/components/deals-section";
import ExtraServices from "@/components/extra-services";
import QuoteSection from "@/components/quotesection";
import RecommendedProducts from "@/components/recommended";
import { Button } from "@/components/ui/button";

export default async function Index() {
  // const canInitSupabaseClient = () => {
  //   // This function is just for the interactive tutorial.
  //   // Feel free to remove it once you have Supabase connected.
  //   try {
  //     createClient();
  //     return true;
  //   } catch (e) {
  //     return false;
  //   }
  // };

  // const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-5 items-center">
      <Header />
      <DealsSection />
      <Category />
      <QuoteSection />
      <RecommendedProducts />
      <ExtraServices />
    </div>
  );
}
