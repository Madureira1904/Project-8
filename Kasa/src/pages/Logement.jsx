import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Logement() {
  const { idlogement } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${idlogement}`)
      .then(res => res.json())
      .then(data => setLogement(data))
      .catch(err => console.error(err));
  }, [idlogement]);

  if (!logement) return <p>Chargement...</p>;

  return (
    <div>
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
    </div>
  );
}

export default Logement;