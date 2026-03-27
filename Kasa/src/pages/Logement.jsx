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

function Logement() {
  const { idlogement } = useParams();
  const [logement, setLogement] = useState(null);

  // Fetch do logement pelo ID
  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${idlogement}`)
      .then((res) => res.json())
      .then((data) => setLogement(data))
      .catch((err) => console.error(err));
  }, [idlogement]);

  if (!logement) return <p>Chargement...</p>;

  return (
    <div className="logement-container">
      {/* Carousel */}
      <Carousel images={logement.pictures} />

       {/* info */}
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

      {/* Collapse Description */}
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