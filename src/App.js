import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CityDetails from './components/CityDetails';
import './styles.css'; // Ensure this path is correct
import LoginForm from './components/login form/loginForm'; // Ensure path is correct
import RegistrationForm from './components/login form/registrationform'; // Ensure path is correct
// import Teurist from './components/teuristplaceinformation/Teurist'; // Rename here
import DataDetails from './pages/DataDetails/DataDetails';
import HotelBooking from './components/HotelBook/HotelBooks';
import Tours from './components/Tour/Tours';
import Lahore from './components/Tour/Lahore';
import Islamabad from './components/Tour/Islamabad';
import Muree from './components/Tour/Muree';
import Karachi from './components/Tour/Karachi';
import ContactUs from './components/login form/ContactUs';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tours" element={<Tours />} />
          <Route path="/lahore" element={<Lahore />} />
          <Route path="/Islamabad" element={<Islamabad />} />
          <Route path="/Karachi" element={<Karachi />} />
          <Route path="/Muree" element={<Muree />} />
          <Route path="/CityDetails" element={<CityDetails />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/registrationForm" element={<RegistrationForm />} />
          <Route path="/DataDetails" element={<DataDetails />} />
          <Route path="/HotelBooks" element={<HotelBooking />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
