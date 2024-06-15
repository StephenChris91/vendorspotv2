import React, { useState, useEffect } from "react";

type PriceRangeProps = {
  min: number;
  max: number;
  step: number;
  initialMin: number;
  initialMax: number;
  onChange: (range: [number, number]) => void;
};

const PriceRange: React.FC<PriceRangeProps> = ({
  min,
  max,
  step,
  initialMin,
  initialMax,
  onChange,
}) => {
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);

  useEffect(() => {
    onChange([minValue, maxValue]);
  }, [minValue, maxValue]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - step);
    setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + step);
    setMaxValue(value);
  };

  return (
    <div className="relative w-full">
      <div className="flex justify-between mb-2">
        <input
          type="number"
          min={min}
          max={max}
          value={minValue}
          onChange={handleMinChange}
          className="w-1/2 mr-2 p-2 border rounded"
        />
        <input
          type="number"
          min={min}
          max={max}
          value={maxValue}
          onChange={handleMaxChange}
          className="w-1/2 ml-2 p-2 border rounded"
        />
      </div>
      <div className="relative h-4">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full pointer-events-none"
          style={{
            WebkitAppearance: "none",
            appearance: "none",
            pointerEvents: "auto",
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full pointer-events-none"
          style={{
            WebkitAppearance: "none",
            appearance: "none",
            pointerEvents: "auto",
          }}
        />
        <div
          className="absolute bg-gray-300 h-1 top-1/2 transform -translate-y-1/2"
          style={{
            left: `${((minValue - min) / (max - min)) * 100}%`,
            right: `${100 - ((maxValue - min) / (max - min)) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default PriceRange;
