// Sprint 2
// By:Brian Jackman
// 2024/08/12

// Import and export necessary files and libraries
import React, { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity) => {
    setCartItems((prevItems) => [...prevItems, { ...item, quantity }]); // Add quantity to the item
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, addToCart, removeFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
