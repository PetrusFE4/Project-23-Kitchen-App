import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaRegTrashCan } from "react-icons/fa6";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const getFavorites = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8888/user/${user.id}/favorites`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("authToken"),
            },
          }
        );
        setFavorites(response.data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    if (user) {
      getFavorites();
    }
  }, [user]);

  const handleDeleteFav = async (resepId) => {
    const confirmDelete = window.confirm("Apakah kamu yakin mau menghapus ini?");
    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(
        `http://localhost:8888/user/favorites`,
        {
          data: { userId: user.id, resepId: resepId },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken"),
          },
        }
      );
      // Hapus favorit dari state setelah sukses menghapus dari database
      setFavorites(favorites.filter((fav) => fav.resep.id !== resepId));
    } catch (error) {
      console.error("Error deleting favorite:", error);
    }
  };

  if (!user) {
    return <p>Please log in to see your favorite recipes.</p>;
  }

  return (
    <div className="favorites">
      <h2 className="textfav">Your Favorite Recipes</h2>
      <div className="recipe-grid">
        {favorites.map((fav) => (
          <div className="recipe-card" key={fav.resep.id}>
            <img src={fav.resep.gambar} alt={fav.resep.nama_resep} />
            <h3>{fav.resep.nama_resep}</h3>
            <Link to={`/recipe/${fav.resep.id}`} className="details-button">
              More details
            </Link>
            <button
              className="delete-button"
              onClick={() => handleDeleteFav(fav.resep.id)}
            >
              <FaRegTrashCan />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
