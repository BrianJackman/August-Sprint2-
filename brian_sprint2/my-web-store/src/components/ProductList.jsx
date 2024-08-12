// Sprint 2
// By:Brian Jackman
// 2024/08/12


// Import necessary files and libraries
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../api/api.js';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext.js';


// Create the ProductList component
const ProductList = () => {
  const products = getProducts();
  const { addToCart } = useContext(ShoppingCartContext);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities(prevQuantities => ({ ...prevQuantities, [id]: value }));
  };

  return (
    <div>
      {products && products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>

          <p>${product.price}</p>
          <select value={quantities[product.id] || 1} onChange={(e) => handleQuantityChange(product.id, e.target.value)}>
            {[...Array(10).keys()].map((value) => (
              <option key={value} value={value + 1}>
                {value + 1}
              </option>
            ))}
          </select>
          <button onClick={() => addToCart(product, quantities[product.id] || 1)}>Add to cart</button>
          <Link to={`/product/${product.id}`}>
            <button>Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;