import { useParams } from "react-router-dom";
import "../styles/RecipeDetail.css"; // Import file CSS
import { resepData } from "../Data";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = resepData.find((r) => r.id === parseInt(id));

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

export default RecipeDetail;
