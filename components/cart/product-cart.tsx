"use client";

import CloseIcon from "@/components/icons/close-icon";
import EmptyShoppingBagIcon from "@/components/icons/empty-shopping-bag-icon";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { useCart } from "@/lib/context/cart/cart-provider";
import { useRouter } from "next/navigation";
import { CartItem } from "@/app/types/types";
import Link from "next/link";
import EmptyCartIcon from "../icons/empt-cart-icon";

const ProductCart: React.FC = () => {
  const router = useRouter();
  const { cart, removeFromCart } = useCart();

  // Calculate total quantity and total price
  const totalQuantity = cart.reduce((sum, item) => {
    if (typeof item.quantity === "number") {
      return sum + item.quantity;
    }
    console.warn("Invalid quantity", item);
    return sum;
  }, 0);

  const totalPrice = cart.reduce((sum, item) => {
    if (typeof item.price === "number" && typeof item.quantity === "number") {
      return sum + item.price * item.quantity;
    }
    console.warn("Invalid price or quantity", item);
    return sum;
  }, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="fixed top-1/2 right-0 z-40 -mt-12 hidden flex-col items-center justify-center rounded bg-blue-700 p-3 pt-3.5 text-sm font-semibold text-light shadow-900 transition-colors duration-200 hover:bg-blue-600 focus:outline-0 ltr:right-0 ltr:rounded-tr-none ltr:rounded-br-none rtl:left-0 rtl:rounded-tl-none rtl:rounded-bl-none lg:flex">
          <span className="flex mr-4 pb-0.5 text-white">
            <EmptyShoppingBagIcon />
            <span className="flex ltr:ml-2 rtl:mr-2 text-white">
              {totalQuantity} Item{totalQuantity !== 1 && "s"}
            </span>
          </span>
          <span className="w-full px-2 py-2 mt-3 rounded bg-white text-blue-500">
            ${totalPrice.toFixed(2)}
          </span>
        </button>
      </SheetTrigger>
      <SheetContent className="p-0 max-w-96">
        <div className="absolute inset-y-0 outline-none ltr:right-0 rtl:right-0">
          <div className="h-full w-96 max-w-full">
            <div className="flex h-full flex-col bg-white text-base shadow-xl">
              <div
                data-overlayscrollbars-initialize=""
                className="h-full w-full flex justify-between items-center mx-auto"
                data-overlayscrollbars="host"
              >
                <div className="os-size-observer">
                  <div className="os-size-observer-listener ltr"></div>
                </div>
                <div
                  data-overlayscrollbars-contents=""
                  data-overlayscrollbars-viewport="scrollbarHidden"
                  className="mr-0 mb-0 ml-0 top-0 left-0 w-full p-0"
                >
                  <section className="relative flex h-full flex-col">
                    <header className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-border-200 border-opacity-75 bg-white px-6 py-4 shadow">
                      <div className="flex font-semibold text-blue-500">
                        <EmptyShoppingBagIcon />
                        <span className="flex ltr:ml-2 rtl:mr-2">
                          {totalQuantity} Item{totalQuantity !== 1 && "s"}
                        </span>
                      </div>
                      <SheetClose asChild>
                        <button className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-white transition-all duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-0 ltr:ml-3 ltr:-mr-2 rtl:mr-3 rtl:-ml-2">
                          <span className="sr-only">close</span>
                          <CloseIcon />
                        </button>
                      </SheetClose>
                    </header>
                    <div className="grow pt-20 pb-24 mx-auto w-full max-w-full overflow-y-auto">
                      {cart.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center">
                          <EmptyCartIcon />
                          <h4 className="mt-6 text-base font-semibold">
                            No products found
                          </h4>
                        </div>
                      ) : (
                        <div className="p-4 space-y-4">
                          {cart.map((item) => (
                            <div
                              key={item.id}
                              className="flex justify-between items-center border-b py-4"
                            >
                              <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200">
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <span className="font-semibold">
                                    {item.name}
                                  </span>
                                  <span className="text-sm text-gray-600">
                                    Quantity: {item.quantity}
                                  </span>
                                  <span className="text-sm text-gray-600">
                                    ${(item.price * item.quantity).toFixed(2)}
                                  </span>
                                </div>
                              </div>
                              <button
                                className="text-red-500 hover:text-red-700"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <CloseIcon />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <footer className="fixed bottom-0 z-10 w-full bg-white px-6 py-5 shadow">
                      <Link
                        href="/checkout"
                        className="flex h-12 w-full justify-between items-center rounded-full bg-blue-500 p-1 text-sm font-bold shadow-700 transition-colors hover:bg-blue-600 focus:bg-blue-600 focus:outline-0 md:h-14"
                      >
                        <span className="flex h-full flex-1 items-center px-5 text-white">
                          Checkout
                        </span>
                        <span className="flex h-full shrink-0 items-center rounded-full bg-white px-5 text-blue-500">
                          ${totalPrice.toFixed(2)}
                        </span>
                      </Link>
                    </footer>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProductCart;
