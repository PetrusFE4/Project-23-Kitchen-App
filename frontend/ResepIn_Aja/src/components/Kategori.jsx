import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import { resepData } from "../Data";

const Kategori = () => {
  const navigate = useNavigate();
  const [resepData, setResepData] = useState([]);

  const getResep = async () => {
    try {
      const response = await axios.get("http://localhost:8888/resep");
      console.log(response.data);
      setResepData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getResep();
  }, []);

  const handleCategoryClick = (kategori) => {
    navigate(`/resep?kategori=${kategori}`);
  };

  // Filter unique categories
  const uniqueCategories = resepData.reduce((acc, item) => {
    if (!acc.some((category) => category.kategori === item.kategori)) {
      acc.push(item);
    }
    return acc;
  }, []);

  return (
    <div className="category-container">
      {uniqueCategories.map((category) => (
        <div key={category.kategori} className="category-card" onClick={() => handleCategoryClick(category.kategori)}>
          <img src={category.gambar} alt={category.kategori} />
          <h3>{category.kategori}</h3>
        </div>
      ))}
    </div>
  );
};

export default Kategori;
