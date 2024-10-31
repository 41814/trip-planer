import React, { useState } from 'react';
import './login.css'; // Import the CSS file

const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', userName, 'Password:', userPassword);
  };

  return (
    <div className='bodyies'>
        <div className="container ">
      <div className="row">
        <div className="col-md-offset-5 col-md-4 text-center">
          <h1 className='text-white'>Unique Login Form</h1>
          <div className="form-login">
            <h4>Secure Login</h4>
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
                type="password"
                id="userPassword"
                className="form-control input-sm chat-input"
                placeholder="Password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
              <br /><br />
              <div className="wrapper">
                <span className="group-btn">
                  <button type="submit" className="btn btn-danger btn-md">
                    Login <i className="fa fa-sign-in"></i>
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
        <p>© 2020 Unique Login Form. All rights reserved | Design by <a href="https://freecss.tech">Free Css</a></p>
      </div>
      {/* //Footer */}
    </div>
    </div>
  );
};

export default LoginForm;
