import { useParams } from "react-router-dom";
import "../styles/RecipeDetail.css"; // Import file CSS

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipeData.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <div>Resep tidak ditemukan.</div>;
  }

  return (
    <div className="recipe-detail-container">
      <div className="recipe-header">
        <h1 className="recipe-title">{recipe.title}</h1>
      </div>
      <div className="recipe-content">
        <table>
          <tbody>
            <tr>
              <td className="video-cell">
                <div className="recipe-video">
                  <video controls>
                    <source src={recipe.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </td>
              <td className="image-cell">
                <div className="recipe-image">
                  <img src={recipe.image} alt={recipe.title} />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="recipe-description">
                  <h2>Detail Makanan</h2>
                  <p>{recipe.description}</p>
                </div>
              </td>
              <td>
                <div className="recipe-details">
                  <h2>Detail Bahan</h2>
                  <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <div className="recipe-steps">
                  <h2>Langkah-langkah Pembuatan</h2>
                  <ol>
                    {recipe.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Definisi data resep
const recipeData = [
  {
    id: 1,
    image: "/src/assets/img/image1.jpg",
    title: "Masakan Hari Raya",
    video: "/src/assets/videos/video1.mp4",
    description: "Ini adalah deskripsi untuk Masakan Hari Raya.",
    ingredients: ["Bahan 1", "Bahan 2", "Bahan 3"],
    steps: ["Langkah 1", "Langkah 2", "Langkah 3"],
  },
  {
    id: 2,
    image: "/src/assets/img/image2.jpg",
    title: "Masakan Tradisional",
    video: "/src/assets/videos/video2.mp4",
    description: "Ini adalah deskripsi untuk Masakan Tradisional.",
    ingredients: ["Bahan A", "Bahan B", "Bahan C"],
    steps: ["Langkah A", "Langkah B", "Langkah C"],
  },
  {
    id: 3,
    image: "/src/assets/img/image3.jpg",
    title: "Resep Daging",
    video: "/src/assets/videos/video3.mp4",
    description: "Ini adalah deskripsi untuk Resep Daging.",
    ingredients: ["Daging 1", "Daging 2", "Daging 3"],
    steps: ["Langkah D1", "Langkah D2", "Langkah D3"],
  },
  {
    id: 4,
    image: "/src/assets/img/image1.jpg",
    title: "Resep Ayam Goreng",
    video: "/src/assets/videos/video4.mp4",
    description: "Ini adalah deskripsi untuk Resep Ayam Goreng.",
    ingredients: ["Ayam 1", "Ayam 2", "Ayam 3"],
    steps: ["Langkah A1", "Langkah A2", "Langkah A3"],
  },
  {
    id: 5,
    image: "/src/assets/img/image1.jpg",
    title: "Resep Sayuran",
    video: "/src/assets/videos/video5.mp4",
    description: "Ini adalah deskripsi untuk Resep Sayuran.",
    ingredients: ["Sayur 1", "Sayur 2", "Sayur 3"],
    steps: ["Langkah S1", "Langkah S2", "Langkah S3"],
  },
  {
    id: 6,
    image: "/src/assets/img/image1.jpg",
    title: "Resep Seafood",
    video: "/src/assets/videos/video6.mp4",
    description: "Ini adalah deskripsi untuk Resep Seafood.",
    ingredients: ["Seafood 1", "Seafood 2", "Seafood 3"],
    steps: ["Langkah F1", "Langkah F2", "Langkah F3"],
  },
  {
    id: 7,
    image: "/src/assets/img/image1.jpg",
    title: "Resep Menu Pagi",
    video: "/src/assets/videos/video7.mp4",
    description: "Ini adalah deskripsi untuk Resep Menu Pagi.",
    ingredients: ["Pagi 1", "Pagi 2", "Pagi 3"],
    steps: ["Langkah P1", "Langkah P2", "Langkah P3"],
  },
  {
    id: 8,
    image: "/src/assets/img/image1.jpg",
    title: "Resep Menu Malam",
    video: "/src/assets/videos/video8.mp4",
    description: "Ini adalah deskripsi untuk Resep Menu Malam.",
    ingredients: ["Malam 1", "Malam 2", "Malam 3"],
    steps: ["Langkah M1", "Langkah M2", "Langkah M3"],
  },
];

export default RecipeDetail;
