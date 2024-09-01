import React, { useEffect, useRef, useState } from 'react'
import '../Styles/MerchHero.css'


const MerchHero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesRef = useRef(null);
    const slideCount = 4; // Number of slides
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % slideCount); // Loop through slides
      }, 5000); // Change slide every 5 seconds
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, []);
  
    useEffect(() => {
      if (slidesRef.current) {
        slidesRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    }, [currentIndex]);

  return (
    <div className="merch-hero">
       <div className="slider-container" ref={slidesRef}>
        <div className="slide">
          <img src="/path/to/image1.png" alt="Slide 1" />
          <div className="slide-text">Text 1</div>
        </div>
        <div className="slide">
          <img src="/path/to/image2.png" alt="Slide 2" />
          <div className="slide-text">Text 2</div>
        </div>
        <div className="slide">
          <img src="/path/to/image3.png" alt="Slide 3" />
          <div className="slide-text">Text 3</div>
        </div>
        <div className="slide">
          <img src="/path/to/image4.png" alt="Slide 4" />
          <div className="slide-text">Text 4</div>
        </div>
      </div>
      <div className="merch-hero-text">
        <h1>Your Title Here</h1>
        <p>Additional description or tagline.</p>
      </div>
    </div>
  )
}

export default MerchHero
