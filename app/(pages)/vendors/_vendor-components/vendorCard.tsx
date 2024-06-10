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
        className="relative flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer transition-shadow hover:shadow-md"
      >
        <div className="flex items-center justify-center w-16 h-16 overflow-hidden bg-gray-300 rounded-full shrink-0">
          <img
            src={shop.logo as string}
            alt={shop.shopname as string}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col ml-4">
          <h2 className="text-lg font-semibold mb-1">{shop.shopname}</h2>
          <p className="text-sm text-gray-500 mb-1">{shop.state}</p>
          <div className="flex items-center text-sm text-gray-500">
            <CiLocationOn className="mr-1 text-xl" />
            <p>{shop.address}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VendorCard;
