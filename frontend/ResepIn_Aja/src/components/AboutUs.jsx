/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import "../styles/aboutus.css"

const AboutUs = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="about-section">
        <h1>About Us Page</h1>
        <h4 className="sub-title text-warning">
          Kami adalah Team Developer ResepIn_Aja
        </h4>
        <p>
          <a
            className="text-resep text-warning"
            onClick={() => Navigate("/Home")}
          >
            ResepIn_Aja
          </a>{" "}
          adalah sebuah platform yang menyediakan cara atau bahan apa aja yang
          di butuhkan untuk memasak sebuah masakan yang enak dan lezat sehingga
          mempermudahkan ibu rumah tangga yang akan masak makanan untuk keluarga
          namun bingung bahan masakan nya apa aja. Nahhhh, ResepIn_Aja hadir
          sebagai solusi permasalahan tersebut.
        </p>
      </div>
      <h2 className="text-team text-center"> THIS IS OUR TEAM ....</h2>
      <div className="container">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="/src/assets/img/team3.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">ARI Wibowo</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up
            </p>
            <a href="#" className="btn btn-light text-black">
              Get in touch with me
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="/src/assets/img/team3.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Rejka Aditiya</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up
            </p>
            <a href="#" className="btn btn-light text-black">
              Get in touch with me
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="/src/assets/img/team3.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Rendy Rizky</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up
            </p>
            <a href="#" className="btn btn-light text-black">
              Get in touch with me
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="/src/assets/img/team3.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Fawas</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up
            </p>
            <a href="#" className="btn btn-light text-black">
              Get in touch with me
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="/src/assets/img/team3.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Bagus Aji</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up
            </p>
            <a href="#" className="btn btn-light text-black">
              Get in touch with me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
