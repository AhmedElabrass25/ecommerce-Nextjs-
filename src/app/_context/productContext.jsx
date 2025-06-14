"use client";

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const productContext = createContext({});

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filterAllProducts, setFilterAllProducts] = useState([]);
  const [maxPrice, setMaxPrice] = useState(0);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    text: "",
    category: "all",
    color: "",
    price: 0,
  });

  // Fetch data
  async function getProducts() {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        "https://api.pujakaitem.com/api/products"
      );
      setProducts(data);
      setFilterAllProducts(data);

      // Set max price
      if (data.length > 0) {
        const max = Math.max(...data.map((p) => p.price));
        setMaxPrice(max); // ✅ حفظ القيمة
        setFilters((prev) => ({ ...prev, price: max }));
      }
    } catch (error) {
      setError(error?.message);
    } finally {
      setIsLoading(false);
    }
  }
  // ===================apply Filter on products========
  const applyFilters = () => {
    let tempProducts = [...filterAllProducts];

    if (filters.text) {
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().includes(filters.text.toLowerCase())
      );
    }

    if (filters.category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category.toLowerCase() === filters.category
      );
    }

    if (filters.color) {
      tempProducts = tempProducts.filter((product) =>
        product.colors.includes(filters.color)
      );
    }

    tempProducts = tempProducts.filter(
      (product) => product.price <= filters.price
    );

    setProducts(tempProducts);
  };
  // ===================Update Filter Products==========
  const updateFilter = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };
  // ===================Filter Products By Ordered it==========
  const getSortedProducts = (text) => {
    let sorted = [...filterAllProducts];

    if (text === "price-lowest") {
      sorted.sort((a, b) => a.price - b.price);
      console.log(sorted);
    }
    if (text === "price-highest") {
      sorted.sort((a, b) => b.price - a.price);
    }
    if (text === "name-a") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (text === "name-z") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilterAllProducts(sorted);
  };
  // ===================Clear Filter Products===========
  const clearFilters = () => {
    const max = Math.max(...filterAllProducts.map((p) => p.price));
    setFilters({
      text: "",
      category: "all",
      color: "",
      price: max,
    });
    setProducts(filterAllProducts);
  };
  // =========apply filters===========
  useEffect(() => {
    if (filterAllProducts.length > 0) {
      applyFilters();
    }
  }, [filters, filterAllProducts]);
  // ===========Fetch data============
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <productContext.Provider
      value={{
        products,
        filterAllProducts,
        filters,
        maxPrice,
        updateFilter,
        clearFilters,
        getSortedProducts,
        error,
        isLoading,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export const useProductContext = () => useContext(productContext);
export default ProductContextProvider;
