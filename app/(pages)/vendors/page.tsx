"use client";

import { getAllShops } from "@/actions/vendor";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import VendorCard from "./_vendor-components/vendorCard";
import Link from "next/link";

export interface Shop {
  shopname: string | null;
  description: string | null;
  address: string | null;
  logo: string | null;
  banner: string | null;
  slug: string | null;
  bankName: string | null;
  accountNo: string | null;
  country: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  phoneNumber: string | null;
  website: string | null;
  accountName: string | null;
}

const Vendors = () => {
  const [shops, setShops] = useState<Shop[]>([]);
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);

  useEffect(() => {
    const fetchShops = async () => {
      const vendorStore = await getAllShops();
      setShops(vendorStore);
    };
    fetchShops();
  }, []);

  const handleShopSelect = (shop: Shop) => {
    setSelectedShop(shop);
  };

  return (
    <div className="min-h-screen bg-light ">
      <div className="mx-auto flex w-full max-w-6xl flex-col p-8 px-5 pt-14 lg:px-6 2xl:px-8">
        <h3 className="mb-8 text-2xl font-bold text-heading">All Shops</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shops.map((shop) => (
            <Link href={`/vendors/slug=${shop.slug}`} key={shop.shopname}>
              <VendorCard
                key={shop.shopname}
                shop={shop}
                onShopSelect={handleShopSelect}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vendors;
