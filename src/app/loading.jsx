import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
