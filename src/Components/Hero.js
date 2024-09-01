import React, { useState, useEffect }from 'react'
import img1 from "../Assets/1.jpg"
import img2 from "../Assets/2.jpg"
import img3 from "../Assets/3.jpg"
import img4 from "../Assets/4.jpg"
import img5 from "../Assets/5.jpg"




const Hero = () => {

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5
    ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="Hero container" id='Hero'>
      <div className="slides-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <div className="Hero-content">
        <div className="hero-text">
          <p><bold>DEFY YOUR LIMITS!</bold></p>
          <h1>NATIONAL</h1>
          <h1>LEADERSHIP</h1>
          <h1>DEVELOPMENT</h1>
          <h1>SEMINAR 2024</h1>
          <p>17th October 2024</p>
        </div>
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default Hero
