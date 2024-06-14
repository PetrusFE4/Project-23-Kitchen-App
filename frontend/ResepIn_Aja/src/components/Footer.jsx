// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-4">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold text-uppercase">
              Contact Details
            </h5>
            <p>
              <strong>Tel:</strong> +(504) 2276-0010
              <br />
              <strong>Mov:</strong> +(504) 2276-0010
              <br />
              <strong>E-mail:</strong> infocargo@cargo.com
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold text-uppercase">Menu</h5>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Home
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Resep
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Categories
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Upload Resep Mu
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                About us
              </a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 text-center">
            <img src="/src/assets/logoRA.png" alt="Logo" />
          </div>
        </div>
      </div>
      <div className="Copyrigt">
        <p>Copy&Right &copy; ResepInAja</p>
      </div>
    </footer>
  );
};

export default Footer;
