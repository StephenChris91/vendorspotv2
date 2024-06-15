import React from "react";

type SelectedFiltersProps = {
  filters: { [key: string]: string[] };
  totalItems: number;
  onClearFilter: (filterType: string, filterValue: string) => void;
  onClearAll: () => void;
};

const SelectedFilters: React.FC<SelectedFiltersProps> = ({
  filters,
  totalItems,
  onClearFilter,
  onClearAll,
}) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center bg-gray-200 p-2">
        <div>
          <span className="font-bold">Active Filters:</span>
          {Object.entries(filters).map(([key, values]) =>
            values.map((value) => (
              <span
                key={value}
                className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-full ml-2"
              >
                {key}: {value}
                <button
                  onClick={() => onClearFilter(key, value)}
                  className="ml-1 text-red-500"
                >
                  x
                </button>
              </span>
            ))
          )}
        </div>
        <div>
          <button onClick={onClearAll} className="text-blue-500 underline mr-4">
            Clear All
          </button>
          <span className="font-bold">{totalItems} Results found</span>
        </div>
      </div>
    </div>
  );
};

export default SelectedFilters;
