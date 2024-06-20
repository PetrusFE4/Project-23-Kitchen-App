import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/uploadresep.css';

const UploadResep = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteRecipeId, setDeleteRecipeId] = useState(null);
  const navigate = useNavigate();
  const userId = JSON.parse(localStorage.getItem('user'))?.id; 
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:8888/resep/');
        const data = await response.json();
        const userRecipes = data.filter(recipe => recipe.userId === userId);
        setRecipeData(userRecipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, [userId]);

  const showDeleteConfirmPopup = (id) => {
    setDeleteRecipeId(id);
    setShowConfirm(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(`http://localhost:8888/resep/${deleteRecipeId}/delete`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setRecipeData(recipeData.filter(recipe => recipe.id !== deleteRecipeId));
      setShowConfirm(false);
      setDeleteRecipeId(null);
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  const closePopup = () => {
    setShowConfirm(false);
    setDeleteRecipeId(null);
  };

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
              <img src={recipe.gambar} alt={recipe.nama_resep} className="recipe-img" />
              <h3>{recipe.nama_resep}</h3>
              <p>{recipe.deskripsi}</p>
              <div className="button-group">
                <button onClick={() => navigate(`/UpdateResep/${recipe.id}`)} className="btn-edit">Edit</button>
                <button onClick={() => showDeleteConfirmPopup(recipe.id)} className="btn-delete">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showConfirm && (
        <div className="popup-container">
          <div className="popup-message">
            <p>Apakah kamu yakin mau menghapus ini?</p>
            <div className="confirm-buttons">
              <button onClick={handleDeleteConfirm}>Ya</button>
              <button onClick={closePopup}>Tidak</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadResep;
