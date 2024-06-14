import { useNavigate } from "react-router-dom";

const UploadResep = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="text-body text-center ">
        <h2 className="title-text ">Buat Menu Resep Makanan Versi Kamu</h2>
        <p>
          Ayo, unggah resep andalanmu sekarang dan dapatkan kesempatan
          memenangkan hadiah spesial dari ResepIn AJa.
        </p>
        <div className="input-group">
          <button
            className="btn"
            style={{ background: "#F6BE2C" }}
            onClick={() => Navigate("/FormResep")}
          >
            {" "}
            Upload Resep Kamu
          </button>
        </div>
      </div>
      <section className="section-right">
        <div className="btn-group">
          <button
            type="button"
            className="btn dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Urutkan
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Masakan Pagi
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Masakan Tradisional
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Ayam Goreng
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Masakan Daging
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className="container">
        <div className="recipe-grid">
          {recipeData.map((recipe, index) => (
            <div className="recipe-card" key={index}>
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>{recipe.contributor}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
const recipeData = [
  {
    image: "/src/assets/img/image1.jpg",
    title: "Masakan Hari Raya",
    contributor: " Resep Kotribusi Dari Ayu",
  },
  {
    image: "/src/assets/img/image1.jpg",
    title: "Masakan Tradisional",
    contributor: " Resep Kotribusi Dari Dewi",
  },
  {
    image: "/src/assets/img/image1.jpg",
    title: "Resep Daging",
    contributor: " Resep Kotribusi Dari Ica",
  },
  {
    image: "/src/assets/img/image1.jpg",
    title: "Resep Ayam Goreng",
    contributor: " Resep Kotribusi Dari Sulaiman",
  },
  {
    image: "/src/assets/img/image1.jpg",
    title: "Resep Sayuran",
    contributor: " Resep Kotribusi Dari Jasmin",
  },
  {
    image: "/src/assets/img/image1.jpg",
    title: "Resep Seafood",
    contributor: " Resep Kotribusi Dari Doni",
  },
  {
    image: "/src/assets/img/image1.jpg",
    title: "Resep Menu Pagi",
    contributor: " Resep Kotribusi Dari Indra",
  },
  {
    image: "/src/assets/img/image1.jpg",
    title: "Resep Menu Malam",
    contributor: " Resep Kotribusi Dari Siska",
  },
];
export default UploadResep;
