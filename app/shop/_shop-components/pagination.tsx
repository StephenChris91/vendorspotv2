// PaginationPrevious.tsx
import React from "react";

export const PaginationPrevious: React.FC<{
  isActive: boolean;
  onClick: () => void;
}> = ({ isActive, onClick }) => {
  return (
    <li
      className={`pagination-previous ${isActive ? "" : "disabled"}`}
      onClick={isActive ? onClick : undefined}
    >
      Previous
    </li>
  );
};

// PaginationNext.tsx

export const PaginationNext: React.FC<{
  isActive: boolean;
  onClick: () => void;
}> = ({ isActive, onClick }) => {
  return (
    <li
      className={`pagination-next ${isActive ? "" : "disabled"}`}
      onClick={isActive ? onClick : undefined}
    >
      Next
    </li>
  );
};
