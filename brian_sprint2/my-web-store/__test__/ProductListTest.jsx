// Sprint 2
// By:Brian Jackman
// 2024/08/12

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductList from './ProductList';
import App from './App';
import { getProducts } from '../api/api.js';

jest.mock('../api/api.js'); 

beforeEach(() => {
  
  getProducts.mockImplementation(() => [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
  ]);
});

test('renders without crashing', () => {
  render(<ProductList />);
});

test('displays the correct number of products', () => {
  render(<ProductList />);
  const products = screen.getAllByRole('heading'); 
  expect(products).toHaveLength(2);
});

test('renders My Web Store title', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Web Store/i);
  expect(linkElement).toBeInTheDocument();
});