import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { resepData } from '../Data';
import "../styles/resep.css";

const Resep = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get('kategori');

  const filteredResep = resepData.filter(resep => 
    (!selectedCategory || resep.category === selectedCategory) && 
    resep.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          {filteredResep.map((resep) => (
            <div className="col-md-3 mb-4" key={resep.id}>
              <div className="card">
                <img
                  src={resep.image}
                  className="card-img-top"
                  alt={resep.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{resep.title}</h5>
                  <p className="card-text">{resep.description}</p>
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
