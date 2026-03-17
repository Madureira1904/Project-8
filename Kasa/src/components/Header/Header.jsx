import { NavLink } from "react-router-dom";
import logo from "../../imgs/logo.jpg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa logo" className="logo" />

      <nav>
        <ul className="nav-list">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;