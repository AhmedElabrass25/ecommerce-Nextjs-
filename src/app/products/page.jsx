"use client";

import React, { useState } from "react";
import { useProductContext } from "../_context/productContext";
import ProductCard from "../_components/ProductCard";
import InputSearch from "../_components/product/InputSearch";
import CategoryFilter from "../_components/product/CategoryFilter";
import ColorFilter from "../_components/product/ColorFilter";
import PriceFilter from "../_components/product/PriceFilter";
import ClearFilters from "../_components/product/ClearFilters";
import { PiListBold } from "react-icons/pi";
import { BsFillGridFill } from "react-icons/bs";

const Products = () => {
  const { products, getSortedProducts } = useProductContext();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sort, setSort] = useState("");
  const [viewType, setViewType] = useState("grid"); // "grid" or "list"

  return (
    <section className="w-full py-10">
      <div className="container flex flex-col md:flex-row gap-6">
        {/* Sidebar Filters */}
        <aside className="w-full h-fit md:w-1/4 bg-white p-4 rounded shadow">
          {/* ===========  Search Input ============= */}
          <InputSearch />

          {/* ============== Category Filter ======== */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          {/* ============== Color Filter =============*/}
          <ColorFilter
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          {/* ============== Price Filter ============ */}
          <PriceFilter />

          {/*  =========== Clear Filters Button =======*/}
          <ClearFilters
            setSelectedCategory={setSelectedCategory}
            setSelectedColor={setSelectedColor}
          />
        </aside>

        {/* ============= Product List =============== */}
        <div className="w-full lg:w-3/4">
          {/* ==========Features=============== */}
          <div className="w-full px-4 flex items-center justify-between">
            {/* ========= Order Products======== */}
            <div className="flex items-center gap-2">
              <span
                onClick={() => setViewType("grid")}
                className={`p-3 cursor-pointer rounded ${
                  viewType === "grid"
                    ? "bg-black text-white"
                    : "bg-bg text-black"
                }`}
              >
                <BsFillGridFill />
              </span>
              <span
                onClick={() => setViewType("list")}
                className={`p-3 cursor-pointer rounded ${
                  viewType === "list"
                    ? "bg-black text-white"
                    : "bg-bg text-black"
                }`}
              >
                <PiListBold />
              </span>
            </div>
            {/* ========= Sort Products======== */}
            <div>
              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                  getSortedProducts(e.target.value);
                }}
                className="border p-1 cursor-pointer"
              >
                <option value="price-lowest">Price (lowest)</option>
                <option value="price-highest">Price (highest)</option>
                <option value="name-a">Name (A-Z)</option>
                <option value="name-z">Name (Z-A)</option>
              </select>
            </div>
          </div>
          {/* =========== Display all products ========== */}
          <div
            className={`${
              viewType === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                : "flex flex-col gap-4"
            }`}
          >
            {products.length === 0 ? (
              <p className="text-gray-500 col-span-full text-center text-xl">
                No products found.
              </p>
            ) : (
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  viewType={viewType}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
