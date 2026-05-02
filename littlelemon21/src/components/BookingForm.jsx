import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Table, Container } from "reactstrap";
import { useBooking } from "../context/BookingContext";

function BookingForm({ 
  availableTimes,
  dispatch, 
 // onSubmit, 
 // onSendData,  
  onChildSubmit
}) {
  const { booking, updateBooking } = useBooking();
  const [name, setName] = useState(booking.name || "Joe Smith");
  const [email, setEmail] = useState(booking.email || "something@example.com");
  const [phone, setPhone] = useState(booking.phone || "555-555-5555");
  const [guests, setGuests] = useState(booking.guests || "4");
  const [date, setDate] = useState(booking.date || "");
  const [time, setTime] = useState(booking.time || "");



  // use function uses Reducer to send data to parent
  // but it is different becuase it sends values via
  // onSubmit (so I can simulateously creaete local State 
  // with onChange)
  const handleSubmit2 = (event) => {
    event.preventDefault(); // Stop reload
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries()); // Convert to object
    updateBooking(value.name, value.email, value.phone, value.guests, value.date, value.time);
    onChildSubmit(value); // Send up to parent
  };



// this if for Reducer Update Times only
// and this happens locally but onChange 
// so values are dictated by date change
// dont need this because I switched to the onSubmit for 
// form REDUCER

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    setTime(selectedTime);
  };

  return (
    <>
    <Container className="mt-5 p-3 custom-border">
      <h1>Reserve Form</h1>
      <div className="BookingFormContainer">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Guests</th>
            <th>Date</th>
            <th>Time</th>          
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>{name}</td>
              <td>{email}</td>
              <td>{phone}</td>
               <td>{guests}</td>
              <td>{date}</td>
              <td>{time}</td>             
            </tr>
        </tbody>
        </Table>
        </div>
      </Container>
      <div className="BookingFormContainer">
        <Form
          className="BookingForm"
          aria-labelledby="booking-title"
          onSubmit={handleSubmit2}
        >
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input 
              name="name" 
              type="text" 
              placeholder="Name" 
              required
              aria-required="true" 
              value={name}
              onChange={(e) => setName(e.target.value)}                     
            />            
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input 
              name="email" 
              type="text" 
              placeholder="Email" 
              required
              aria-required="true" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}                     
            />             
           </FormGroup>
           <FormGroup>
            <Label htmlFor="phone">Phone</Label>
            <Input 
              name="phone" 
              type="text" 
              placeholder="Phone" 
              required
              aria-required="true" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}                     
            />             
           </FormGroup> 
           <FormGroup>
            <Label htmlFor="guests">Guests</Label>
            <Input 
              name="guests" 
              type="text" 
              placeholder="Guests" 
              required
              aria-required="true" 
              value={guests}
              onChange={(e) => setGuests(e.target.value)}                     
            />             
           </FormGroup> 
           <FormGroup>
            <Label htmlFor="date">Date</Label>
            <Input 
              id="date"
              name="date" 
              type="date" 
              placeholder="Guests" 
              value={date}
              onChange={handleDateChange}
              required
              aria-required="true"                                  
            />             
           </FormGroup>
            <FormGroup>
            <Label htmlFor="time">Time</Label>  
              <div className="box">
              {availableTimes.map((timeOption) => (
                  <div key={timeOption} className="timeOptions">
                      <input
                        type="radio"
                        id={timeOption}
                        name="time"
                        value={timeOption}
                        onChange={handleTimeChange}
                        required
                        aria-required="true"
                      />
                      {timeOption}
                  </div>
                ))}
                </div>
          </FormGroup>                                              
          <Button role="button" type="submit">submit</Button>
        </Form>
        </div>
    </>
  );
}

export default BookingForm;

