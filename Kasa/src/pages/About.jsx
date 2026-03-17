import Banner from "../components/Banner/Banner.jsx";
import Collapse from "../components/Collapse/Collapse.jsx"; 
import ImgBanner from "../imgs/56fae17eb9995860bb6384a77ca7dc9bf52da3be.jpg"

function About() {
  return (
    <div>
      <Banner image={ImgBanner}/>
      
      <div className="about-container">
        <Collapse title="Fiabilité">
          beidbzifgze
        </Collapse>

        <Collapse title="Respect">
          azrgzegeérgéegr
        </Collapse>

        <Collapse title="Service">
          azergerg ergezrgregr gr
        </Collapse>

        <Collapse title="Sécurité">
          azergazerg aezrgéeargh erh
        </Collapse>
      </div>
    </div>
  );
}

export default About;