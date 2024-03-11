import { FcMoneyTransfer } from "react-icons/fc";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const OrderStatus = () => {
  const card = (title: string, amount: number) => (
    <div className="flex justify-between items-center mx-auto gap-3 bg-gray-50 w-1/4 rounded-lg p-5 border-b-4 border-green-600 ">
      <div className="p-2 bg-gray-200 place-items-center">
        <FcMoneyTransfer className="text-3xl" />
      </div>
      <div className="flex flex-col place-items-end">
        <p>{title}</p>
        <h3>₦{amount}</h3>
      </div>
    </div>
  );

  return (
    <div className="rounded-sm bg-white p-8 flex flex-col justify-between items-center mx-auto gap-6 w-full">
      <Tabs defaultValue="Today" className="w-full">
        <div className="flex justify-between items-center mx-auto w-full mb-7">
          <h1>Order Status</h1>
          <TabsList>
            <TabsTrigger value="Today">Today</TabsTrigger>
            <TabsTrigger value="Weekly">Weekly</TabsTrigger>
            <TabsTrigger value="Monthly">Monthly</TabsTrigger>
            <TabsTrigger value="Yearly">Yearly</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="Today">
          <div className="summary w-full rounded-sm bg-white flex justify-evenly text-center mx-auto gap-4">
            {card("Pending Order", 3.44)}
            {card("Processing Order", 3.44)}
            {card("Completed Order", 3.44)}
            {card("Cancelled Order", 3.44)}
          </div>
        </TabsContent>
        <TabsContent value="Weekly">
          <div className="summary w-full rounded-sm bg-white flex justify-evenly text-center mx-auto gap-4">
            {card("Pending Order", 6.44)}
            {card("Processing Order", 6.44)}
            {card("Completed Order", 6.44)}
            {card("Cancelled Order", 6.44)}
          </div>
        </TabsContent>
        <TabsContent value="Monthly">
          <div className="summary w-full rounded-sm bg-white flex justify-evenly text-center mx-auto gap-4">
            {card("Pending Order", 9.44)}
            {card("Processing Order", 9.44)}
            {card("Completed Order", 9.44)}
            {card("Cancelled Order", 9.44)}
          </div>
        </TabsContent>
        <TabsContent value="Yearly">
          <div className="summary w-full rounded-sm bg-white flex justify-evenly text-center mx-auto gap-4">
            {card("Pending Order", 5.44)}
            {card("Processing Order", 5.44)}
            {card("Completed Order", 5.44)}
            {card("Cancelled Order", 5.44)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrderStatus;
