import React from 'react';
import './Footer.css'; // Make sure to create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>CONTACT NOW</h3>
        <div>
          <h4>Rawalpindi Office</h4>
          <p>3rd Floor, Burj Noor Trade Center, Main Murree Rd, Shamsabad, Rawalpindi, Punjab</p>
        </div>
        <div>
          <h4>Karachi Office</h4>
          <p>Office No.502 5th Floor Kashif Centre Shahra e Faisal Karachi.</p>
        </div>
        <div>
          <p>📞 +92 (51) 6153523</p>
          <p>📞 +92 (51) 6152222</p>
        </div>
      </div>
      <div className="footer-section">
        <h3>Tripplannerpk</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Company</a></li>
          <li><a href="#terms">Terms & Conditions</a></li>
          <li><a href="#faqs">FAQ's</a></li>
          <li><a href="#complaints">Complaints</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>SUBSCRIBE NEWSLETTER</h3>
        <form>
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter Your Email" />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
