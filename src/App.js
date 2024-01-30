import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'animate.css';
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/landingPage";
import Footer from "./components/footer/Footer";
import ProjectPage from "./pages/productPage";
import ContactPage from "./pages/contactPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
