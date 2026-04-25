import React from 'react'; // Add this line
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, it, vi } from 'vitest';
import BookingForm from './BookingForm';
import { BookingProvider } from '../context/BookingContext';
import { fetchAPI } from "../API";

const availableTimes = ['23:00'];
const dispatch = () => {};

it('submits the form with correct data', async () => {
  const mockSubmit = vi.fn();
  const user = userEvent.setup();
  
   render(
       <BookingProvider>
        <BookingForm 
          availableTimes={availableTimes} 
          dispatch={dispatch} 
          onSubmit={mockSubmit} 
        />
       </BookingProvider>
 )

  // Fill in fields using accessible queries
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const phoneInput = screen.getByLabelText(/phone/i);
  const guestsInput = screen.getByLabelText(/guests/i);
  const dateInput = screen.getByLabelText(/date/i);
  const timeInput = screen.getByLabelText(/time/i);

  
  await user.type(nameInput, 'Eric');
  await user.type(emailInput, 'erci@eric.com');
  await user.type(phoneInput, '11212');
  await user.type(guestsInput, '4');
  await user.type(dateInput, '2026-04-23');
  await user.type(timeInput, '23:00');
 

  // Click the submit button
  await user.click(screen.getByRole('button', { name: /Reservation/i }));

  // Assert the handler was called correctly
  expect(mockSubmit).toHaveBeenCalledTimes(1);
  expect(mockSubmit).toHaveBeenCalledWith({
    name: 'Eric',
    email: 'erci@eric.com',
    phone: '11212',
    guests: '4',
    date: '2026-04-23',
    time: '23:00'
  });
});

Test3.test.jsx > submits the form with correct data
AssertionError: expected "spy" to be called 1 times, but got 0 times
 ❯ Test3.test.jsx:47:22
     45| 
     46|   // Assert the handler was called correctly
     47|   expect(mockSubmit).toHaveBeenCalledTimes(1);
       |                      ^
     48|   expect(mockSubmit).toHaveBeenCalledWith({
     49|     name: 'Eric',

/*
Name: Eric
Email: erci@eric.com
Phone: 11212
Guests: 4
Date: 2026-04-23
Time: 23:00
*/

/*
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Guests: {user.guests}</p>
      <p>Date: {user.date}</p>
      <p>Time: {user.time}</p>
*/




/*

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, it, vi } from 'vitest';
import LoginForm from './LoginForm';

it('submits the form with correct data', async () => {
  const mockSubmit = vi.fn();
  const user = userEvent.setup();
  
  render(<LoginForm onSubmit={mockSubmit} />);

  // Fill in fields using accessible queries
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  
  await user.type(emailInput, 'user@example.com');
  await user.type(passwordInput, 'password123');

  // Click the submit button
  await user.click(screen.getByRole('button', { name: /login/i }));

  // Assert the handler was called correctly
  expect(mockSubmit).toHaveBeenCalledTimes(1);
  expect(mockSubmit).toHaveBeenCalledWith({
    email: 'user@example.com',
    password: 'password123',
  });
});


*/

/*

Priority of Queries: Use Testing Library Queries in order of accessibility: getByRole, 
then getByLabelText, and only use getByTestId as a last resort.

Wait for Async: If the submission triggers an asynchronous operation (like an API call), 
wrap your assertions in await waitFor(() => ...) or use findBy queries.

Mock External Services: For real API calls, use Mock Service Worker (MSW) instead of 
mocking individual fetch calls to ensure your component integrates correctly with network logic. 

*/