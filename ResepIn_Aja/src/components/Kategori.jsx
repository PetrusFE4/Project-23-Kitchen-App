import { useNavigate } from "react-router-dom";
import { resepData } from "../Data";

const Kategori = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/resep?kategori=${category}`);
  };

  // Filter unique categories
  const uniqueCategories = resepData.reduce((acc, item) => {
    if (!acc.some((category) => category.category === item.category)) {
      acc.push(item);
    }
    return acc;
  }, []);

  return (
    <div className="category-container">
      {uniqueCategories.map((category) => (
        <div
          key={category.category}
          className="category-card"
          onClick={() => handleCategoryClick(category.category)}
        >
          <img src={category.image} alt={category.category} />
          <h3>{category.category}</h3>
        </div>
      ))}
    </div>
  );
};

export default Kategori;
