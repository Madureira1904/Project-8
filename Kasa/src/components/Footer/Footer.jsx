import "./Footer.css";
import logo from "../../imgs/whitelogo.png";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Kasa logo" className="footer-logo" />
      <p>&copy; 2026 Kasa. All rights reserved.</p>
    </footer>
  )
}

export default Footer;