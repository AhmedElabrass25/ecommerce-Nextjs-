import React from "react";
import { useProductContext } from "../../_context/productContext";

const ColorFilter = ({ setSelectedColor, selectedColor }) => {
  const colors = ["#000", "#22D3EF", "#ff0000", "#CDD0D0"];
  const { updateFilter } = useProductContext();
  return (
    <>
      <div className="mb-10">
        <h3 className="font-medium mb-2">Colors</h3>
        <div className="flex items-center gap-2">
          {colors.map((color, index) => (
            <div
              key={index}
              onClick={() => {
                if (selectedColor === color) {
                  setSelectedColor("");
                  updateFilter("color", "");
                } else {
                  setSelectedColor(color);
                  updateFilter("color", color);
                }
              }}
              className="w-5 h-5 rounded-full flex items-center justify-center cursor-pointer"
              style={{ backgroundColor: color }}
            >
              {selectedColor === color && (
                <span className="text-white font-bold text-[12px]">✓</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ColorFilter;
