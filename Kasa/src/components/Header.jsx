import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/logement/1">Logement</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;