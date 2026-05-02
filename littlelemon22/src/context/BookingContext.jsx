import React, { createContext, useState, useContext, useReducer, useEffect } from 'react';


const BookingContext = createContext(null);
export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export const BookingProvider = ({ children }) => {
  const [booking, setBooking] = useState({ name: '', email: '', phone: '', guests: '', date: '', time: ''});
 
  const updateBooking = (name, email, phone, guests, date, time) => {
    setBooking({ name, email, phone, guests, date, time });
    let latestBooking = ('Booking updated:', { name, email, phone, guests, date, time });
    console.log(latestBooking);
  };
  return (
    // Pass both the state and the updater function
    <BookingContext.Provider value={{ booking, updateBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
