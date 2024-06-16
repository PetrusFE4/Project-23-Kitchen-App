import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/resep.css";
import axios from "axios";

const Resep = () => {
  const [resepData, setResepData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filterResep, setFilterResep] = useState([]);
  const location = useLocation();

  const getResep = async () => {
    try {
      const response = await axios.get("http://localhost:8888/resep");
      console.log(response.data);
      setResepData(response.data);
      setFilterResep(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getResep();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const selectedCategory = params.get("kategori");

    const filterItem = resepData.filter(
      (resep) =>
        (!selectedCategory || resep.kategori === selectedCategory) &&
        (!searchItem || (resep.nama_resep && resep.nama_resep.toLowerCase().includes(searchItem.toLowerCase())))
    );
    setFilterResep(filterItem);
  }, [location.search, searchItem, resepData]);

  const handleInputChange = (e) => {
    const searchItem = e.target.value;
    setSearchItem(searchItem);

    const params = new URLSearchParams(location.search);
    const selectedCategory = params.get("kategori");

    const filterItem = resepData.filter(
      (resep) =>
        (!selectedCategory || resep.kategori === selectedCategory) &&
        resep.nama_resep &&
        resep.nama_resep.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilterResep(filterItem);
  };

  return (
    <>
      <section>
        <div className="search-container">
          <div className="searchbar">
            <input
              type="text"
              className="form-control"
              placeholder="Cari Resep..."
              value={searchItem}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="resep row">
          {filterResep.map((resep) => (
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
