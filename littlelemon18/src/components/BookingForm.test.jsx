import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import BookingForm from './BookingForm';

test('checks if text exists', () => {
  render(<BookingForm />);
  
  // Exact match
  const linkElement = screen.getByText("BookingForm");
  expect(linkElement).toBeInTheDocument();

  // Case-insensitive partial match using Regex
  expect(screen.getByText(/hello/i)).toBeInTheDocument();
});