"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type SortDropdownProps = {
  value: string;
  onChange: (value: string) => void;
};

const SortDropdown: React.FC<SortDropdownProps> = ({ value, onChange }) => {
  const handleSelect = (sortOption: string) => {
    onChange(sortOption);
  };

  return (
    <div className="mb-4 w-40">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full">
            Sort by: {value}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
          <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
          <DropdownMenuItem onSelect={() => handleSelect("popularity")}>
            Sort by Popularity
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleSelect("price_low_high")}>
            Sort by Price: Low to High
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleSelect("price_high_low")}>
            Sort by Price: High to Low
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleSelect("newest")}>
            Sort by Newest
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SortDropdown;
