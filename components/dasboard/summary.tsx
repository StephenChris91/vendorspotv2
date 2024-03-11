const Summary = () => {
  return (
    <div className="summary rounded-sm bg-white p-8 flex flex-col gap-6">
      <h1>Summary</h1>
      <div className="summary w-full rounded-sm bg-white p-8 flex justify-evenly text-center mx-auto ">
        <div className="summary-card border-2 p-5 border-b-4 border-blue-600">
          <p>Total Revenue</p>
          <h3>₹ 0.00</h3>
        </div>
        <div className="summary-card border-2 p-5 border-b-4 border-blue-600">
          <p>Total Order</p>
          <h3>₹ 0.00</h3>
        </div>
        <div className="summary-card border-2 p-5 border-b-4 border-blue-600">
          <p>Vendors</p>
          <h3>₹ 0.00</h3>
        </div>
        <div className="summary-card border-2 p-5 border-b-4 border-blue-600">
          <p>Total Shops</p>
          <h3>�� 0.00</h3>
        </div>
      </div>
    </div>
  );
};

export default Summary;
