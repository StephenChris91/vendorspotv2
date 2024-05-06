import { FcMoneyTransfer } from "react-icons/fc";

const Summary = () => {
  return (
    <div className="summary rounded-sm bg-white p-8 flex flex-col gap-6 mb-5">
      <h1 id="summary-header">Summary</h1>
      <div className="summary w-full rounded-sm bg-white flex justify-evenly text-center mx-auto gap-4">
        <div className="flex justify-between items-center mx-auto gap-3 bg-gray-50 w-1/4 rounded-lg p-5 border-b-4 border-blue-600 ">
          <div className="p-2 bg-gray-200 place-items-center">
            <FcMoneyTransfer className="text-3xl" />
          </div>
          <div>
            <p>Total Revenue</p>
            <h3>₦0.00</h3>
          </div>
        </div>
        <div className="flex justify-between items-center mx-auto gap-3 bg-gray-50 w-1/4 rounded-lg p-5 border-b-4 border-blue-600 ">
          <div className="p-2 bg-gray-200 place-items-center ">
            <FcMoneyTransfer className="text-3xl" />
          </div>
          <div className="flex flex-col">
            <p>Total Order</p>
            <h3>₦0.00</h3>
          </div>
        </div>
        <div className="flex justify-between items-center mx-auto gap-3 bg-gray-50 w-1/4 rounded-lg p-5 border-b-4 border-blue-600 ">
          <div className="p-2 bg-gray-200 place-items-center ">
            <FcMoneyTransfer className="text-3xl" />
          </div>
          <div className="flex flex-col">
            <p>Vendors</p>
            <h3>₦0.00</h3>
          </div>
        </div>
        <div className="flex justify-between items-center mx-auto gap-3 bg-gray-50 w-1/4 rounded-lg p-5 border-b-4 border-blue-600 ">
          <div className="p-2 bg-gray-200 place-items-center ">
            <FcMoneyTransfer className="text-3xl" />
          </div>
          <div className="flex flex-col">
            <p>Total Shops</p>
            <h3>₦0.00</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
