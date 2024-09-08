import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Overlay from "../Components/Overlay"; // Import the Overlay component
import "../Styles/Gallery.css";

import img1 from "../Assets/1.jpg";
import img2 from "../Assets/2.jpg";
import img3 from "../Assets/3.jpg";
import img4 from "../Assets/4.jpg"

const images = [
  { src: img1, text: "OBT" },
  { src: img2, text: "Theme Party" },
  { src: img3, text: "Gala Night" },
  { src: img4, text: "Gala Night" },
  // Add more images as needed
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openOverlay = () => {
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className={`gallery-container ${showOverlay ? "blurred" : ""}`}>
      <NavBar />
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={image.src} alt={`Slide ${index + 1}`} />
            <div
              className={`carousel-text ${index % 2 === 0 ? "left" : "right"}`}
            >
              {image.text}
            </div>
            {/* View More button alternates between left and right */}
            <button
              className={`view-more-btn ${index % 2 === 0 ? "left" : "right"}`}
              onClick={openOverlay}
            >
              View More
            </button>
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <button onClick={prevSlide} className="arrow-btn">
          {"<"}
        </button>
        <button onClick={nextSlide} className="arrow-btn">
          {">"}
        </button>
      </div>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Use Overlay component */}
      {showOverlay && (
        <Overlay
          image={images[currentIndex].src}
          text={images[currentIndex].text}
          onClose={closeOverlay}
          images={images}
        />
      )}
    </div>
  );
}

export default Gallery;
