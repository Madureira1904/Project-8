import Banner from "../components/Banner/Banner.jsx";
import Collapse from "../components/Collapse/Collapse.jsx"; 
import ImgBanner from "../imgs/56fae17eb9995860bb6384a77ca7dc9bf52da3be.jpg"

function About() {
  return (
    <div>
      <Banner image={ImgBanner}/>
      
      <div className="about-container">
        <Collapse title="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </Collapse>

        <Collapse title="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme
        </Collapse>

        <Collapse title="Service">
          Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question
        </Collapse>

        <Collapse title="Sécurité">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
        </Collapse>
      </div>
    </div>
  );
}

export default About;