import Image from "next/image";


//import service images from '../public/services
import service1 from '../public/services/service1.png'
import service2 from '../public/services/service2.png'
import service3 from '../public/services/service3.png'
import service4 from '../public/services/service4.png'

//import icons
import { IoIosSearch } from "react-icons/io";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { MdOutlineSend } from "react-icons/md";
import { BiShieldQuarter } from "react-icons/bi";


export default function ExtraServices() {
    return (
        <div className="w-full">
            <h1 className="mb-3">Our Extra Services</h1>
        <div className="flex justify-between gap-2 items-center mx-auto w-full">
            <div className="relative bg-white h-52 rounded-sm">
                <Image src={service1} className="" width={undefined} height={undefined} alt="..."/>
                <div className="absolute p-4 rounded-full right-2 top-24 bg-blue-600 text-white z-10 ">
                    <IoIosSearch className="font-bold text-2xl"/>
                </div>
                    <p className="absolute bottom-2 w-2/4 left-4">Source from Industry Hubs</p>
            </div>
            <div className="relative bg-white h-52 rounded-sm">
                <Image src={service2} className="" width={undefined} height={undefined} alt="..." />
                <div className="absolute p-4 rounded-full right-2 top-24 bg-blue-600  text-white z-10">
                    <HiOutlineArchiveBox className="font-bold text-2xl"/>
                </div>
                    <p className="absolute bottom-2 w-2/4 left-4">Customize Your Products</p>
            </div>
            <div className="relative bg-white h-52 rounded-md">
                <Image src={service3} className="" width={undefined} height={undefined} alt="..." />
                <div className="absolute p-4 rounded-full right-2 top-24 bg-blue-600  text-white z-10">
                    <MdOutlineSend className="font-bold text-2xl"/>
                </div>
                    <p className="absolute bottom-2 w-3/4 left-4">Fast, reliable shipping by ocean or air</p>
            </div>
            <div className="relative bg-white h-52 rounded-md">
                <Image src={service4} className="" width={undefined} height={undefined} alt="..." />
                <div className="absolute p-4 rounded-full right-2 top-24 bg-blue-600  text-white z-10">
                    <BiShieldQuarter className="font-bold text-2xl"/>
                </div>
                    <p className="absolute bottom-2 w-3/4 left-4">Product monitoring and inspection</p>
            </div>
        </div>
        </div>
    )
}