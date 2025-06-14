"use client";
import React from "react";
import { useCart } from "../_context/cartContext"; // adjust path as needed
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import Button from "../_components/Button";
import Link from "next/link";

const Cart = () => {
  const {
    cart,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
    clearCart,
    total,
  } = useCart();

  return (
    <section className="cart">
      <div className="container">
        <h1 className="w-full text-center text-2xl capitalize mt-5 font-medium">
          shopping cart
        </h1>
        <div className="relative overflow-x-auto border-2 border-gray-50 p-5 my-5">
          {/* ============Table=========== */}

          {cart.length > 0 ? (
            <>
              <table className="min-w-[550px] w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-100">
                  <tr>
                    <th className=" text-left p-3 border-b">Product</th>
                    <th className="p-3 border-b">Quantity</th>
                    <th className="p-3 border-b">Price</th>
                    <th className="p-3 border-b">Subtotal</th>
                    <th className="p-3 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cart?.length > 0 &&
                    cart.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition">
                        {/* ============Item Image=========== */}
                        <td className="p-3 border-b">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.image[0].url}
                              alt={item.name}
                              className="w-12 h-12 object-cover rounded"
                            />
                            <div className="font-medium text-gray-800 flex flex-col items-start">
                              <p className="mb-1 text-left capitalize">
                                {item.name}
                              </p>
                              <span
                                className="inline-block w-5 h-5 rounded-full border"
                                style={{ backgroundColor: item.selectedColor }}
                              ></span>
                            </div>
                          </div>
                        </td>
                        {/* ============Quantity=========== */}
                        <td className="p-3 border-b">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => decreaseQuantity(item)}
                              className="p-1 bg-gray-200 rounded"
                            >
                              <FiMinus />
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => increaseQuantity(item)}
                              className="p-1 bg-gray-200 rounded"
                            >
                              <FiPlus />
                            </button>
                          </div>
                        </td>
                        {/* ============Price=========== */}
                        <td className="p-3 border-b font-semibold">
                          $
                          {Number(Number(item.price).toFixed(1)).toLocaleString(
                            "en-US"
                          )}
                        </td>
                        {/* ============Subtotal=========== */}
                        <td className="p-3 border-b font-semibold">
                          $
                          {Number(
                            (item.quantity * item.price).toFixed(2)
                          ).toLocaleString("en-US")}
                        </td>
                        {/* ============Delete Item=========== */}
                        <td className="p-3 border-b text-center">
                          <button
                            onClick={() => removeFromCart(item)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FiTrash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div className="w-full flex items-center justify-between mt-5">
                <Link
                  href={"/products"}
                  className="bg-btn text-white px-4 py-2 capitalize font-semibold hover:bg-blue-800 transition duration-300"
                >
                  Continue Shopping
                </Link>
                <button
                  onClick={() => clearCart()}
                  className="w-fit bg-red-500 text-white px-4 py-2 capitalize font-semibold hover:bg-red-600 transition duration-300"
                >
                  Clear Cart
                </button>
              </div>
              {/* /* ============Total=========== */}
              <div className="flex items-center gap-1 mt-5">
                <h3 className="text-lg font-semibold">Total : </h3>
                <h3 className="text-lg font-semibold">
                  ${Number(total.toFixed(1)).toLocaleString("en-US")}
                </h3>
              </div>
            </>
          ) : (
            <>
              <h1 className="w-full text-center text-lg font-semibold capitalize mb-10 text-gray-500">
                Your cart is empty
              </h1>
              <Link
                href={"/products"}
                className="bg-btn text-white px-4 py-2 capitalize font-semibold hover:bg-blue-800 transition duration-300"
              >
                Go Shopping
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
