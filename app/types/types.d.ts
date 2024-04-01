import { StaticImageData } from "next/image";
import { JSXElementConstructor } from "react";

export interface Product {
    id: number;
    name: string;
    imageUrl: StaticImageData;
    sale?: string;
    price?: number;
}

export interface catTitle {
    title: string;
}

export interface User  {
    email: string;
    password: string | undefined;
    firstname?: string;
    lastname?: string;
    confirmPassword?: string;
    role?: boolean;
    shop?: boolean;
    avatar?: HTMLFileInputElement;
}

export interface TabProps {
    title: string;
    content: JSXElement;
  }

export type OrderProcessing = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
    trackingNumber: number
    customer: string
    productQty: number
    orderDate: string
    total: number
    actions?: JSXElement
  }

export type ProductType = {
    id: string,
    product: string,
    productType: "simple" | "variables",
    shop: string,
    quantity: number,
    status: "pendings" | "processing" | "success" | "failed",
}

export type DraftProductType = {
    id: string,
    product: string,
    productType: "simple" | "variables",
    shop: string,
    quantity: number,
    status: "pendings" | "processing" | "success" | "failed",
}