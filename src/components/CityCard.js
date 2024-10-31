// src/components/CityCard.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CityCard = () => {
  // Define an array of 20 city objects
  const cities = [
    { name: "Lahore", description: "A vibrant city known for its culture.", image: "img5.avif" , link: 'DataDetails'},
    { name: "Karachi", description: "The bustling metropolis and financial hub.", image: "karachi.jpg", link: 'DataDetails' },
    { name: "Islamabad", description: "The serene capital city surrounded by hills.", image: "fasal.jpg", link: 'DataDetails' },
    { name: "Peshawar", description: "A city with a rich history and cultural heritage.", image: "img3.webp", link: 'DataDetails' },
    { name: "Quetta", description: "Known for its unique landscapes and culture.", image: "queta.jpg", link: 'DataDetails' },
    { name: "Faisalabad", description: "A major industrial city in Pakistan.", image: "faslabad.jpg", link: 'DataDetails' },
    { name: "Multan", description: "Famous for its historical sites and Sufi shrines.", image: "multan.jpg", link: 'DataDetails'},
    { name: "Rawalpindi", description: "A city known for its military presence.", image: "rawal.jpg", link: 'DataDetails' },
    { name: "Sialkot", description: "Known for its sports goods industry.", image: "sia.jpg", link: 'DataDetails' },
    { name: "Hyderabad", description: "A city with a rich history and cultural diversity.", image: "hyd.jpg", link: 'DataDetails'},
    { name: "Gujranwala", description: "Famous for its food and vibrant culture.", image: "gura.jpg", link: 'DataDetails'},
    { name: "Larkana", description: "Known for its archaeological sites.", image: "larkana.jpg", link: 'DataDetails'},
    { name: "Bahawalpur", description: "A city rich in culture and history.", image: "bahawal.jpg", link: 'DataDetails' },
    { name: "Mardan", description: "Known for its beautiful valleys.", image: "mardan.jpg", link: 'DataDetails' },
    { name: "Kohat", description: "Famous for its scenic beauty and archaeological sites.", image: "kohat.jpg", link: 'DataDetails' },
    { name: "Sukkur", description: "Known for the Sukkur Barrage and historical sites.", image: "sukar.jpg", link: 'DataDetails'},
    { name: "Dera Ghazi Khan", description: "A city rich in agricultural produce.", image: "ka.jpg", link: 'DataDetails'},
    { name: "Nowshera", description: "Known for its beautiful landscapes.", image: "nosh.jpg", link: 'DataDetails' },
    { name: "Mirpur", description: "Famous for its scenic beauty and lake.", image: "mir.jpg", link: 'DataDetails' },
    { name: "Sahiwal", description: "Known for its agricultural produce.", image: "sahiwal.jpg", link: 'DataDetails'},
    { name: "Kotli", description: "A city known for its scenic beauty and rich culture.", image: "kotli.jpg", link: 'DataDetails', lastUpdated: "2 weeks ago" },
  ];

  return (
    <div className="container pt-5">
      <div className="row">
        {/* Map over the cities array to generate cards */}
        {cities.map((city, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card" style={{ width: "18rem"}}>
              <img src={city.image} className="card-img-top" alt={city.name} />
              <div className="card-body">
                <h5 className="card-title">{city.name}</h5>
                <p className="card-text">{city.description}</p>
                <a href={city.link} className="btn btn-primary">Go somewhere</a>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated {city.lastUpdated}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityCard;
