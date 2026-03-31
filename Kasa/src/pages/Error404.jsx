import "../Error404.css";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="Page404">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error-link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error404;