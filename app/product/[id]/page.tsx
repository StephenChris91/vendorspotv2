'use client';

import { useParams } from "next/navigation"

export default function Product () {

    const { id } = useParams()
    return (
        <div>
            <h1>Product {id}</h1>
        </div>
    )
}