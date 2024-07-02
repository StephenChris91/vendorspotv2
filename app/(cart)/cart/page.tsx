import CartPage from "@/components/cart/cart-page";

const Cart = () => {
  return (
    <section className="small-wrapper">
      <CartPage />
    </section>
  );
};

export default Cart;

// Page.getInitialProps = async (ctx: any) => {
//   return { currentPath: ctx.pathname === "/cart" };
// };
