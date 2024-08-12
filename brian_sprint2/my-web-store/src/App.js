// Sprint 2
// By:Brian Jackman
// 2024/08/12

// Import necessary files and libraries

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import "./App.css";

// Create the App component
function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
