import { Product, catTitle } from "@/app/types/types";
import CategoryDisplay from "./categorydisplay";
import watch from '/public/watch.png'
import phones from '/public/phones.png'
import camera from '/public/camera.png'
import laptop from '/public/laptop.png'
import headset from '/public/headset.png'


export type bgImageProps = {
    image: string;
}

const deals: Product[] = [
    {
            id: 1,
            name: "Watches",
            imageUrl: watch,
            sale: "40%",
            price: 900,

        },
        {
            id: 2,
            name: "Phones",
            imageUrl: phones,
        sale: "40%",
        price: 523
      },
      {
        id: 3,
        name: "Laptops",
        imageUrl: laptop,
        sale: "40%",
        price: 200
      },
      {
        id: 4,
        name: "Headsets",
        imageUrl: headset,
        sale: "40%",
        price: 100
      },
      {
        id: 5,
        name: "Cameras",
        imageUrl: camera,
        sale: "40%",
        price: 1000
      },
      {
        id: 6,
        name: "Cameras",
        imageUrl: camera,
        sale: "40%",
        price: 1000
      },
      {
        id: 7,
        name: "Cameras",
        imageUrl: camera,
        sale: "40%",
        price: 1000
      },
      {
        id: 8,
        name: "Cameras",
        imageUrl: camera,
        sale: "40%",
        price: 1000
      }
 ]


const homewareCategory: Product[] = deals; // Add type annotation to homewareCategory array
let homeCatTitle1 = 'Home & Outdoor'
let homeCatTitle2 = 'Consumer electronics and gadgets'

const bgImage1 = "bg-[url('https://res.cloudinary.com/the-bluemason-group/image/upload/v1708998751/homecatbg_jpl3ns.png')]";
const bgImage2 = "bg-[url('https://res.cloudinary.com/the-bluemason-group/image/upload/v1708999293/consumerBgImage_rs2ltl.png')]";



export default function Category () {

    return (
        <div className="flex flex-col gap-3 w-full" >
            <CategoryDisplay array={homewareCategory} title={homeCatTitle1} bgImage={bgImage1}/> 
            <CategoryDisplay array={homewareCategory} title={homeCatTitle2} bgImage={bgImage2}/> 
        </div>
    )
}