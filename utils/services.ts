import { Product } from "@/app/types/types";

import clay from "@/public/recommended/clay-pot.png";
import flask from "@/public/recommended/flask.png";
import headset from "@/public/recommended/headset.png";
import shorts from "@/public/recommended/shorts.png";
import wallet from "@/public/recommended/wallet.png";
import coat from "@/public/recommended/coat.png";
import shirt from "@/public/recommended/shirt1.png";
import suit from "@/public/recommended/suit.png";
import bag from "@/public/recommended/bag.png";
import phones from "@/public/phones.png";

export const Products: Product[] = [
    {
        id: 1,
        name: "White Shirt",
        price: 100,
        imageUrl: shirt
    },
    {
        id: 2,
        name: "Brown Coat",
        price: 200,
        imageUrl: coat
    },
    {
        id: 3,
        name: "Clay Pot",
        price: 300,
        imageUrl: clay
    },
    {
        id: 4,
        name: "Flask",
        price: 400,
        imageUrl: flask
    },
    {
        id: 5,
        name: "Headset",
        price: 500,
        imageUrl: headset},
    {
        id: 6,
        name: "Shorts",
        price: 600,
        imageUrl: shorts},
    {
        id: 7,
        name: "Wallet",
        price: 700,
        imageUrl: wallet
    },
    {
        id: 8,
        name: "Suit",
        price: 800,
        imageUrl: suit
    },
    {
        id: 9,
        name: "Bag",
        price: 900,
        imageUrl: bag
    },
    {
        id: 10,
        name: "Phones",
        price: 1000,
        imageUrl: phones}
]



// import { usePaystackPayment } from 'react-paystack';
// import { Button } from "@/components/ui/button";

// const config = {
//   reference: new Date().getTime().toString(),
//   email: "user@example.com",
//   amount: 200000, // Amount is in the country's lowest currency. E.g Kobo, so 200000 kobo = N2000
//   publicKey: "pk_test_c5b0e671f1bfc942f5a463e3b8e07b043b3f529c",
// };

// // you can call this function anything
// const handleSuccess = (
//   reference: any,
//   setPaymentProcessed: (status: boolean) => void
// ) => {
//   // Implementation for whatever you want to do with reference and after success call.
//   console.log(reference);
//   setPaymentProcessed(true);
//   alert("Paystack Payment Successful");
// };

// // you can call this function anything
// const handleClose = () => {
//   // implementation for whatever you want to do when the Paystack dialog closed.
//   console.log("closed");
// };

// const onSuccess = (reference: any) => {
//   // Implementation for whatever you want to do with reference and after success call.
//   console.log(reference);
// };

// // you can call this function anything
// const onClose = () => {
//   // implementation for  whatever you want to do when the Paystack dialog closed.
//   console.log('closed')
// }

// export function ProcessPayment({
//   setPaymentProcessed,
// }: {
//   setPaymentProcessed: (status: boolean) => void;
// }) {
//   const componentProps = {
//     ...config,
//     text: "Paystack Button Implementation",
//     onSuccess: (reference: any) =>
//       handleSuccess(reference, setPaymentProcessed),
//     onClose: handleClose,
//   };

//   const initializePayment = usePaystackPayment(config);


//   return (
//     <div className="App">
//       <button onClick={() => {
//                 initializePayment(onSuccess)
//             }}>Make Payment</button>
//         )
      
//     </div>
//   );
// }
