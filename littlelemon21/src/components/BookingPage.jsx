import React, { useState, useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "../API";
import { submitAPI } from "../API2";
import { useNavigate } from "react-router-dom";

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
    updateTimes, [], initializeTimes);

 const [formData, setFormData] = useState({});
 
 // the useNavigate hook is so the user is automatically
 // sent to confirmation page after successfully completing form
 const navigate = useNavigate();



    // this function handles onSubit for reducer
    // my goal is to have Reducer store values from onSubmit
    // but have State store locally with onChange
  const handleFormSubmit = async (data) => {
        const response = await submitAPI(formData);
    if (response) {
      alert("Reservation confirmed!");
      console.log('OnSubmit:: Data received in Parent:', data);
      setFormData(data);
      // after setting form data to the state I will use the state
      // and send form data object to the confirmation page.
     navigate('/confirmedbooking', { state: data });
    }
  };



  return (
    <main role="main">
      <h1 id="booking-title">Reserve a Table</h1>
      
      <section 
        aria-live="polite" 
        aria-atomic="true"
        aria-labelledby="booking-title">
          <BookingForm 
            availableTimes={availableTimes} 
            dispatch={dispatch}
            onChildSubmit={handleFormSubmit} 
          />    
          {formData && <p>Submitted: {JSON.stringify(formData)}</p>}
      </section>
    </main>
  );
}

export default BookingPage;

