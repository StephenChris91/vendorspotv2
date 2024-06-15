import React from "react";

type PopularBrandsProps = {
  brands: string[];
  onChange: (selectedBrands: string[]) => void;
};

const PopularBrands: React.FC<PopularBrandsProps> = ({ brands, onChange }) => {
  const [selectedBrands, setSelectedBrands] = React.useState<string[]>([]);

  const handleCheckboxChange = (brand: string) => {
    const updatedSelectedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];

    setSelectedBrands(updatedSelectedBrands);
    onChange(updatedSelectedBrands);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Popular Brands</h3>
      {brands.map((brand) => (
        <label key={brand} className="flex items-center mb-1">
          <input
            type="checkbox"
            value={brand}
            checked={selectedBrands.includes(brand)}
            onChange={() => handleCheckboxChange(brand)}
            className="mr-2"
          />
          {brand}
        </label>
      ))}
    </div>
  );
};

export default PopularBrands;
