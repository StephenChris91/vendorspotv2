import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CheckOutCoupons = () => {
  return (
    <section className="border p-3 flex flex-col gap-5 mt-7">
      <h5>Coupons</h5>
      <Input
        type="text"
        placeholder="Apply Coupon"
        className="rounded-sm"
      ></Input>
      <Button
        className="bg-blue-500 rounded-sm text-white w-full"
        type="submit"
      >
        Apply Coupon
      </Button>
    </section>
  );
};

export default CheckOutCoupons;
