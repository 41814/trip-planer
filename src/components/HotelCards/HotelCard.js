import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './HotelCard.css';

const HotelCard = () => {
    return (
        <div className="hotel-card-container pb-5">
            <div className="hotel-card ">
                <div className="hotel-info pb-3">
                    <h2>Hotel Name 1</h2>
                    <p>Location: City, Country</p>
                    <p>Description: A brief description of the hotel, its amenities, and services offered.</p>
                    <p>Rating: ⭐⭐⭐⭐</p>
                    <Link to="/HotelBooks">
                        <button className="book-now-button">Book Now</button>
                    </Link>
                </div>
                <div className="hotel-image">
                    <img src="room4.png" alt="Hotel" />
                </div>
            </div>
            <div className="hotel-card">
                <div className="hotel-info pb-3">
                    <h2>Hotel Name 2</h2>
                    <p>Location: City, Country</p>
                    <p>Description: A brief description of the hotel, its amenities, and services offered.</p>
                    <p>Rating: ⭐⭐⭐⭐</p>
                    <Link to="/HotelBooks">
                        <button className="book-now-button">Book Now</button>
                    </Link>
                </div>
                <div className="hotel-image">
                    <img src="room2.png" alt="Hotel" />
                </div>
            </div>
            <div className="hotel-card">
                <div className="hotel-info pb-3">
                    <h2>Hotel Name 3</h2>
                    <p>Location: City, Country</p>
                    <p>Description: A brief description of the hotel, its amenities, and services offered.</p>
                    <p>Rating: ⭐⭐⭐⭐</p>
                    <Link to="/HotelBooks">
                        <button className="book-now-button">Book Now</button>
                    </Link>
                </div>
                <div className="hotel-image">
                    <img src="room3.png" alt="Hotel" />
                </div>
            </div>
            <div className="hotel-card">
                <div className="hotel-info pb-3">
                    <h2>Hotel Name 4</h2>
                    <p>Location: City, Country</p>
                    <p>Description: A brief description of the hotel, its amenities, and services offered.</p>
                    <p>Rating: ⭐⭐⭐⭐</p>
                    <Link to="/HotelBooks ">
                        <button className="book-now-button">Book Now</button>
                    </Link>
                </div>
                <div className="hotel-image">
                    <img src="room5.png" alt="Hotel" />
                </div>
            </div>
            <div className="hotel-card">
                <div className="hotel-info pb-3">
                    <h2>Hotel Name 5</h2>
                    <p>Location: City, Country</p>
                    <p>Description: A brief description of the hotel, its amenities, and services offered.</p>
                    <p>Rating: ⭐⭐⭐⭐</p>
                    <Link to="/HotelBooks">
                        <button className="book-now-button">Book Now</button>
                    </Link>
                </div>
                <div className="hotel-image">
                    <img src="room6.png" alt="Hotel" />
                </div>
            </div>
            <div className="hotel-card">
                <div className="hotel-info pb-3">
                    <h2>Hotel Name 5</h2>
                    <p>Location: City, Country</p>
                    <p>Description: A brief description of the hotel, its amenities, and services offered.</p>
                    <p>Rating: ⭐⭐⭐⭐</p>
                    <Link to="/HotelBooks">
                        <button className="book-now-button">Book Now</button>
                    </Link>
                </div>
                <div className="hotel-image">
                    <img src="room6.png" alt="Hotel" />
                </div>
            </div>
        </div>
    );
};

export default HotelCard;
