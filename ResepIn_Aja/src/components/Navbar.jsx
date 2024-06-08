//import React from 'react';
//import { useHistory } from 'react-router-dom';

// import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <img src="./src/assets/logo.png" alt="ResepIn Aja Logo" />
      <span>ResepIn Aja</span>
    </div>
    <ul className="navbar-links">
      <li><a onClick={() => navigate ('/Home')} className="active">Home</a></li>
      <li><a href="#resep">Resep</a></li>
      <li><a href="#categories">Categories</a></li>
      <li><a href="#upload">Upload Resep Mu</a></li>
      <li><a href="#about">About us</a></li>
    </ul>
    <div className="navbar-auth">
      <button className="login-button" onClick={() => navigate ('/Login')}>Login</button>
      <button className="signup-button" onClick={() => navigate ('/Signup')}>Sign Up</button>
    </div>
  </nav>
  );
}
export default Navbar;