import { Product, catTitle } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

import bg from '@/public/homecatbg.png'
import { bgImageProps } from "./category";

export type CategoryDisplayProps = {
    array: Product[];
    image?: string;
    title?: string;
    bgImage?: string;
}

export default function CategoryDisplay ({ array, title, bgImage }: CategoryDisplayProps ): JSX.Element {
    return (
        <div className="flex justify-center items-center mx-auto bg-gray-50 w-full">
            <div className={`relative z-10 w-1/3 border-2 h-[280px] ${bgImage} bg-cover bg-no-repeat bg-center before:content-['']
                before:absolute
                before:inset-0
                before:block
                before:bg-gradient-to-r
                before:from-blue-600
                before:to-gray-100
                before:opacity-65
                before:z-[-5] px-7 py-16 `}
            >
                <h1 className="mb-5 text-white">{title}</h1>
                <Button className="bg-gray-100 text-gray-800 shadow-none hover:bg-blue-600 hover:text-white">Shop Now</Button>
            </div>
            <div className="grid grid-cols-4 p-3 col-span-1 bg-gray-50 w-full h-auto grow ">
                {array?.map((product) => (
                    <Link href={`/product/${product.id}`} key={product.id}>
                        <div className="flex flex-col items-center border-2 p-3 relative h-32">
                            <div className="flex flex-col justify-center absolute top-3 left-4">
                                <h4 className="">{product.name}</h4>
                                <p className="text-gray-600 text-sm">From <br/>USD{product.price}</p>
                            </div>
                            <Image src={product.imageUrl} alt={product.name} className="w-12 h-12 absolute bottom-2 right-4" />
                        </div>
                    </Link>
                ))}
            </div>
            </div>
    );
}
