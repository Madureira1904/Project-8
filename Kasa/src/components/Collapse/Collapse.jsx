import { useState } from "react"; 
import "./Collapse.css"; 

// Componente Collapse (acordeão) que permite expandir e recolher conteúdo
function Collapse({ title, children, className = "" }) { 
  const [isOpen, setIsOpen] = useState(false); // Estado que controla se o collapse está aberto ou fechado

  const toggleCollapse = () => { // Função que alterna o estado (abre ou fecha o collapse)
    setIsOpen(!isOpen); 
  }; 

return (
<div className={`collapse ${className}`}>
<div className="collapse-header" onClick={toggleCollapse}>
<h3>{title}</h3>

<span className="collapse-icon"> {/* Ícone que muda consoante o estado aberto/fechado */}
{isOpen ? (
<i className="fa-solid fa-chevron-down"></i>
) : (
<i className="fa-solid fa-chevron-down fa-rotate-180"></i>)}
</span>

</div>

<div className={`collapse-content ${isOpen ? "open" : ""}`}> {/* Conteúdo do collapse que aparece ou desaparece consoante o estado */}
  {children}
</div>

</div>
);
}

export default Collapse;