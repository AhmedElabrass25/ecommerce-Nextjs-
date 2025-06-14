import { useProductContext } from "@/app/_context/productContext";
import React from "react";

const ClearFilters = ({ setSelectedColor, setSelectedCategory }) => {
  const { clearFilters } = useProductContext();
  return (
    <>
      <div className="mb-10">
        <button
          onClick={() => {
            clearFilters();
            setSelectedColor("");
            setSelectedCategory("all");
          }}
          className="w-full bg-yellow-700 hover:bg-yellow-800 text-white p-2 rounded"
        >
          Clear Filters
        </button>
      </div>
    </>
  );
};

export default ClearFilters;
