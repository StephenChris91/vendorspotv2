import CartPage from "@/components/cart/cart-page";

const Page = () => {
  return (
    <section className="small-wrapper">
      <CartPage />
    </section>
  );
};

export default Page;

Page.getInitialProps = async (ctx: any) => {
  return { currentPath: ctx.pathname === "/cart" };
};
