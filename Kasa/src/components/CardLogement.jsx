function CardLogement({ logement }) {
  return (
    <div className="card-logement">
      <img src={logement.cover} alt={logement.title} />
      <h3>{logement.title}</h3>
    </div>
  )
}

export default CardLogement;