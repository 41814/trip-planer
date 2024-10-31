import React, { useState } from 'react';
import './DataDetails.css';
import HotelCard from '../../components/HotelCards/HotelCard';
import Footer from '../../components/Footer';

const DataDetails = () => {
  const images = [
    { src: 'hotel1.jpg', alt: 'Lahore - Badshahi Mosque' },
    { src: 'hotel2.jpg', alt: 'Destination 2' },
    { src: 'hotel3.jpg', alt: 'Destination 3' },
    { src: 'hotel4.jpg', alt: 'Destination 4' },
    { src: 'hotel5.jpg', alt: 'Destination 5' },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
<div className="header-background3">
          <img src="hotelPakistan.jpg" alt="Pakistan Landscape" />
        </div>
  return (
    <>
      <header className="header3">
        <div className="header-background3">
          <img src="hotelPakistan.jpg" alt="Pakistan Landscape" />
        </div>
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

      <div className="trip-planner-text">
        <h1><span>Top Hotels</span></h1>
        <p>Welcome Here!</p>
      </div>

      <div className="data-details">
        {/* Main image display */}
        <div className="main-image">
          <img src={selectedImage.src} alt={selectedImage.alt} className="large-img" />
        </div>

        {/* Thumbnail images below */}
        <div className="thumbnail-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`thumbnail ${image.src === selectedImage.src ? 'active' : ''}`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>

        {/* Trip Planner description */}
        <p className="trip-description">
          Atlantis Hotel is a luxury 5-Star hotel located in Lahore, Pakistan. These hotels are considered the top hotels in Lahore. 
          With an underwater aquarium and Aquaventure water park, this place is perfect for people who want to enjoy activities that involve water. 
          The rooms here are quite fabulous, featuring a balcony, seating area, satellite TV, and mini bar. Here you can indulge in all types of luxuries and have the best time. 
          For hotel deals, check our Dubai travel packages. Hotel amenities and facilities include:
        </p>

        <HotelCard />
      </div>
     <Footer/>
    </>
  );
};

export default DataDetails;
