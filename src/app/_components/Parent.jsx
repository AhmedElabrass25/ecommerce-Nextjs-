import React from "react";
import TheNavbar from "./TheNavbar";
import TheFooter from "./TheFooter";
import ProductContextProvider from "../_context/productContext";
import CartContextProvider from "../_context/cartContext";

const Parent = ({ children }) => {
  return (
    <div>
      <ProductContextProvider>
        <CartContextProvider>
          <TheNavbar />
          {children}
          <TheFooter />
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
};

export default Parent;
