"use client";

import React, { useState, useEffect } from "react";
import NavBar from "../_Components/NavBar";
import Overlay from "../_Components/Overlay"; // Import the Overlay component
import "../../Styles/Gallery.css";

// Ice breaker
import ice1 from "../../Assets/Gallery/Sessions/1.jpg";

//OBT
import obt1 from "../../Assets/Gallery/OBT/1.jpg";

//Theme Party
import theme1 from "../../Assets/Gallery/Theme_Party/1.jpg";

//Gala Night

import gn1 from "../../Assets/Gallery/Gala_Night/1.jpg";

// Sessions
import ses1 from "../../Assets/Gallery/Sessions/1.jpg";

async function fetchImages() {
  try {
    const response = await fetch(`/api/galleryImages`);
    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  const [images, setImages] = useState([]);

  useEffect(() => {
    async function loadImages() {
      setImages(await fetchImages());
    }
    loadImages();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
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
            <img src={image.src.src} alt={`Slide ${index + 1}`} />
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
          images={images[currentIndex].images}
        />
      )}
    </div>
  );
}

export default Gallery;
