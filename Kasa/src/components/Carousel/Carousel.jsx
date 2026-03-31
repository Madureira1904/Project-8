import { useState } from "react";
import "./Carousel.css";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="carousel">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />

      {totalImages > 1 && (
        <>
          <div className="carousel-prev" onClick={prevImage}>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="carousel-next" onClick={nextImage}>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="carousel-counter">
            {currentIndex + 1}/{totalImages}
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;