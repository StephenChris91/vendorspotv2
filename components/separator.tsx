import React from "react";

const Separator: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="my-4">
      <div className="border-b border-gray-300 my-4" />
      {children}
    </div>
  );
};

export default Separator;
