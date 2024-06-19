import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UploadResep from "./components/UploadResep";
import AboutUs from "./components/AboutUs";
import RecipeDetail from "./components/RecipeDetail";
import Resep from "./components/Resep";
import Kategori from "./components/Kategori";
import FormResep from "./components/FormResep";
import Favorites from "./components/Favorites";
import UpdateResep from "./components/UpdateResep";


// import Login from "./components/Login";
//import Signup from "./components/Signup"

// import Home from "./pages/Home"
// import Navbar from "./pages/Navbar"
// import Footer from "./pages/Footer"

/* IMPORT CSSS */
import "./styles/navbar.css";
import "./styles/home.css";
import "./styles/footer.css";
import "./styles/login.css";
import "./styles/signup.css";
import "./styles/uploadresep.css";
import "./styles/aboutus.css";
import "./styles/RecipeDetail.css";
import "./styles/resep.css";
import "./styles/Kategori.css";
import "./styles/formresep.css";
import "./styles/favorite.css";
import "./styles/updateresep.css"

const App = () => {
  return (
    <Router>
      <div id="root">
        <div className="main-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Footers" element={<Footer />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Resep" element={<Resep />} />
          <Route path="/UploadResep" element={<UploadResep />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/Kategori" element={<Kategori />} />
          <Route path="/FormResep" element={<FormResep />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/UpdateResep/:id" element={<UpdateResep />} />
          {/* Tambahkan rute untuk RecipeDetail */}
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
