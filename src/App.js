import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'animate.css';
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/landingPage";
import Footer from "./components/footer/Footer";
import ProjectPage from "./pages/productPage";
import ContactPage from "./pages/contactPage";
import AboutPage from "./pages/aboutPage";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
