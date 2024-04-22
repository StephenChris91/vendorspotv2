import sale1 from "@/public/shop/sale-1.png";
import sale2 from "@/public/shop/sale-2.png";
import Image from "next/image";

const Banners = () => {
  return (
    <section className="small-wrapper w-full flex justify-between items-center mx-auto gap-3 mb-12">
      <div className="w-1/2 rounded-md">
        <Image
          src={sale1}
          alt="alt"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
          className="rounded-md"
        />
      </div>
      <div className="w-1/2 rounded-md">
        <Image
          src={sale2}
          alt=""
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
          className="rounded-md"
        />
      </div>
    </section>
  );
};

export default Banners;
