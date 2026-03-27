import { useState } from "react";
import "./Collapse.css";

function Collapse({ title, children, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${className}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>

        <span className="collapse-icon">
          {isOpen ? (
            <i className="fa-solid fa-chevron-down fa-rotate-180"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </span>

      </div>

      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;