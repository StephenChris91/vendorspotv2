import { shop } from "@prisma/client";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";

interface VendorCardProps {
  shop: shop;
  onShopSelect: (shop: shop) => void;
}

const VendorCard: React.FC<VendorCardProps> = ({ shop, onShopSelect }) => {
  return (
    <Link href={`/vendors/${shop.id}`} passHref>
      <div
        onClick={() => onShopSelect(shop)}
        className="relative flex cursor-pointer items-center rounded border border-gray-200 p-5"
      >
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-300">
          <img
            src={shop.logo as string}
            alt={shop.shopname as string}
            className="w-20 h-20 rounded-full"
          />
        </div>
        <div className="flex flex-col ltr:ml-4 rtl:mr-4">
          <h2 className="mb-2 text-lg font-semibold">{shop.shopname}</h2>
          <div className="flex flex-col justify-between mx-auto gap-2">
            <p>{shop.state}</p>
            <div className="flex justify-between items-center mx-auto gap-2">
              <CiLocationOn className="text-3xl" />
              <p>{shop.address}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VendorCard;
