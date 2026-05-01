import React, { createContext, useState, useContext, useReducer, useEffect } from 'react';


const BookingContext = createContext();
export const useBooking = () => useContext(BookingContext);

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
