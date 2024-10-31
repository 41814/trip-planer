import React, { useState } from 'react';
import './login.css'; // Import the CSS file

const RegistrationForm = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Username:', userName, 'Email:', userEmail, 'Password:', userPassword, 'Confirm Password:', confirmPassword);
    // Add validation and API call logic as needed
  };

  return (
    <div className='bodyies'>
      <div className="container">
        <div className="row">
          <div className="col-md-offset-5 col-md-4 text-center">
            <h1 className='text-white'>Unique Registration Form</h1>
            <div className="form-login">
              <h4>Secure Registration</h4>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="userName"
                  className="form-control input-sm chat-input"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <br /><br />
                <input
                  type="email"
                  id="userEmail"
                  className="form-control input-sm chat-input"
                  placeholder="Email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <br /><br />
                <input
                  type="password"
                  id="userPassword"
                  className="form-control input-sm chat-input"
                  placeholder="Password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
                <br /><br />
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-control input-sm chat-input"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <br /><br />
                <div className="wrapper">
                  <span className="group-btn">
                    <button type="submit" className="btn btn-danger btn-md">
                      Register <i className="fa fa-user-plus"></i>
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br /><br /><br />
        {/* Footer */}
        <div className="footer text-white text-center">
          <p>© 2020 Unique Registration Form. All rights reserved | Design by <a href="https://freecss.tech">Free Css</a></p>
        </div>
        {/* //Footer */}
      </div>
    </div>
  );
};

export default RegistrationForm;
