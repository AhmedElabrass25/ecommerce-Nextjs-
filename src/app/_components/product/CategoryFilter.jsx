import { useProductContext } from "../../_context/productContext";
import React from "react";

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    "all",
    "mobile",
    "laptop",
    "accessories",
    "computer",
    "watch",
  ];
  const { updateFilter } = useProductContext();
  return (
    <>
      <div className="mb-10">
        <h3 className="font-medium mb-2">Category</h3>
        <div className="flex flex-col gap-2 text-sm">
          {categories.map((category, index) => (
            <div
              key={index}
              className="cursor-pointer ml-3"
              onClick={() => {
                updateFilter("category", category);
                setSelectedCategory(category);
              }}
            >
              <span
                className={`capitalize text-[17px] ${
                  selectedCategory === category &&
                  "font-bold text-helper border-b-2 border-helper"
                }`}
              >
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryFilter;
