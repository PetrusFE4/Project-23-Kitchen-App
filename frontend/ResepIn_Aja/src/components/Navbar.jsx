import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      setUsername(user.username);
      setRole(user.role);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUsername(null);
    setRole(null);
    navigate("/Home");
    window.location.reload();
  };

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
          <Link to="/Kategori">Categories</Link>
        </li>
        <li>
          <Link to="/UploadResep">Upload Resep Mu</Link>
        </li>
        <li>
          <Link to="/AboutUs">About us</Link>
        </li>
              <li>
                <Link to="/Favorites">Favorites</Link>
              </li>
      </ul>
      <div className="navbar-auth">
        {username ? (
          <>
            <span>Welcome, {username}</span>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="login-button" onClick={() => navigate("/Login")}>
              Login
            </button>
            <button className="signup-button" onClick={() => navigate("/Signup")}>
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
