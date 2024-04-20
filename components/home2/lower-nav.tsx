import { CategoriesMegaMenu } from "./categories-mega-menu";
import { IoLocationOutline } from "react-icons/io5";
import { PiArrowsCounterClockwise } from "react-icons/pi";
import { PiHeadphonesLight } from "react-icons/pi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { PiPhoneCallLight } from "react-icons/pi";
import Link from "next/link";

const LowerNav = () => {
  const menus = [
    {
      title: "Track Order",
      icon: <IoLocationOutline />,
    },
    {
      title: "Compare",
      icon: <PiArrowsCounterClockwise />,
    },
    {
      title: "Customer Support",
      icon: <PiHeadphonesLight />,
    },
    {
      title: "Need Info",
      icon: <AiOutlineInfoCircle />,
    },
  ];
  return (
    <div className={`bg-gray-100 w-full`}>
      <div
        className={`small-wrapper w-full flex gap-5 justify-between items-center mx-auto p-5 `}
      >
        <div className={`flex gap-2`}>
          <CategoriesMegaMenu />
          <div className={`flex gap-4 items-center justify-between mx-auto`}>
            {menus.map((menu) => (
              <Link href="/" key={menu.title}>
                <p
                  className={`flex mx-auto items-center gap-2 hover:text-blue-700`}
                >
                  {menu.icon}
                  <span>{menu.title}</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className={`flex mx-auto gap-2 justify-between`}>
          <PiPhoneCallLight />
          <span>123-456-7890</span>
        </div>
      </div>
    </div>
  );
};

export default LowerNav;
