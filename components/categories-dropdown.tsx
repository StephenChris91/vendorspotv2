'use client';
import Link from 'next/link';
import { useState } from 'react';



export default function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
        <div className="flex flex-col flex-1 gap-3 p-3 col-span-1">
        <Link href='/' className='hover:bg-blue-100 hover:text-blue-500 hover:font-normal p-3 rounded-sm'>Automobiles</Link>
        <Link href='/' className='hover:bg-blue-100 hover:text-blue-500 hover:font-normal p-3 rounded-sm'>Clothes & Wears</Link>
        <Link href='/' className='hover:bg-blue-100 hover:text-blue-500 hover:font-normal p-3 rounded-sm'>Home Interiors</Link>
        <Link href='/' className='hover:bg-blue-100 hover:text-blue-500 hover:font-normal p-3 rounded-sm'>Computers & Tech</Link>
        <Link href='/' className='hover:bg-blue-100 hover:text-blue-500 hover:font-normal p-3 rounded-sm'>Tools & Equipments</Link>
        <Link href='/' className='hover:bg-blue-100 hover:text-blue-500 hover:font-normal p-3 rounded-sm'>Sports & Outdoor</Link>
        <Link href='/' className='hover:bg-blue-100 hover:text-blue-500 hover:font-normal p-3 rounded-sm'>Animals & Pets</Link>
      </div>
    </>
  );
}