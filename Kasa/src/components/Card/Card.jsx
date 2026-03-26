import { Link } from "react-router-dom";
import "./Card.css";

function Card({ property }) {
  return (
    <Link to={`/logement/${property.id}`} className="card">
      <img src={property.cover} alt={property.title} />
      <h2>{property.title}</h2>
    </Link>
  );
}

export default Card;