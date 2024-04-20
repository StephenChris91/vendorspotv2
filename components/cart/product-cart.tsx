import EmptyCartIcon from "../icons/empt-cart-icon";
import EmptyShoppingBagIcon from "../icons/empty-shopping-bag-icon";

// import ProductCartTray from "./product-cart-tray";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CloseIcon from "../icons/close-icon";

const ProductCart = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="fixed top-1/2 right-0 z-40 -mt-12 hidden flex-col items-center justify-center rounded bg-blue-700 p-3 pt-3.5 text-sm font-semibold text-light shadow-900 transition-colors duration-200 hover:bg-blue-600 focus:outline-0 ltr:right-0 ltr:rounded-tr-none ltr:rounded-br-none rtl:left-0 rtl:rounded-tl-none rtl:rounded-bl-none lg:flex">
          <span className="flex mr-4 pb-0.5 text-white">
            <EmptyShoppingBagIcon />
            <span className="flex ltr:ml-2 rtl:mr-2 text-white">0 Item</span>
          </span>
          <span className="w-full px-2 py-2 mt-3 rounded bg-white text-blue-500">
            $0.00
          </span>
        </button>
      </SheetTrigger>
      <SheetContent className="p-0 max-w-96">
        <div className="absolute inset-y-0 outline-none ltr:right-0 rtl:right-0 ">
          <div className="h-full w-96 max-w-full">
            <div className="flex h-full flex-col bg-white text-base shadow-xl">
              <div
                data-overlayscrollbars-initialize=""
                className="h-full w-full flex justify-between items-center mx-auto "
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
                    <header className="fixed top-0 z-10 flex w-96 max-w-md items-center justify-between border-b border-border-200 border-opacity-75 bg-light px-6 py-4">
                      <div className="flex font-semibold text-blue-500">
                        <EmptyShoppingBagIcon />
                        <span className="flex ltr:ml-2 rtl:mr-2">0 Item</span>
                      </div>
                      <button className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-muted transition-all duration-200 hover:bg-blue-600 hover:text-light focus:bg-blue-600 focus:text-white focus:outline-0 ltr:ml-3 ltr:-mr-2 rtl:mr-3 rtl:-ml-2">
                        <span className="sr-only">close</span>
                        <CloseIcon />
                      </button>
                    </header>
                    <div className="grow pt-16 pb-20 mx-auto">
                      <EmptyCartIcon />
                      <div
                        className="flex h-full flex-col items-center justify-center"
                        // style={{ opacity: "1" }}
                      >
                        {/* <EmptyCartIcon /> */}
                        <h4 className="mt-6 text-base font-semibold">
                          No products found
                        </h4>
                      </div>
                    </div>
                    <footer className="fixed bottom-0 z-10 w-96 max-w-full bg-white px-6 py-5">
                      <button className="flex h-12 w-full justify-between rounded-full bg-blue-500 p-1 text-sm font-bold shadow-700 transition-colors hover:bg-blue-600 focus:bg-blue-600 focus:outline-0 md:h-14">
                        <span className="flex h-full flex-1 items-center px-5 text-white">
                          Checkout
                        </span>
                        <span className="flex h-full shrink-0 items-center rounded-full bg-white px-5 text-blue-500">
                          $0.00
                        </span>
                      </button>
                    </footer>
                  </section>
                </div>
                {/* <div className="os-scrollbar os-scrollbar-horizontal os-theme-dark os-scrollbar-auto-hide os-scrollbar-auto-hide-hidden os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
                  <div className="os-scrollbar-track">
                    <div
                      className="os-scrollbar-handle"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div> */}
                {/* <div className="os-scrollbar os-scrollbar-vertical os-theme-dark os-scrollbar-auto-hide os-scrollbar-auto-hide-hidden os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
                  <div className="os-scrollbar-track">
                    <div
                      className="os-scrollbar-handle"
                      style={{ height: "100%" }}
                    ></div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProductCart;
