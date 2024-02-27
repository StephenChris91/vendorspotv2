'use client';
import Link from 'next/link';
import { useState } from 'react';


export const SubNav = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
       <>
        <div className="flex justify-between mx-auto w-full items-center border-b-2 py-2 px-32 bg-gray-50 mb-6">
            <div className='flex space-x-5 items-start'>
            <div className="">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
                <Link href='/' className='hover:text-blue-600'>All Categories</Link>
                <Link href='/' className='hover:text-blue-600'>Hot Offers</Link>
                <Link href='/' className='hover:text-blue-600'>Flash Sales</Link>
                <Link href='/' className='hover:text-blue-600'>Vendors</Link>
                <Link href='/' className='hover:text-blue-600'>About Us</Link>
            </div>
            <div className='flex space-x-5'>
                <div>Language</div>
                <div>Shipping</div>
            </div>
        </div>
       </>
    );
    }