'use client';

import { QuotesForm } from "./quotesform";



export default function QuoteSection () {


    return (
        <div className="relative z-10 flex justify-between items-center mx-auto w-full bg-[url('https://res.cloudinary.com/the-bluemason-group/image/upload/v1709002199/quotesbg_wx0f2s.png')] border-2 h-auto bg-cover bg-no-repeat bg-center before:content-['']
        before:absolute
        before:inset-0
        before:block
        before:bg-gradient-to-r
        before:from-blue-600
        before:to-gray-100
        before:opacity-75
        before:z-[-5] p-16">
            <div className="text-white w-96">
                <h1>An easy way to send requests to all suppliers</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora architecto quibusdam aliquam sunt odio. Praesentium.</p>
            </div>
            <QuotesForm />
        </div>
    )
}