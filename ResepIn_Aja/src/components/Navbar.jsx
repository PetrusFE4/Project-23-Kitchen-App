// import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <img src="./src/assets/logo.png" alt="ResepIn Aja Logo" />
      <span>ResepIn Aja</span>
    </div>
    <ul className="navbar-links">
      <li><a href="#home" className="active">Home</a></li>
      <li><a href="#resep">Resep</a></li>
      <li><a href="#categories">Categories</a></li>
      <li><a href="#upload">Upload Resep Mu</a></li>
      <li><a href="#about">About us</a></li>
    </ul>
    <div className="navbar-auth">
      <button className="login-button">Login</button>
      <button className="signup-button">Sign Up</button>
    </div>
  </nav>
  );
}

export default Navbar;