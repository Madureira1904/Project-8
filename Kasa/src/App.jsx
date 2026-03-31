import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./components/Header/Header.jsx";
import About from "./pages/About.jsx";
import Error404 from "./pages/Error404.jsx";
import Logement from "./pages/Logement.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/logement/:idlogement" element={<Logement />} />
        <Route path="/error" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;