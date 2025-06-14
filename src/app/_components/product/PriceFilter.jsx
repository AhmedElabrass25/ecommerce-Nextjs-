import React from "react";
import { useProductContext } from "../../_context/productContext";

const PriceFilter = () => {
  const { filters, maxPrice, updateFilter } = useProductContext();
  return (
    <>
      <div className="mb-10">
        <h3 className="font-medium mb-1">
          Price: ${Number(filters.price).toLocaleString("en-US")}
        </h3>
        <input
          type="range"
          min="0"
          max={maxPrice}
          value={filters.price}
          onChange={(e) => updateFilter("price", e.target.value)}
          className="w-full"
        />
      </div>
    </>
  );
};

export default PriceFilter;
