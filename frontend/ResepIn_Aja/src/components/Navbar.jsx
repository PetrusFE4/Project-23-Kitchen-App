import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";

import AdminDashboard from "./Admin/AdminDashboard";
import ProductManagement from "./Admin/ProductManagement";
import UserManagement from "./Admin/UserManagement";

const Navbar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [userId, setUserId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeContent, setActiveContent] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        setUsername(user.username);
        setUserId(user.id);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUsername(null);
    setUserId(null);
    setActiveContent(null);
    navigate("/Home");
    window.location.reload();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const ShowDashboard = () => {
    setActiveContent(<AdminDashboard />);
  };

  const showProductManagement = () => {
    setActiveContent(<ProductManagement />);
  };

  const showUserManagement = () => {
    setActiveContent(<UserManagement />);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo" onClick={() => navigate("/Home")}>
          <img src={Logo} alt="ResepIn Aja Logo" />
          <span>ResepIn Aja</span>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          {userId !== 1 && (
            <>
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
              {!username && (
                <>
                  <li>
                    <button
                      className="login-button"
                      onClick={() => navigate("/Login")}
                    >
                      Login
                    </button>
                  </li>
                  <li>
                    <button
                      className="signup-button"
                      onClick={() => navigate("/Signup")}
                    >
                      Sign Up
                    </button>
                  </li>
                </>
              )}
            </>
          )}
          {userId === 1 && (
            <>
              <li>
                <a onClick={ShowDashboard}>Dashboard</a>
              </li>
              <li>
                <a onClick={showProductManagement}>Produk Management</a>
              </li>
              <li>
                <a onClick={showUserManagement}>Manage Users</a>
              </li>
            </>
          )}
        </ul>
        {username && (
          <div className={`navbar-auth ${menuOpen ? "active" : ""}`}>
            <span>Welcome, {username}</span>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </nav>
      <div className="content-container">{activeContent}</div>
    </div>
  );
};

export default Navbar;
