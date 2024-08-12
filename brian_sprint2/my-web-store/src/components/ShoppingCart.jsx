// Sprint 2
// By:Brian Jackman
// 2024/08/12


// Import necessary files and libraries
import React, { useContext } from 'react';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext.js';


// Create the ShoppingCart component
const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useContext(ShoppingCartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in shopping cart</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${item.price * item.quantity}</p> {/*quantity */}
            <button onClick={() => removeFromCart(item.id)}>Remove from cart</button>
          </div>
        ))
      )}
    </div>
  );
};

export default ShoppingCart;