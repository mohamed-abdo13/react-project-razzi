import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMenu from "./components/navbar/Navbar";
import HomePages from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPages";
import Footer from "./components/footer-component/Footer";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
