import React, { useState, useEffect } from "react";
import "../Styles/Overlay.css";

function Overlay({ image, text, onClose, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="overlay">
      <div className="overlay-content">
        <button className="overlay-close-btn" onClick={onClose}>
          Close
        </button>
        <div className="overlay-carousel">
          {images.map((img, index) => (
            <div
              key={index}
              className={`overlay-carousel-slide ${
                index === currentIndex ? "active" : "inactive"
              }`}
            >
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="overlay-arrow-btn overlay-left" onClick={prevSlide}>
          {"<"}
        </button>
        <button className="overlay-arrow-btn overlay-right" onClick={nextSlide}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Overlay;
