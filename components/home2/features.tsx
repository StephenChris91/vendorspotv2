import { PiPackageDuotone } from "react-icons/pi";
import { PiTrophyDuotone } from "react-icons/pi";
import { PiCreditCardDuotone } from "react-icons/pi";
import { PiHeadphonesDuotone } from "react-icons/pi";
import { Separator } from "../ui/separator";

const Features = () => {
  return (
    <section
      className={`w-full rounded-sm border border-gray-200 p-4 flex justify-between items-center mx-auto gap-3 mb-12`}
    >
      <div className="flex justify-between items-center mx-auto space-x-3">
        <PiPackageDuotone className="w-10 h-10 text-gray-500" />
        <div>
          <h6 className="text-gray-800 font-bold text-xl">
            <span className="text-blue-500">FASTEST DELIVERY</span>
          </h6>
          <p className="text-gray-600">Delivery within the specified</p>
        </div>
        <Separator
          orientation="vertical"
          className="bg-slate-600 w-1 shrink-0 h-10 rounded"
        />
      </div>
      <div className="flex justify-between items-center mx-auto space-x-3">
        <PiTrophyDuotone className="w-10 h-10 text-gray-500" />
        <div>
          <h6 className="text-gray-800 font-bold text-xl">
            <span className="text-blue-500">24HRS RETURN</span>
          </h6>
          <p className="text-gray-600">100% money-back guarantee</p>
        </div>
      </div>
      <Separator
        orientation="vertical"
        className="bg-slate-600 w-1 shrink-0 h-10 rounded"
      />{" "}
      <div className="flex justify-between items-center mx-auto space-x-3">
        <PiCreditCardDuotone className="w-10 h-10 text-gray-500" />
        <div>
          <h6 className="text-gray-800 font-bold text-xl">
            <span className="text-blue-500">SECURE PAYMENT</span>
          </h6>
          <p className="text-gray-600">Delivery within the specified</p>
        </div>
      </div>
      <Separator
        orientation="vertical"
        className="bg-slate-600 w-1 shrink-0 h-10 rounded"
      />{" "}
      <div className="flex justify-between items-center mx-auto space-x-3">
        <PiHeadphonesDuotone className="w-10 h-10 text-gray-500" />
        <div>
          <h6 className="text-gray-800 font-bold text-xl">
            <span className="text-blue-500">SUPPORT 24/7</span>
          </h6>
          <p className="text-gray-600">Live Contact/Message</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
