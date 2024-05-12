import OrderProcessingTable from "@/components/dasboard/tables/order-processing/order-processing-table";
import OrderHistory from "@/components/dasboard/orderHistory";
import OrderStatus from "@/components/dasboard/orderStatus";
import Summary from "@/components/dasboard/summary";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Dashboard() {
  return (
    <ScrollArea className="mt-20">
      <div className="p-10">
        <Summary />
        <OrderStatus />
        <OrderProcessingTable />
        <OrderHistory />
      </div>
    </ScrollArea>
  );
}
