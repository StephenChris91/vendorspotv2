import { StaticImageData } from "next/image";

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

export type User = {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    confirmPassword: string;
    role?: boolean;
    shop?: boolean;
}