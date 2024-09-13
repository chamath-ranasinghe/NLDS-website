import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Overlay from "../Components/Overlay"; // Import the Overlay component
import "../Styles/Gallery.css";

//OBT
import obt1 from "../Assets/Gallery/OBT/1.jpg"
import obt2 from "../Assets/Gallery/OBT/2.jpg"
import obt3 from "../Assets/Gallery/OBT/3.jpg"
import obt4 from "../Assets/Gallery/OBT/4.jpg"
import obt5 from "../Assets/Gallery/OBT/5.jpg"

//Theme Party
import theme1 from "../Assets/Gallery/Theme_Party/1.jpg"
import theme2 from "../Assets/Gallery/Theme_Party/2.jpg"
import theme3 from "../Assets/Gallery/Theme_Party/3.jpg"
import theme4 from "../Assets/Gallery/Theme_Party/4.jpg"
import theme5 from "../Assets/Gallery/Theme_Party/5.jpg"
import theme6 from "../Assets/Gallery/Theme_Party/6.jpg"

//Gala Night

import gn1 from "../Assets/Gallery/Gala_Night/1.jpg"
import gn2 from "../Assets/Gallery/Gala_Night/2.jpg"
import gn3 from "../Assets/Gallery/Gala_Night/3.jpg"
import gn4 from "../Assets/Gallery/Gala_Night/4.jpg"
import gn5 from "../Assets/Gallery/Gala_Night/5.jpg"
import gn6 from "../Assets/Gallery/Gala_Night/6.jpg"
import gn7 from "../Assets/Gallery/Gala_Night/7.jpg"

// Sessions
import ses1 from "../Assets/Gallery/Sessions/1.jpg"
import ses2 from "../Assets/Gallery/Sessions/2.jpg"
import ses3 from "../Assets/Gallery/Sessions/3.jpg"
import ses4 from "../Assets/Gallery/Sessions/4.jpg"
import ses5 from "../Assets/Gallery/Sessions/5.jpg"
import ses6 from "../Assets/Gallery/Sessions/6.jpg"
import ses7 from "../Assets/Gallery/Sessions/7.jpg"
import ses8 from "../Assets/Gallery/Sessions/8.jpg"


const obtImages = [obt1,obt2,obt3,obt4,obt5]
const themeImages = [theme1,theme2,theme3,theme4,theme5,theme6]
const gnImages = [gn1,gn2,gn3,gn4,gn5,gn6,gn7]
const sesImages = [ses1,ses2,ses3,ses4,ses5,ses6,ses7,ses8]


const images = [
  { src: obt1, text: "OBT", images:obtImages },
  { src: theme1, text: "Theme Party", images:themeImages },
  { src: gn1, text: "Gala Night", images:gnImages },
  { src: ses1, text: "Sessions", images:sesImages },
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
          images={images[currentIndex].images}
        />
      )}
    </div>
  );
}

export default Gallery;
