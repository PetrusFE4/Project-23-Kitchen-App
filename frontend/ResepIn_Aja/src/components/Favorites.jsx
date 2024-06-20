import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaRegTrashCan } from "react-icons/fa6";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [popupMessage, setPopupMessage] = useState(""); // State untuk pesan pop-up
  const [showConfirm, setShowConfirm] = useState(false); // State untuk menampilkan pop-up konfirmasi
  const [deleteResepId, setDeleteResepId] = useState(null); // State untuk menyimpan ID resep yang akan dihapus
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

  const handleDeleteFav = async () => {
    if (!deleteResepId) return;

    try {
      await axios.delete(
        `http://localhost:8888/user/favorites`,
        {
          data: { userId: user.id, resepId: deleteResepId },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken"),
          },
        }
      );
      setFavorites(favorites.filter((fav) => fav.resep.id !== deleteResepId));
      setPopupMessage("Resep berhasil dihapus dari favorit!");
    } catch (error) {
      console.error("Error deleting favorite:", error);
      setPopupMessage("Gagal menghapus dari favorit.");
    } finally {
      setShowConfirm(false); // Sembunyikan pop-up konfirmasi
      setDeleteResepId(null); // Reset ID resep yang akan dihapus

      setTimeout(() => {
        setPopupMessage(""); // Sembunyikan pesan pop-up setelah beberapa detik
      }, 3000);
    }
  };

  const showDeleteConfirmPopup = (resepId) => {
    setDeleteResepId(resepId);
    setPopupMessage("Apakah kamu yakin mau menghapus ini?");
    setShowConfirm(true);
  };

  const closePopup = () => {
    setPopupMessage("");
    setShowConfirm(false);
    setDeleteResepId(null);
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
              onClick={() => showDeleteConfirmPopup(fav.resep.id)}
            >
              <FaRegTrashCan />
            </button>
          </div>
        ))}
      </div>

      {popupMessage && (
        <div className={`popup-overlay ${popupMessage ? 'active' : ''}`}>
          <div className="popup">
            <h2>Alert</h2>
            <p>{popupMessage}</p>
            {showConfirm ? (
              <>
                <button onClick={handleDeleteFav} className="confirm-button">Hapus</button>
                <button onClick={closePopup} className="cancel-button">Batal</button>
              </>
            ) : (
              <button onClick={closePopup} className="ok-button">Tutup</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
