import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse/Collapse.jsx";
import Carousel from "../components/Carousel/Carousel.jsx";
import Title from "../components/Title/Title.jsx";
import Location from "../components/Location/Location.jsx";
import Tags from "../components/Tags/Tags.jsx";
import Host from "../components/Host/Host.jsx";
import Rating from "../components/Rating/Rating.jsx";
import "../Logement.css";
import { Navigate } from "react-router-dom";

// Componente principal da página de detalhe de um alojamento (logement)
function Logement() {
  const { idlogement } = useParams();  // Extrai o parâmetro "idlogement" da URL (React Router)
  const [logement, setLogement] = useState(null); // Estado que guarda os dados do logement

  // Fetch do logement pelo ID, neste caso idLogement
  useEffect(() => {
    // Faz pedido à API para obter o logement específico pelo ID
  fetch(`http://localhost:8080/api/properties/${idlogement}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Logement not found");
      }
      return res.json();
    })
    .then((data) => { // Guarda os dados recebidos no estado
      setLogement(data);
    })
    .catch((err) => { // Caso ocorra erro, define o estado como falso
      console.error(err);
      setLogement(false);
    });
}, [idlogement]);

    if (logement === false) return <Navigate to="/error" />;  // Se o logement não existir ou deu erro, redireciona para página de erro

    if (logement === null) return  <p> en chargement.. </p>


// Renderização principal da página
  return (
    <div className="logement-container">
      {/* Carousel */}
      <Carousel images={logement.pictures} />

       {/* info da page */}
      <div className="logement-header">
        <div className="logement-text">
          <Title title={logement.title} />
          <Location location={logement.location} />
          <Tags tags={logement.tags} />
        </div>
        <div className="logement-host-rating">
          <Host host={logement.host} />
          <Rating rating={logement.rating} />
        </div>
      </div>

      {/* Collapse */}
      <div className="logement-collapses">
        <Collapse title="Description" className="collapse-description">
            <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements" className="collapse-equipements">
            <ul>
                {logement.equipments.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Logement;