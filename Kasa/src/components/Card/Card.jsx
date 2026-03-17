import "./Card.css";

function Card({ property }) {
  if (!property) return null;

  return (
    <div className="card">
      <img src={property.cover} alt={property.title} />
      <h2>{property.title}</h2>
    </div>
  );
}

export default Card;