// Sprint 2
// By:Brian Jackman
// 2024/08/12


import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductDetails from './ProductDetails';

test('renders product details', () => {
  const mockProduct = {
    id: 1,
    name: 'Test Product',
    price: 100,
    description: 'This is a test product'
  };

  render(<ProductDetails product={mockProduct} />);

  expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
  expect(screen.getByText(/100/i)).toBeInTheDocument();
  expect(screen.getByText(/This is a test product/i)).toBeInTheDocument();
});