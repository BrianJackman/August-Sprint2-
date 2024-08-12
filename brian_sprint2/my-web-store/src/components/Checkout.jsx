// Sprint 2
// By:Brian Jackman
// 2024/08/12

// Import necessary files and libraries
import React, { useContext } from 'react';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext.js';


// Create the Checkout component

const Checkout = () => {
  const { cartItems } = useContext(ShoppingCartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
 
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>Quantity: {item.quantity}</p> {/*quantity */}
              <p>${item.price}</p>
            </div>
          ))}
          <h3>Total: ${parseFloat(total).toFixed(2)}</h3>
          <form>
            <label>
              Street:
              <input type="text" name="street" />
            </label>
            <label>
              City:
              <input type="text" name="city" />
            </label>
            <label>
              Province:
              <input type="text" name="province" />
            </label>
            <label>
              Postal Code:
              <input type="text" name="postalCode" />
            </label>
          </form>
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Checkout;