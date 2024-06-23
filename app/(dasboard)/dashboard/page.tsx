import OrderProcessingTable from "@/components/dasboard/tables/order-processing/order-processing-table";
import OrderHistory from "@/components/dasboard/orderHistory";
import OrderStatus from "@/components/dasboard/orderStatus";
import Summary from "@/components/dasboard/summary";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Dashboard() {
  return (
    <div className="p-10 h-auto mt-32 pb-32">
      <Summary />
      <OrderStatus />
      <OrderProcessingTable />
      <OrderHistory />
    </div>
  );
}
