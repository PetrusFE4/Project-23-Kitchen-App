import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-xl-3 my-3">
            <h5 className="mb-4 font-weight-bold text-uppercase">
              Contact Details
            </h5>
            <p className="mb-1 small-text">
              <strong>Tel:</strong> +(504) 2276-0010
            </p>
            <p className="mb-1 small-text">
              <strong>Mov:</strong> +(504) 2276-0010
            </p>
            <p className="mb-0 small-text">
              <strong>E-mail:</strong> infocargo@cargo.com
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 my-3">
            <h5 className="mb-4 font-weight-bold text-uppercase">Menu</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">Home</a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">Resep</a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">Categories</a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">Upload Resep Mu</a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">About us</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-5 col-xl-6 my-3 d-flex justify-content-center align-items-center">
            <img src="/src/assets/logoRA.png" alt="Logo" className="img-fluid logo" />
          </div>
        </div>
      </div>
      <div className="Copyrigt bg-warning py-2">
        <p className="mb-0 text-center text-white" style={{ fontSize: '12px' }}>
          &copy; ResepInAja
        </p>
        <p className="mb-0 text-center text-white" style={{ fontSize: '12px' }}>
          Tel: +(504) 2276-0010 | Mov: +(504) 2276-0010
        </p>
      </div>
    </footer>
  );
};

export default Footer;
