// "use client";

// import React, { useState } from "react";
// import PriceRange from "./PriceRange";

// const PriceRangeComp: React.FC = () => {
//   const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

//   const handlePriceChange = (range: [number, number]) => {
//     setPriceRange(range);
//     console.log("Selected price range:", range);
//   };

//   return (
//     <div className="max-w-lg mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Price Range Selector</h1>
//       <PriceRange
//         min={0}
//         max={1000}
//         step={10}
//         initialMin={priceRange[0]}
//         initialMax={priceRange[1]}
//         onChange={handlePriceChange}
//       />
//     </div>
//   );
// };

// export default PriceRangeComp;
