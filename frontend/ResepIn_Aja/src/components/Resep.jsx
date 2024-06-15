import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { resepData } from "../Data";
import "../styles/resep.css";
import axios from "axios";

const Resep = () => {


  const [resepData, setResepData] = useState([]);

  const getResep = async () => {
    const resep = await axios.get (
      "http://localhost:8888/resep"
  )
    console.log(resep.data);
    setResepData(resep.data)
  }

  useEffect(() => {
    getResep();
  },[])

  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get("kategori");

  // const filteredResep = resepData.filter(
  //   (resep) =>
  //     (!selectedCategory || resep.kategori === selectedCategory) &&
  //     resep.nama_resep.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <>
      <section>
        <div className="search-container">
          <div className="searchbar">
            <input
              type="text"
              className="form-control"
              placeholder="Cari Resep..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="resep row">
          {resepData.map((resep) => (
            <div className="col-md-3 mb-4" key={resep.id}>
              <div className="card">
                <img
                  src={resep.gambar}
                  className="card-img-top"
                  alt={resep.nama_resep}
                />
                <div className="card-body">
                  <h5 className="card-title">{resep.nama_resep}</h5>
                  <p className="card-text">{resep.deskripsi}</p>
                  <a href={`/recipe/${resep.id}`} className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Resep;
