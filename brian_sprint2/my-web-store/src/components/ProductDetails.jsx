// Sprint 2
// By:Brian Jackman
// 2024/08/12



// Import necessary files and libraries
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../api/api.js';


// Create the ProductDetails component

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
  
    getProductDetails(id)
      .then((product) => {
        setProduct(product);
      })
      .catch((error) => {
        console.error('Failed to fetch product details', error);
      });
  }, [id]); 

  if (!product) {
    return null; 
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetails;