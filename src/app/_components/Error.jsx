import React from "react";

const Error = ({ error }) => {
  return (
    <div className="w-full flex items-center justify-center">
      {error && (
        <div className="p-4 text-red-800 rounded-lg bg-red-50 text-lg font-medium">
          {error}
        </div>
      )}
    </div>
  );
};

export default Error;
