import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product, viewType }) => {
  const isList = viewType === "list";

  return (
    <div
      className={`productCard w-full bg-white p-3 rounded-lg mb-5 ${
        isList ? "flex items-center gap-4" : ""
      }`}
    >
      <Link href={`/products/${product?.id}`} className={isList ? "w-1/3" : ""}>
        <div
          className={`relative group ${
            isList ? "h-[250px]" : "h-[300px]"
          } w-full overflow-hidden mb-2`}
        >
          {/* Hover Overlay */}
          <div className="relative group h-full w-full rounded-lg overflow-hidden mb-2">
            {/* Hover line using before */}
            <div className="group absolute inset-0 before:content-[''] before:rounded-lg before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-black/30 before:transition-all before:duration-300 group-hover:before:w-full z-10" />
            {/* Image */}
            <Image
              src={product?.image}
              height={500}
              width={500}
              className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition duration-300 ease-in-out"
              alt="image"
            />

            {/* Category Label */}
            <p className="absolute top-2 right-3 capitalize text-btn bg-bg px-2 rounded-[20px]">
              {product?.category}
            </p>
          </div>
          {/* ========== (Name & Price) Product ===== */}
          <div className="bottomCard w-full flex items-center justify-between px-2">
            <p className="text-black font-medium">{product?.name}</p>
            <p className="text-black font-medium">
              ${product?.price.toLocaleString()}
            </p>
          </div>

          {/* Category Label  */}
          {isList && (
            <p className="absolute top-2 right-3 capitalize text-btn bg-bg px-2 rounded-[20px]">
              {product?.category}
            </p>
          )}
        </div>
      </Link>

      {/* If i select the (List) display that */}
      {isList && (
        <div className="w-2/3 px-2">
          <div className="bottomCard w-full flex items-center justify-between ">
            {/* ===========Name & Description============== */}
            <p className="text-black font-medium">{product?.name}</p>
            <p className="text-black font-medium">
              ${product?.price.toLocaleString()}
            </p>
          </div>
          <p className="text-sm text-gray-600 mt-1 mb-5 line-clamp-2">
            {product?.description || "This is a great product."}
          </p>
          {/* ===========Read More============== */}
          <Link
            href={`/products/${product?.id}`}
            className="relative inline-block px-4 py-1 border-2 border-helper text-lg capitalize text-helper overflow-hidden
             before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-helper
             hover:text-white before:transition-all before:duration-300 hover:before:w-full z-10 before:z-0"
          >
            <span className="relative z-10">read more</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
