import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useUser } from "../context/BookingContext";

function BookingForm({ availableTimes, dispatch, onSubmit }) {
  const { user, updateBooking } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("1");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    setTime(selectedTime);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      guests,
      date,
      time,
    };

    updateBooking(name, email, phone, guests, date, time);
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <h3>Reservation Form</h3>
      <p>Current Context User:</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Guests: {user.guests}</p>
      <p>Date: {user.date}</p>
      <p>Time: {user.time}</p>
      <p>Occasion: </p>
      <hr />

      <div className="BookingFormContainer">
        <Form
          className="BookingForm"
          aria-labelledby="booking-title"
          onSubmit={handleSubmit}
        >
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-required="true"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              aria-required="true"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="guests">Guests</Label>
            <Input
              id="guests"
              type="number"
              placeholder="Guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
              required
              aria-required="true"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={handleDateChange}
              required
              aria-required="true"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="time">Time</Label>
            <Input
              type="select"
              name="time"
              id="time"
              value={time}
              onChange={handleTimeChange}
              required
              aria-required="true"
            >
              {availableTimes.map((timeOption) => (
                <option key={timeOption} value={timeOption}>
                  {timeOption}
                </option>
              ))}
            </Input>
          </FormGroup>
          <Button role="button" type="submit">Reservation</Button>
        </Form>
      </div>
    </div>
  );
}

export default BookingForm;
