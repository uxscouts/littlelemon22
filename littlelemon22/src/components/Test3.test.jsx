import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, it, vi } from 'vitest';
import BookingForm from './BookingForm';
import { BookingProvider } from '../context/BookingContext';

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
        onChildSubmit={mockSubmit}
      />
    </BookingProvider>
  );

    // 2. Interact with form elements
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const phoneInput = screen.getByLabelText(/phone/i);
  const guestsInput = screen.getByLabelText(/guests/i);
  const dateInput = screen.getByLabelText(/date/i);
  const timeInput = screen.getByRole('radio', { name: /23:00/ });

  await user.clear(nameInput);
  await user.clear(emailInput);
  await user.clear(phoneInput);
  await user.clear(guestsInput);

  await user.type(nameInput, 'John Doe');
  await user.type(emailInput, 'john@example.com');
  await user.type(phoneInput, '123-456-7890');
  await user.type(guestsInput, '2');
  await user.type(dateInput, '2024-12-25');
  await user.click(timeInput);

  // 3. Submit the form
  await user.click(screen.getByRole('button', { name: /submit/i }));

  await waitFor(() => {
    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      guests: '2',
      date: '2024-12-25',
      time: '23:00',
    });
  });

  });


