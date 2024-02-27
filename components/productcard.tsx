import { Product } from "@/app/types/types"
import Image from "next/image"
import Link from "next/link"


export default function ProductCard ( { id,  name, imageUrl, price }: Product  ): JSX.Element {

    return (
        <Link href={`/product/${id}`} key={id}>
            <div className="flex flex-col justify-between items-start p-5 m-0 bg-white rounded-sm w-auto h-auto">
                <Image src={imageUrl} alt={name} className="w-32 h-32 mx-auto" />
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2">
                        <span className="">₦{price}</span>
                    </div>
                    <p className="font-normal text-gray-500">{name}</p>
                </div>
            </div>
        </Link>
    )
}