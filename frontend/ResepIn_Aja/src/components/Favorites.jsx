import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const getFavorites = async () => {
      try {
        const response = await axios.get(`http://localhost:8888/user/${user.id}/favorites`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken"),
          },
        });
        setFavorites(response.data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    if (user) {
      getFavorites();
    }
  }, [user]);

  if (!user) {
    return <p>Please log in to see your favorite recipes.</p>;
  }

  return (
    <div className="favorites">
      <h2>Your Favorite Recipes</h2>
      <div className="recipe-grid">
        {favorites.map((fav) => (
          <div className="recipe-card" key={fav.resep.id}>
            <img src={fav.resep.gambar} alt={fav.resep.nama_resep} />
            <h3>{fav.resep.nama_resep}</h3>
            <Link to={`/recipe/${fav.resep.id}`} className="details-button">
              More details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
