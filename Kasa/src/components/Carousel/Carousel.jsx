import { useState } from "react";
import "./Carousel.css";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);  // Estado que guarda o índice da imagem atualmente visível
  const totalImages = images.length; // Número total de imagens recebidas


  // Função para avançar para a próxima imagem
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1. // Se estiver na última imagem, volta para a primeira (loop)
    );
  };

  // Função para voltar para a imagem anterior
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="carousel">
        {/* Imagem atual do carousel baseada no índice */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />

      {totalImages > 1 && (
        <>
          <div className="carousel-prev" onClick={prevImage}> {/* Botão para voltar imagem */}
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="carousel-next" onClick={nextImage}> {/* Botão para avançar imagem */}
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="carousel-counter">. {/* Indicador de posição (ex: 1/5) */}
            {currentIndex + 1}/{totalImages}
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;