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