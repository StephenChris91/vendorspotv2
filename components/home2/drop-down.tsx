import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DropdownProps {
  value: string;
  arr: string[];
}

export function SelectDropDown({ value, arr }: DropdownProps) {
  return (
    <Select>
      <SelectTrigger className="w-auto border-none focus:border-none text-white">
        <SelectValue placeholder={value} className="" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="text-white">{value}</SelectLabel>
          {arr.map((value, index) => (
            <SelectItem key={index} value={value}>
              {value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
