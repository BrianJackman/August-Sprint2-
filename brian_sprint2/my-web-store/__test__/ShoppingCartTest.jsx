// Sprint 2
// By:Brian Jackman
// 2024/08/12



import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext.js';
import ShoppingCart from './ShoppingCart';

test('renders empty shopping cart', () => {
  const mockContext = {
    cartItems: [],
    removeFromCart: jest.fn(),
  };

  render(
    <ShoppingCartContext.Provider value={mockContext}>
      <ShoppingCart />
    </ShoppingCartContext.Provider>
  );

  expect(screen.getByText(/No items in shopping cart/i)).toBeInTheDocument();
});

test('renders shopping cart with items', () => {
  const mockContext = {
    cartItems: [
      { id: 1, name: 'Test Product', price: 100, quantity: 2 },
    ],
    removeFromCart: jest.fn(),
  };

  render(
    <ShoppingCartContext.Provider value={mockContext}>
      <ShoppingCart />
    </ShoppingCartContext.Provider>
  );

  expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
  expect(screen.getByText(/Quantity: 2/i)).toBeInTheDocument();
  expect(screen.getByText(/Total: \$200/i)).toBeInTheDocument();
});

test('calls removeFromCart when remove button is clicked', () => {
  const mockContext = {
    cartItems: [
      { id: 1, name: 'Test Product', price: 100, quantity: 2 },
    ],
    removeFromCart: jest.fn(),
  };

  render(
    <ShoppingCartContext.Provider value={mockContext}>
      <ShoppingCart />
    </ShoppingCartContext.Provider>
  );

  fireEvent.click(screen.getByText(/Remove from cart/i));
  expect(mockContext.removeFromCart).toHaveBeenCalledWith(1);
});