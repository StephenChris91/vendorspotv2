import RootLayout from "../../layout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-0 m-0 bg-red-500 h-96">
      <div className="max-w-full">{children}</div>
    </div>
  );
};

export default Layout;
