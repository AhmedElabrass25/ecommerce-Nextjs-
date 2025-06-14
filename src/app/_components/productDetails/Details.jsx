"use client";
import React, { useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { FiMinus } from "react-icons/fi";
import Button from "../Button";
import Link from "next/link";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useCart } from "../../_context/cartContext";
const Details = ({ product, setSelectedColor, selectedColor }) => {
  const { cart, addToCart } = useCart();
  // check if product exists===========

  const isExisted = cart?.find(
    (item) => item.id === product.id && item.selectedColor === selectedColor
  );
  const [quantity, setQuantity] = useState(1);

  // =============Display Stars===========
  const renderStars = (rating = 0) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaRegStarHalfStroke key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }

    return stars;
  };
  return (
    <>
      {product && (
        <div className="details w-full md:w-1/2">
          {/* You can add product details here */}
          <h1 className="text-2xl font-lighter mb-3 text-black capitalize">
            {product.name}
          </h1>
          {/* ==================Stars=============== */}
          <p className="flex items-center gap-1 mb-2">
            {renderStars(Number(product?.stars))}
            <span className="ml-3">{product?.stars}</span>
          </p>
          {/* ==================Reviews=============== */}
          <p className="mb-3">{product?.reviews} Reviews</p>
          {/* ==================Description=============== */}
          <p className="mb-2 text-[16px] text-gray-700">
            {product?.description}
          </p>
          {/* ==================Availability=============== */}
          <p className="mb-3">
            <span className="text-black font-semibold">Availability : </span>
            {product?.stock > 0 ? (
              <span className="text-gray-600 font-medium">
                In Stock({product?.stock})
              </span>
            ) : (
              <span className="text-gray-600 font-medium">Out of Stock</span>
            )}
          </p>
          {/* ===================Price=============== */}
          <p className="text-lg">
            Price :{" "}
            <span className="text-helper font-medium">
              $ {product?.price?.toLocaleString("en-US")}
            </span>
          </p>
          {/* ===================Brand=============== */}
          <p className=" mb-3">
            <span className=" text-gray-600 font-medium">Brand</span> :{" "}
            <span className=" text-black text-lg">{product?.company}</span>
          </p>
          <hr />
          {/* ====================colors================ */}
          <div className="flex items-center gap-2 mt-3">
            <span>Colors : </span>
            <div className="flex items-center gap-3">
              {product?.colors?.map((color) => (
                <button
                  key={color}
                  style={{
                    backgroundColor: color,
                  }}
                  className={`w-5 h-5 rounded-full flex items-center justify-center cursor-pointer bg-[${color}] 
                    `}
                  onClick={() => setSelectedColor(color)}
                >
                  {selectedColor === color && (
                    <span
                      style={{
                        color: color === "white" ? "black" : "white",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
          {/* =======================Quantity=============== */}
          {!isExisted && (
            <div className="ms-2 flex items-center gap-4 mt-5">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="w-7 h-7 rounded-sm bg-gray-200 text-xl font-bold flex items-center justify-center"
              >
                <FiMinus />
              </button>

              <span className="text-lg font-medium">{quantity}</span>

              <button
                onClick={() =>
                  setQuantity((prev) =>
                    prev + 1 <= product.stock ? prev + 1 : prev
                  )
                }
                className="w-7 h-7 rounded-sm bg-gray-200 text-xl font-bold flex items-center justify-center"
              >
                <HiOutlinePlusSm />
              </button>
            </div>
          )}
          {/* =====================Add Button================ */}
          <div className="my-5">
            <Link href={`/cart`}>
              <button
                disabled={isExisted}
                className={`bg-btn text-white px-4 py-2 capitalize font-semibold hover:bg-blue-800 transition duration-300 ${
                  isExisted ? "cursor-not-allowed" : ""
                }`}
                onClick={() => {
                  addToCart(product, selectedColor, quantity);
                  console.log("first");
                }}
              >
                {" "}
                {isExisted ? "Item in cart" : "Add to cart"}
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
