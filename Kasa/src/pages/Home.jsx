import { useState, useEffect } from "react";
import Banner from "../components/Banner/Banner.jsx";
import Card from "../components/Card/Card.jsx";
import ImgBanner from "../imgs/4706e7dde270fc8fc902a1eb738458e7b29c1899.jpg"

function Home() {
  // Estado para guardar a lista de propriedades (vinda da API)
  const [properties, setProperties] = useState([]);
  // Estado para controlar o loading enquanto os dados estão a ser carregados
  const [loading, setLoading] = useState(true);

  // useEffect executa código assim que o componente é montado (render inicial)
  useEffect(() => {
    fetch("http://localhost:8080/api/properties") // Faz pedido HTTP à API para obter as propriedades
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
      {/* Percorre todas as propriedades e cria um Card para cada uma */}
      <div className="cards-container">
        {properties.map(property => (
          <Card key={property.id} property={property} />
        ))}
      </div>
    </div>
  );

}

export default Home;