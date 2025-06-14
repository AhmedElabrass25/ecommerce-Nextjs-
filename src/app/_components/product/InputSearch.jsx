import { useProductContext } from "../../_context/productContext";
import React from "react";

const InputSearch = () => {
  const { filters, updateFilter } = useProductContext();
  return (
    <>
      <div className="mb-10">
        <input
          type="text"
          placeholder="Search by name..."
          value={filters.text}
          onChange={(e) => updateFilter("text", e.target.value)}
          className="w-full py-1 px-2 border rounded outline-none"
        />
      </div>
    </>
  );
};

export default InputSearch;
