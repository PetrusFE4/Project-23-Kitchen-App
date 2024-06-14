import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png"

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/Home")}>
        <img src={Logo} alt="ResepIn Aja Logo" />
        <span>ResepIn Aja</span>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a onClick={() => navigate("/Resep")}>Resep</a>
        </li>
        <li>
          <Link to="/Kategori">Categories</Link> {/* Link to category page */}
        </li>
        <li>
          <Link to="/UploadResep">Upload Resep Mu</Link>
        </li>
        <li>
          <Link to="/AboutUs">About us</Link>
        </li>
      </ul>
      <div className="navbar-auth">
        <button className="login-button" onClick={() => navigate("/Login")}>
          Login
        </button>
        <button className="signup-button" onClick={() => navigate("/Signup")}>
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
