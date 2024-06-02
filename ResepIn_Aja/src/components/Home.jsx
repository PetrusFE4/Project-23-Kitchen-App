
const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Segala Jenis Resep Makanan Ada disini Semuanya...</h1>
        <p>Inilah tempatnya segala resep masakan enak! ResepIn Aja telah sajikan beragam hidangan semi bergaya rumahan, tepat sebagai masakan sehari-hari.</p>
        <div className="search-container">
          <button className="explore-button">Explore Resep Makanan</button>
        </div>
      </header>
      <section className="recipe-section">
        <h2>Resep Makanan</h2><br/>
        <div className="filter-buttons">
          <button className="filter-button active">All</button>
          <button className="filter-button">Popular</button>
          <button className="filter-button">Kueh</button>
          <button className="filter-button">Manis</button>
        </div>
      </section>
      <p className="p-recipe">Cari Berdasarkan Selera Kamu</p>
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
    </div>
  );
};

const recipeData = [
    { image: '/src/assets/img/image1.jpg', title: 'Masakan Hari Raya' },
    { image: '/src/assets/img/image2.jpg', title: 'Masakan Tradisional' },
    { image: '/src/assets/img/image3.jpg', title: 'Resep Daging' },
    { image: '/src/assets/img/image1.jpg', title: 'Resep Ayam Goreng' },
    { image: '/src/assets/img/image1.jpg', title: 'Resep Sayuran' },
    { image: '/src/assets/img/image1.jpg', title: 'Resep Seafood' },
    { image: '/src/assets/img/image1.jpg', title: 'Resep Menu Pagi' },
    { image: '/src/assets/img/image1.jpg', title: 'Resep Menu Malam' },
  ];

export default Home