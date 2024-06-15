import React from "react";
import { Input } from "@/components/ui/input";

type SearchInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for anything..."
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default SearchInput;
