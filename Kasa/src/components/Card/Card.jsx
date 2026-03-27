import { Link } from "react-router-dom";
import "./Card.css";

function Card({ property }) {
  return (
    <Link to={`/logement/${property.id}`} className="card">
      <div className="card-img-wrapper">
        <img src={property.cover} alt={property.title} className="card-img" />
        <div className="card-overlay"></div>
        <h2 className="card-title">{property.title}</h2>
      </div>
    </Link>
  );
}

export default Card;