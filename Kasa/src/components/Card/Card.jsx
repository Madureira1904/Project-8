import { Link } from "react-router-dom";
import "./Card.css";

// Componente Card responsável por mostrar um imóvel em formato de cartão
function Card({ property }) {
  return (
    // Link que redireciona para a página de detalhe do logement
    // O ID do imóvel é usado na URL dinâmica
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