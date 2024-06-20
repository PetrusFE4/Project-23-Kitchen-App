// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-xl-3 my-3">
            <h5 className="mb-4 font-weight-bold text-uppercase">Contact Details</h5>
            <p className="mb-1 small-text">
              <a>Tel: +(504) 2276-0010</a>
            </p>
            <p className="mb-1 small-text">
              <a>Mov: +(504) 2276-0010</a>
            </p>
            <p className="mb-0 small-text">
              <a>E-mail: infocargo@cargo.com</a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 my-3">
            <h5 className="mb-4 font-weight-bold text-uppercase">Menu</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Resep
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Upload Resep Mu
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  About us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-5 col-xl-6 my-3 d-flex justify-contnt-center align-items-center">
            <img src="/src/assets/Logo.png" alt="Logo" className="img-fluid logo " /> <span className="textspanset">ResepIn_Aja</span>
          </div>
        </div>
      </div>
      <div className="Copyrigt bg-warning py-2">
        <p className="mb-0 text-center text-white" style={{ fontSize: "18px" }}>
          &copy; ResepInAja
        </p>
      </div>
    </footer>
  );
};

export default Footer;
