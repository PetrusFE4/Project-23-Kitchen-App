import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadResep = () => {
  const [recipeData, setRecipeData] = useState([]);
  const navigate = useNavigate();
  const userId = JSON.parse(localStorage.getItem('user'))?.id; 

  useEffect(() => {

    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:8888/resep/');
        const data = await response.json();
        // Filter resep berdasarkan userId
        const userRecipes = data.filter(recipe => recipe.userId === userId);
        setRecipeData(userRecipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, [userId, navigate]);

  if (!userId) {
    return <p>Please log in to see your favorite recipes.</p>;
  }

  return (
    <>
      <div className="text-body text-center">
        <h2 className="title-text">Buat Menu Resep Makanan Versi Kamu</h2>
        <p>
          Ayo, unggah resep andalanmu sekarang dan dapatkan kesempatan
          memenangkan hadiah spesial dari ResepIn AJa.
        </p>
        <div className="input-group">
          <button
            className="btn"
            style={{ background: "#F6BE2C" }}
            onClick={() => navigate("/FormResep")}
          >
            Upload Resep Kamu
          </button>
        </div>
      </div>

      <div className="container">
        <div className="recipe-grid">
          {recipeData.map((recipe, index) => (
            <div className="recipe-card" key={index}>
              <img src={recipe.gambar} alt={recipe.nama_resep} />
              <h3>{recipe.nama_resep}</h3>
              <p>{recipe.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UploadResep;
