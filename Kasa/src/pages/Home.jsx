import { useState, useEffect } from "react";
import Banner from "../components/Banner/Banner.jsx";
import Card from "../components/Card/Card.jsx";
import ImgBanner from "../imgs/4706e7dde270fc8fc902a1eb738458e7b29c1899.jpg"

function Home() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
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
      <Banner
        image={ImgBanner}
        title="Chez vous, partout et ailleurs"
      />
      <div className="cards-container">
        {properties.map(property => (
          <Card key={property.id} property={property} />
        ))}
      </div>
    </div>
  );

}

export default Home;