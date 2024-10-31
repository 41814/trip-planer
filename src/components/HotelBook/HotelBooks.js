import React, { useState } from 'react';
import './HotelBooks.css';

const HotelBooking = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomType, setRoomType] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [specialRequests, setSpecialRequests] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (new Date(checkInDate) >= new Date(checkOutDate)) {
      setError('Check-out date must be after check-in date.');
      return;
    }

    console.log('Booking Information:', {
      fullName, email, checkInDate, checkOutDate, roomType, guestCount, specialRequests
    });
    alert('Booking submitted successfully');

    // Clear form
    setFullName('');
    setEmail('');
    setCheckInDate('');
    setCheckOutDate('');
    setRoomType('');
    setGuestCount(1);
    setSpecialRequests('');
    setError('');
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <>
      <header className=''  style={{ position: 'relative',
        //  height: '100vh', 
         overflow: 'hidden' }}>
        <div className="header-background"></div>
        <nav className="navbar">
        <div className="logo">
          <img src="logo12.webp" alt="Trip Planner Logo" />
        </div>
        <ul>
        <li><a href="#home">Home</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="/Tours">Tours</a></li>
          <li><a href="/Contact">Contact</a></li>
          <li><a href="/login">SingnIn</a></li>
        </ul>
      </nav>
      </header>
      <div  className='booking-body pt-5 pb-5'>
      
        <div className="container1  ">
          <h1 className="text-center ">Hotel Room Booking Form</h1>
          <div className="form-booking">
            <h4 className="text-center">Enter Booking Details</h4>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleSubmit}>
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                className="form-control"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="checkInDate">Check-In Date:</label>
              <input
                type="date"
                id="checkInDate"
                className="form-control"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                required
              />

              <label htmlFor="checkOutDate">Check-Out Date:</label>
              <input
                type="date"
                id="checkOutDate"
                className="form-control"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                required
              />

              <label htmlFor="roomType">Room Type:</label>
              <select
                id="roomType"
                className="form-control"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                required
              >
                <option value="">Select Room Type</option>
                <option value="Single">Single Room</option>
                <option value="Double">Double Room</option>
                <option value="Suite">Suite Room</option>
              </select>

              <label htmlFor="guestCount">Number of Guests:</label>
              <input
                type="number"
                id="guestCount"
                className="form-control"
                placeholder="Number of guests"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                min="1"
                required
              />

              <label htmlFor="specialRequests">Special Requests (Optional):</label>
              <textarea
                id="specialRequests"
                className="form-control"
                placeholder="Enter any special requests"
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
              />

              <div className="text-center mt-4">
                <button type="submit" className="btn btn-primary">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelBooking;
