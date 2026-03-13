import { useState, useEffect } from "react";

function Home() {
  const [properties, setProperties] = useState([]); // keep the data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8081/api/properties") // fetch to search the data logements
      .then(res => res.json())
      .then(data => {
        setProperties(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  if (loading) return <p>Chargement des propriétés...</p>;

  return (
    <div>
      {properties.map(property => (
        <div key={property.id}>
          <h2>{property.title}</h2>
          <img src={property.cover} alt={property.title} width={300} />
        </div>
      ))}
    </div>
  );
}

export default Home;