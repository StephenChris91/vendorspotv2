import Link from 'next/link';
import bannerImg from '@/app/main-banner.png'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from './ui/button';
import CategoryDropdown from './categories-dropdown';
import UserComponent from './usercomponent';
export default function Header() {



  return (
    <div className="grid grid-flow-row grid-cols-5 gap-1 mx-auto items-center bg-gray-50 p-3 rounded-sm bg-cover bg-no-repeat bg-center before:content-['']
    before:absolute
    before:inset-0
    before:block
    before:bg-gradient-to-r
    before:from-orange-200
    before:to-blue-500
    before:opacity-75
    before:z-[-5]">
      <CategoryDropdown />
      <div className={cn("col-span-3 rounded-sm")}>
        <Image src={bannerImg} alt="Main Banner" width={undefined} height={undefined} className='rounded-sm'/>
      </div>
      <UserComponent />
    </div>
  );
}
