import DraftProductsTable from "@/components/dasboard/draft-products/draft-products-table";

const MyDraftProducts = () => {
  return (
    <div className=" p-10 mt-32">
      {/* <div className="w-full bg-white rounded-sm p-5 ">
        <h1>My Draft Products Page</h1>
      </div> */}
      <DraftProductsTable />
    </div>
  );
};

export default MyDraftProducts;
