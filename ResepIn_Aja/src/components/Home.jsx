// import { Container, Row, Col, } from 'react-bootstrap';
const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Segala Jenis Resep Makanan Ada disini Semuanya...</h1>
        <p>
          Inilah tempatnya segala resep masakan enak! ResepIn Aja telah sajikan
          <br />
          beragam hidangan semi bergaya rumahan, tepat sebagai masakan
          sehari-hari.
        </p>
        <div className="search-container">
          <button className="explore-button">Explore Resep Makanan</button>
        </div>
      </header>
      <section className="recipe-section">
        <div className="col">
          <p>Resep Makanan</p>
          <h3>Cari Berdasarkan Selera Kamu</h3>
        </div>
        <div className="filter-buttons">
          <button className="filter-button active">All</button>
          <button className="filter-button">Popular</button>
          <button className="filter-button">Kueh</button>
          <button className="filter-button">Manis</button>
        </div>
      </section>
      <div className="container">
        <div className="recipe-grid">
          {recipeData.map((recipe, index) => (
            <div className="recipe-card" key={index}>
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <button className="details-button">More details</button>
            </div>
          ))}
        </div>
      </div>

      <section className="body-section">
        <div className="container py-4">
          <div className="row align-items-center p-3">
            <div className="col-md-6 text-center text-md-left">
              <h1 className="display-5">
                MASIH BINGUNG MAU MASAK APA HARI INI?
              </h1>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="food-images d-flex">
                <img
                  src="/src/assets/img/image1.jpg"
                  alt="Ayam Goreng"
                  className="img-fluid mx-1"
                />
                <img
                  src="/src/assets/img/image1.jpg"
                  alt="Makanan 1"
                  className="img-fluid mx-1"
                />
                <img
                  src="/src/assets/img/image1.jpg"
                  alt="Makanan 2"
                  className="img-fluid mx-1"
                />
                <img
                  src="/src/assets/img/image1.jpg"
                  alt="Makanan 3"
                  className="img-fluid mx-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="resep-Aja">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="resep-main">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="card-box col-md-6 text-center">
            <h2 className="resep-title">Resep In Aja Itu Apa Siiiihhh ?</h2>
            <div className="resep-dots mt-3">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
          <div>
              <img src="/src/assets/img/photo1.png" alt="Girl thinking" className="photos"/>
            </div>
        </div>
      </div>
    </section> */}
      <section>
        <div className="section-info d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center justify-content-center p-3 rounded ">
              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <h6>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis recusandae quisquam sed sint id, possimus nihil modi
                  voluptatibus provident a voluptatem quos cumque et quas quis,
                  deleniti odit iste ipsa? ipsum dolor sit amet consectetur
                  adipisicing elit. Nobis recusandae quisquam sed sint id,
                  possimus nihil modi voluptatibus provident a voluptatem quos
                  cumque et quas quis, deleniti odit iste ipsa?
                </h6>
              </div>
              <div className="col-3">
                <h2>Resep In Aja Itu Apa Siiiihhh ?</h2>
                <div className="resep-dots mt-3">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <div className="col-3 mt-20">
                <img
                  src="/src/assets/img/photo1.png"
                  alt="Girl thinking"
                  className="photos"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const recipeData = [
  { image: "/src/assets/img/image1.jpg", title: "Masakan Hari Raya" },
  { image: "/src/assets/img/image1.jpg", title: "Masakan Tradisional" },
  { image: "/src/assets/img/image1.jpg", title: "Resep Daging" },
  { image: "/src/assets/img/image1.jpg", title: "Resep Ayam Goreng" },
  { image: "/src/assets/img/image1.jpg", title: "Resep Sayuran" },
  { image: "/src/assets/img/image1.jpg", title: "Resep Seafood" },
  { image: "/src/assets/img/image1.jpg", title: "Resep Menu Pagi" },
  { image: "/src/assets/img/image1.jpg", title: "Resep Menu Malam" },
];

export default Home;
