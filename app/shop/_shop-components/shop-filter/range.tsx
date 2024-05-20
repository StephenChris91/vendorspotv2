import React, { ChangeEvent } from "react";

interface RangeInputProps {
  min: number;
  max: number;
  step: number;
  minValue: number;
  maxValue: number;
  onChange: (newMinValue: number, newMaxValue: number) => void;
}

const RangeInput: React.FC<RangeInputProps> = ({
  min,
  max,
  step,
  minValue,
  maxValue,
  onChange,
}) => {
  const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newMinValue = parseInt(event.target.value);
    onChange(newMinValue, maxValue);
  };

  const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = parseInt(event.target.value);
    onChange(minValue, newMaxValue);
  };

  return (
    <div>
      <label>
        Min:
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          onChange={handleMinChange}
        />
      </label>
      <br />
      <label>
        Max:
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          onChange={handleMaxChange}
        />
      </label>
    </div>
  );
};

export default RangeInput;
