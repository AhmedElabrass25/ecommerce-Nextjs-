import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <>
      <Link
        href="/"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <div className="p-1 tracking-[1px] text-sm uppercase border-2 border-black flex gap-x-1 items-center ">
          <span className="bg-btn text-white p-1 font-bold">Ahmed</span>{" "}
          <span className="font-bold">store</span>
        </div>
      </Link>
    </>
  );
};

export default Logo;
