import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-btn text-white px-4 py-2 capitalize font-semibold hover:bg-blue-800 transition duration-300">
      {children}
    </button>
  );
};

export default Button;
