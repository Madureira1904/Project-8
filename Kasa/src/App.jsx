import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./components/Header/Header.jsx";
import About from "./pages/About.jsx";
import Error404 from "./pages/Error404.jsx";
import Logement from "./pages/Logement.jsx";
import Footer from "./components/Footer/Footer.jsx";

// Componente principal da aplicação
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página inicial */}
        <Route path="/about" element={<About />} /> {/* Página "A Propos" */}
        <Route path="*" element={<Error404 />} />
        <Route path="/logement/:idlogement" element={<Logement />} /> {/* Página de detalhe do logement com parâmetro dinâmico (id) */}
        <Route path="/error" element={<Error404 />} />  {/* Página de erro 404 */}
        <Route path="*" element={<Error404 />} /> {/* Route wildcard: qualquer rota não definida vai para erro */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;