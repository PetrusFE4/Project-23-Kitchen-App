import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa"; // Menggunakan "react-icons/fa" untuk FontAwesome
import { FaMagnifyingGlass } from "react-icons/fa6";

const Home = () => {
  const [resepData, setResepData] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [favMessage, setFavMessage] = useState(""); // State untuk pesan favorit

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      setIsAuthenticated(true);
      setUserId(user.id);
    }
  }, []);

  const getResep = async () => {
    try {
      const response = await axios.get("http://localhost:8888/resep");
      setResepData(response.data);
    } catch (error) {
      console.error("Error fetching resep:", error);
    }
  };

  useEffect(() => {
    getResep();
  }, []);

  const handleFav = async (resepId) => {
    if (!isAuthenticated) {
      alert("Please login to favorite a recipe");
      return;
    }

    try {
      await axios.post(
        "http://localhost:8888/user/favorites",
        {
          userId: userId,
          resepId: resepId,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken"),
          },
        }
      );

    } catch (error) {
      console.error("Gagal menambahkan ke favorit:", error);
      alert("Favorit telah ditambahkan.");
    }
  };

  return (
    <div className="home">
      <header className="home-header">
        <h1>Segala Jenis Resep Makanan Ada disini Semuanya...</h1>
        <p>
          Inilah tempatnya segala resep masakan enak! ResepIn Aja telah sajikan
          <br />
          beragam hidangan semi bergaya rumahan, tepat sebagai masakan sehari-hari.
        </p>
        <div className="search-container">
          <button className="explore-button">
            <a href="http://localhost:5173/Resep">Explore Resep Makanan <FaMagnifyingGlass /></a>
          </button>
        </div>
      </header>
      <section className="recipe-section">
        <div className="col">
          <p>Resep Makanan</p>
          <h3>Cari Berdasarkan Selera Kamu</h3>
        </div>
        <div className="filter-buttons">
          <button className="filter-button active">All</button>
          <button className="filter-button">Popular</button>
          <button className="filter-button">Kuah</button>
          <button className="filter-button">Manis</button>
        </div>
      </section>
      <div className="container">
        <div className="recipe-grid">
          {resepData.map((resep) => (
            <div className="recipe-card" key={resep.id}>
              <img src={resep.gambar} alt={resep.nama_resep} />
              <h3>{resep.nama_resep}</h3>
              <Link to={`/recipe/${resep.id}`} className="details-button">
                More details
              </Link>
              <button className="details-button fav-button" onClick={() => handleFav(resep.id)}>
                <FaHeart /> {/* Menggunakan FaHeart dari react-icons */}
              </button>
              {favMessage && <p>{favMessage}</p>}
            </div>
          ))}
        </div>
      </div>

      <section className="body-section">
        <div className="container py-4">
          <div className="row align-items-center p-3">
            <div className="col-md-6 text-center text-md-left">
              <h1 className="display-5">MASIH BINGUNG MAU MASAK APA HARI INI?</h1>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="food-images d-flex">
                <img src="/src/assets/img/image1.jpg" alt="Ayam Goreng" className="img-fluid mx-1" />
                <img src="/src/assets/img/image1.jpg" alt="Makanan 1" className="img-fluid mx-1" />
                <img src="/src/assets/img/image1.jpg" alt="Makanan 2" className="img-fluid mx-1" />
                <img src="/src/assets/img/image1.jpg" alt="Makanan 3" className="img-fluid mx-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="section-info d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center justify-content-center p-3 rounded ">
              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <h6>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis recusandae quisquam sed sint id, possimus nihil modi voluptatibus provident a voluptatem quos cumque et quas quis, deleniti odit iste ipsa? ipsum dolor sit
                  amet consectetur adipisicing elit. Nobis recusandae quisquam sed sint id, possimus nihil modi voluptatibus provident a voluptatem quos cumque et quas quis, deleniti odit iste ipsa?
                </h6>
              </div>
              <div className="col-3">
                <h2>Resep In Aja Itu Apa Siiiihhh ?</h2>
                <div className="resep-dots mt-3">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <div className="col-3 mt-20">
                <img src="/src/assets/img/photo1.png" alt="Girl thinking" className="photos" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
