import { StaticImageData } from "next/image";
import { JSXElementConstructor } from "react";
import { JsxElement } from "typescript";

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
export type InventoryType = {
    id: string,
    name: string,
    quantity: number,
    quantity_sold: number,
    sku: number
}
export type CategoriesType = {
    id: string,
    name: string,
    details: string,
    icon: string,
    slug: string,
    group: string
}
export type TagsType = {
    id: string,
    name: string,
    icon: string,
    slug: string,
    group: string
}
export type TaxesType = {
    id: string,
    name: string,
    country: string,
    city: string,
    zip: string,
}
export type ShippingType = {
    id: string,
    name: string,
    amount: number,
    global: string,
    type : string,
}
export type WithdrawsType = {
    shipId: string,
    shop: string,
    created: string,
    payment_method: string,
    status : string,
}
export type RefundsReasonsType = {
    id: string,
    name: string,
    slug: string
}
export type ReportedRefundsType = {
    id: string,
    heading: string,
    description: string,
    applied_on: string,
    status : string,
}
export type RefundsPolicyType = {
    id: string,
    heading: string,
    description: string,
    applied_on: string,
    status : string,
}
export type PageGroupType = {
    id: string,
    homepage: string,
    slug: string,
    icon: string,
}
export type FAQsTYpe = {
    id: string,
    title: string,
    description: string,
    type : string,
    issued_by: string,
}
export type TermsAndConditionsType = {
    id: string,
    title: string,
    description: string,
    type : string,
    issued_by: string,
    status: string,
    approval_action: string,
}
export type OrdersType = {
    tracking_number: number,
    customer: JSXElement,
    products: number,
    order_date : string,
    delivery_fee: float,
    total: float,
    status: string,
}
export type TransactionType = {
    tracking_number: number,
    product_price: float,
    taxable_amount: float,
    discount : float,
    delivery_fee: float,
    payment_gateway: string,
    payment_status: string,
    total: number
}
export type AllUserType = {
    id: string,
    name: number,
    permissions: float,
    available_wallet_point: float,
    status : float,
}
export type AllVendorsTypes = {
    id: string,
    name: number,
    permissions: float,
    available_wallet_point: float,
    status : float,
}
export type AllPendingVendorsTypes = {
    id: string,
    name: number,
    permissions: float,
    available_wallet_point: float,
    status : float,
}