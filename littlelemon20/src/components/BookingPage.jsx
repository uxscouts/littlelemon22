import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "../API";

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES": {
      const selectedDate = new Date(action.payload);
      if (isNaN(selectedDate.getTime())) {
        return state;
      }
      return fetchAPI(selectedDate);
    }
    default:
      return state;
  }
};

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    // Explicit role for broader assistive technology support
    <main role="main">
      <h1 id="booking-title">Reserve a Table</h1>
      
      {/* 
        Aria-live ensures screen readers announce when 
        available times change after a date selection.
      */}
      <section 
        aria-live="polite" 
        aria-atomic="true"
        aria-labelledby="booking-title"
      >
        <BookingForm 
          availableTimes={availableTimes} 
          dispatch={dispatch} 
        />
      </section>
    </main>
  );
}

export default BookingPage;


{
  /*

import React, { useReducer, useCallback, useEffect } from 'react';
import BookingForm from './BookingForm'; // Assuming a BookingForm component exists

// 1. The Reducer Function
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE_TIMES':
      // Returns initial times based on today's date
      return action.payload;
    case 'UPDATE_TIMES':
      // Returns new times based on selected date
      return action.payload;
    default:
      return state;
  }
};

// 2. The Main Component (Booking Page)
const BookingPage = () => {
  // 3. Initialize useReducer
  const [availableTimes, dispatchAvailableTimes] = useReducer(availableTimesReducer, []);

  // Mocked fetch function (as per Little Lemon Capstone guidelines)
  const fetchData = async (date) => {
    // In a real application, this would call an API
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };

  // 4. Initialize times on component mount
  useEffect(() => {
    const fetchInitialTimes = async () => {
      const today = new Date();
      const times = await fetchData(today);
      dispatchAvailableTimes({ type: 'INITIALIZE_TIMES', payload: times });
    };
    fetchInitialTimes();
  }, []);

  // 5. Function to update times based on date selection
  const updateTimes = useCallback(async (selectedDate) => {
    const times = await fetchData(new Date(selectedDate));
    dispatchAvailableTimes({ type: 'UPDATE_TIMES', payload: times });
  }, []);

  return (
    <div>
      <h1>Book Now</h1>
      <BookingForm 
        availableTimes={availableTimes} 
        updateTimes={updateTimes} 
      />
    </div>
  );
};

export default BookingPage;

*/
}
