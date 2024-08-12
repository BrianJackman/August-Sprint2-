// Sprint 2
// By:Brian Jackman
// 2024/08/12

// Create header component

import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <header className="App-header">
      <Link to="/" className="header-title">
        My Web Store
      </Link>{" "}
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/cart">Shopping Cart</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
