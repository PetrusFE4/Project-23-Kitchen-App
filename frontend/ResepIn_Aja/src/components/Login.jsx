import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8888/login", {
        username,
        password,
      });
      const { token, user } = response.data; // Assuming the response includes a user object
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/Home");
      window.location.reload(); // Refresh the page after navigation
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          <div
            className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
            style={{ background: "#3D447A" }}
          >
            <div className="featured-image mb-3">
              <img
                src="/src/assets/iconseflog.png"
                className="img-fluid"
                style={{ width: "250px" }}
                alt="Featured"
              />
            </div>
            <p
              className="text-white fs-2"
              style={{
                fontFamily: "'Courier New', Courier, monospace",
                fontWeight: 600,
              }}
            ></p>
            <small
              className="text-white text-wrap text-center"
              style={{
                width: "17rem",
                fontFamily: "'Courier New', Courier, monospace",
              }}
            >
              Pusat Informasi Seputar Masakan Untuk Kamu.
            </small>
          </div>

          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>Hello, Again</h2>
                <p>We are happy to have you back.</p>
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-group mb-1">
                <input
                  type="password"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-group mb-5 d-flex justify-content-between">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="formCheck"
                  />
                  <label
                    htmlFor="formCheck"
                    className="form-check-label text-secondary"
                  >
                    <small>Remember Me</small>
                  </label>
                </div>
                <div className="forgot">
                  <small>
                    <a href="#">Forgot Password?</a>
                  </small>
                </div>
              </div>
              <div className="input-group mb-3">
                <button
                  className="btn text-white btn-lg w-100 fs-6"
                  style={{ background: "#3D447A" }}
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-light w-100 fs-6">
                  <img
                    src="/src/assets/google.png"
                    style={{ width: "20px" }}
                    className="me-2"
                    alt="Google"
                  />
                  <small>Sign In with Google</small>
                </button>
              </div>
              <div className="row">
                <p className="text-bold text-center">
                  Don't have account?
                  <a className="link-up" onClick={() => navigate("/Signup")}>
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
