// import DealsCountdown from "./deals-countdown";
import Image from "next/image";
import dynamic from "next/dynamic";

import watch from '/public/watch.png'
import phones from '/public/phones.png'
import camera from '/public/camera.png'
import laptop from '/public/laptop.png'
import headset from '/public/headset.png'
import { Badge } from "@/components/ui/badge"
import { Product } from "@/app/types/types";


const DealsCountdown = dynamic(() => import("@/components/deals-countdown"), {
  ssr: false,
});


 const deals: Product[] = [
    {
            id: 1,
            name: "Watches",
            imageUrl: watch,
            sale: "40%"
        },
        {
            id: 2,
            name: "Phones",
            imageUrl: phones,
        sale: "40%"
      },
      {
        id: 3,
        name: "Laptops",
        imageUrl: laptop,
        sale: "40%"
      },
      {
        id: 4,
        name: "Headsets",
        imageUrl: headset,
        sale: "40%"
      },
      {
        id: 5,
        name: "Cameras",
        imageUrl: camera,
        sale: "40%"
      }
 ]


export default function DealsSection(): JSX.Element {

    return (
        <div className=" bg-gray-50 p-5 rounded-sm w-auto h-auto">
            <div className="flex justify-start items-start mx-auto gap-0 h-full">
                <div className="border-2 p-5 rounded-sm min-h-[280px] w-full">
                    <DealsCountdown />
                </div>
                <div className=" border-2 p-5 rounded-sm h-auto w-auto mx-auto flex">
                    {deals?.map(deal => (
                        <div key={deal.id} className="p-5 border-2 flex flex-col items-center justify-between mx-auto">
                            <div className="flex justify-between items-center mx-auto">
                                <Image
                                    src={deal.imageUrl}
                                    alt={deal.name}
                                    className="rounded-sm"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <div className="p-5 text-center">
                                <h1 className="text-gray-900 text-center font-normal text-xl mb-2">
                                    {deal.name}
                                </h1>
                                    <Badge className="bg-red-100 hover:bg-red-600 hover:text-white cursor-pointer bg-opacity-80 rounded-full shadow-none text-red-600">-{deal.sale}</Badge>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
 }