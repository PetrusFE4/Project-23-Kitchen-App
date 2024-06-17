import { useParams } from "react-router-dom";
import "../styles/RecipeDetail.css"; // Import file CSS
import axios from "axios";
import { useState, useEffect } from "react";

const RecipeDetail = () => {
  const [resepData, setResepData] = useState(null);

  const { id } = useParams();

  const getResep = async () => {
    try {
      const response = await axios.get(`http://localhost:8888/resep/${id}`);
      console.log(response.data);
      setResepData(response.data);
    } catch (error) {
      console.error("Error fetching recipe data:", error);
      setResepData(null); // Set to null to handle error state
    }
  };

  useEffect(() => {
    getResep();
  }, [id]);

  if (!resepData) {
    return <div>Resep tidak ditemukan.</div>;
  }

  return (
    <div className="recipe-detail-container">
      <div className="recipe-header">{/* <h1 className="recipe-title">{resepData.nama_resep}</h1> */}</div>
      <div className="recipe-content">
        <table>
          <tbody>
            <tr>
              <td className="video-cell">
                <div className="recipe-video">
                  <iframe
                    width="840px"
                    height="473px"
                    src={`https://www.youtube.com/embed/${resepData.video}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube video"
                  ></iframe>
                </div>
              </td>
              <td className="image-cell">
                <div className="recipe-image">
                  <img src={resepData.gambar} alt={resepData.nama_resep} />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="recipe-description">
                  <h2>{resepData.nama_resep}</h2>
                  <p>{resepData.deskripsi}</p>
                </div>
              </td>
              <td>
                <div className="recipe-details">
                  <h2>Detail Bahan</h2>
                  <ul>{resepData.bahan && resepData.bahan.split(",").map((ingredient, index) => <li key={index}>{ingredient}</li>)}</ul>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <div className="recipe-steps">
                  <h2>Langkah-langkah Pembuatan</h2>
                  <ol>{resepData.instruksi && resepData.instruksi.split(",").map((step, index) => <li key={index}>{step}</li>)}</ol>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecipeDetail;
