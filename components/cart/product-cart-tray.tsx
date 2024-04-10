import { useState } from "react";
import EmptyShoppingBagIcon from "../icons/empty-shopping-bag-icon";

const ProductCartTray = ({ isOpen, onClose }: any) => {
  // const [isCartOpen, setIsCartOpen] = useState(false);

  // function toggleCart() {
  //   setIsCartOpen(!isCartOpen);
  // }
  return (
    <button className="product-cart fixed top-1/2 right-0 z-40 -mt-12 hidden flex-col items-center justify-center rounded bg-green-500 p-3 pt-3.5 text-sm font-semibold text-light shadow-900 transition-colors duration-200 hover:bg-green-600 focus:outline-0 ltr:right-0 ltr:rounded-tr-none ltr:rounded-br-none rtl:left-0 rtl:rounded-tl-none rtl:rounded-bl-none lg:flex">
      <span className="flex mr-4 pb-0.5 text-white">
        <EmptyShoppingBagIcon />
        <span className="flex ltr:ml-2 rtl:mr-2 text-white">0 Item</span>
      </span>
      <span className="w-full px-2 py-2 mt-3 rounded bg-white text-green-500">
        $0.00
      </span>
    </button>
  );
};

export default ProductCartTray;
