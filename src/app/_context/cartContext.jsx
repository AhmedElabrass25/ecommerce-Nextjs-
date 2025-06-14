"use client";
import { useContext, createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

export const cartContext = createContext({});

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [total, setTotal] = useState(0);

  // ======== Add Product To Cart ==========
  const addToCart = (product, selectedColor, quantity) => {
    selectedColor = selectedColor || product.colors[0];

    //If there is the same product with the same color
    const existingProduct = cart.find(
      (p) => p.id === product.id && p.selectedColor === selectedColor
    );
    if (existingProduct) {
      return;
    }

    // Add product with diffrent color .
    const newCart = [...cart, { ...product, selectedColor, quantity }];
    setCart(newCart);
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Item added to cart",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };
  // ============Increase Quantity==========
  const increaseQuantity = (product) => {
    const updatedCart = cart.map((item) => {
      if (
        item.id === product.id &&
        item.selectedColor === product.selectedColor
      ) {
        if (item.quantity >= item.stock) return item;
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };
  // ============Decrease Quantity==========
  const decreaseQuantity = (product) => {
    const updatedCart = cart.map((item) => {
      if (
        item.id === product.id &&
        item.selectedColor === product.selectedColor
      ) {
        if (item.quantity <= 1) return item;
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };
  // ============Remove item from cart ==========
  const removeFromCart = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this item !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it !",
    }).then((result) => {
      if (result.isConfirmed) {
        // ===== Delete Item ============
        const updatedCart = cart.filter(
          (item) =>
            item.id !== product.id ||
            item.selectedColor !== product.selectedColor
        );
        setCart(updatedCart);
        // ==============================
        Swal.fire({
          title: "Deleted!",
          text: "The item is deleted.",
          icon: "success",
        });
      }
    });
  };
  const clearCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete all cart items !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete all !",
    }).then((result) => {
      if (result.isConfirmed) {
        // === Clear All ===========
        setCart([]);
        // =========================
        Swal.fire({
          title: "Deleted!",
          text: "All items are deleted.",
          icon: "success",
        });
      }
    });
  };
  // ✅ 3. تحميل cart من localStorage عند أول تحميل للصفحة
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cartProducts");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
    setIsHydrated(true);
  }, []);
  // ✅ 2. حفظ cart في localStorage تلقائيًا عند التغيير
  useEffect(() => {
    if (!isHydrated) return;
    console.log(isHydrated);
    localStorage.setItem("cartProducts", JSON.stringify(cart));
    const newTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cart, isHydrated]);

  return (
    <cartContext.Provider
      value={{
        addToCart,
        cart,
        total,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => useContext(cartContext);
export default CartContextProvider;
