// src/context/UserContext.jsx
import React, { createContext, useState, useContext, useReducer, useEffect } from 'react';





// 1. Create the Context Object
const BookingContext = createContext();

// 2. Custom hook for consuming the context easily
export const useUser = () => useContext(BookingContext);

// 3. Provider Component
export const BookingProvider = ({ children }) => {
  const [user, setUser] = useState({ name: '', email: '', phone: '', guests: '', date: '', time: ''});

  // Function to update user values
  const updateBooking = (name, email, phone, guests, date, time) => {
    setUser({ name, email, phone, guests, date, time });
    // see if the values are being updated correctly in the context
   // console.log('Booking updated:', { name, email, phone, guests, date, time });
    let latestBooking = ('Booking updated:', { name, email, phone, guests, date, time });
    console.log(latestBooking);
  };





  return (
    // Pass both the state and the updater function
    <BookingContext.Provider value={{ user, updateBooking }}>
      {children}
    </BookingContext.Provider>
  );
};


{/** 
  how should you set up the AvailableTimes component with TimeSlots Little Lemon Capstone project
*/}

{/** example of the API page for mock API call in Little Lemon coursera meta front end capstone project
  https://www.google.com/search?client=firefox-b-1-d&q=how+should+you+set+up+the+AvailableTimes+component+with+TimeSlots+Little+Lemon+Capstone+project&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpV6Bbbmx4QVaoKkiRQ2jlwvMg54BMciw6zYi-UcSdrQCk8rMmGSoXlUZBtIWRHAg5ottE4XCPGv2mxWVhCrXJ6DvmVl-JQ559UZh8-oZl0cQ3E6wYd0iMCySmpo8Gu2UVvD7sGIVZnM8yN6CUG4LFlGAB9TnF-QiBKxHqrYbMWZvGCsFsZb9U7UZnvof4-egOcP5Kzg&ved=2ahUKEwjAgZTotPeTAxU_FFkFHftvPVEQ0NsOegQIAxAB&aep=10&ntc=1&mstk=AUtExfAmgEjHSnzWNRjtvQiL3d9OYx414d62a0wI6YNccoq4LTAMXUyiyLUpP6ZTfckoIBHrfr2jVLqv0UqqK2fMRd8-UzCRqJRPtUlCWhFuE0EMWpFJgASICkE8jo1ULwt-myrVL0XM1efg1MKhyoemT9j5kRcYLkBPRFM&csuir=1&udm=50&atvm=2
*/}