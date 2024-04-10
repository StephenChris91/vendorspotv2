// import { useState, Fragment } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import ProductCartTray from "./product-cart-tray";
// import ProductCart from "./product-cart";
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";

// export default function CartDialog() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   function openModal() {
//     setIsModalOpen(true);
//   }

//   return (
//     <>
//       {/* <Transition
//         show={isModalOpen}
//         enter="transition duration-100 ease-out"
//         enterFrom="transform scale-95 opacity-0"
//         enterTo="transform scale-100 opacity-100"
//         leave="transition duration-75 ease-out"
//         leaveFrom="transform scale-100 opacity-100"
//         leaveTo="transform scale-95 opacity-0"
//         as={Fragment}
//       >
//         <Dialog
//           open={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           className="relative z-50"
//         >
//           <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

//           <Dialog.Panel></Dialog.Panel>
//         </Dialog>
//       </Transition> */}
//       <Drawer>
//         <DrawerTrigger asChild>
//           <ProductCartTray />
//         </DrawerTrigger>
//         <DrawerContent>
//           <ProductCart />
//         </DrawerContent>
//       </Drawer>
//     </>
//   );
// }
