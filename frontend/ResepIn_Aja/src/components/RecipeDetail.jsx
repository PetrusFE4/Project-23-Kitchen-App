import { useParams } from "react-router-dom";
import "../styles/RecipeDetail.css"; // Import file CSS
import axios from "axios";
import { resepData as resepDum } from "../Data";
import { useState, useEffect } from "react";

const RecipeDetail = () => {

  const [resepData, setResepData] = useState({});


  const { id } = useParams();
  const recipe = resepDum.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <div>Resep tidak ditemukan.</div>;
  }


  const getResep = async () => {
    const resep = await axios.get (
      `http://localhost:8888/resep/${id}`
  )
    console.log(resep.data);
    setResepData(resep.data)
  }
  useEffect(() => {
    getResep();
  },[])



  return (
    <div className="recipe-detail-container">
      <div className="recipe-header">
        {/* <h1 className="recipe-title">{recipe.title}</h1> */}
      </div>
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
                  
                  {/* <video controls>
                    <source src={recipe.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> */}
                </div>
              </td>
              <td className="image-cell">
                <div className="recipe-image">
                  <img src={resepData.image} alt={resepData.nama_resep} />
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
                {/* <div className="recipe-details">
                  <h2>Detail Bahan</h2>
                  <ul>
                    {resepData.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div> */}
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                {/* <div className="recipe-steps">
                  <h2>Langkah-langkah Pembuatan</h2>
                  <ol>
                    {resepData.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecipeDetail;
