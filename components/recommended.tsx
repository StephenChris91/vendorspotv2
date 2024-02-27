import { Product } from "@/app/types/types"

import { Products } from "@/utils/services"
import ProductCard from "./productcard"


export default function RecommendedProducts () {

    return (
        <div className="w-full flex flex-col gap-5">
            <h1>Recommended Products</h1>
            <div className="grid grid-cols-5 gap-7 w-full">
                {Products.map((product: Product) => (
                    <ProductCard key={product.id} {...product}/>
                ))}
            </div>
        </div>
    )
}