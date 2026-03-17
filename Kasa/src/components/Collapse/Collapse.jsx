import { useState } from "react";
import "./Collapse.css";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div className="collapse">
          <div className="collapse-header" onClick={toggleCollapse}>
            <h3>{title}</h3>
            <span>{isOpen ? "▲" : "▼"}</span>
          </div>
          {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;