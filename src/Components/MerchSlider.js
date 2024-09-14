import React, { useState }  from 'react'
import image1 from '../Assets/Merch/skinny.png';
import image2 from '../Assets/Merch/skinny.png';
import image3 from '../Assets/Merch/cap.png';
import image4 from '../Assets/Merch/band.png';

import '../Styles/MerchSlider.css'

const slides = [
  { png: image1, heading: 'T-SHIRT', details: 'Available Sizes: XS S M L XL XXL XXXL | Available Color: Black', color: 'black', sizes: 'XS S M L XL XXL XXL' },
  { png: image2, heading: 'SKINNY', details: 'Available Sizes: XS S M L XL XXL XXL | Available Color: White', color: 'white', sizes: 'XS S M L XL XXL XXL' },
  { png: image3, heading: 'CAP', details: 'Available Color: Navy Blue', color: 'navy', sizes: '' },
  { png: image4, heading: 'BAND', details: 'Available Color: Black and Blue', color: 'black, blue', sizes: '' } // Updated color format
];
  

function MerchSlider() {
    const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };
  

  return (
    <div className="slider-container">
    {slides.map((slide, index) => (
      <div
        key={index}
        className="slider-item"
        onClick={() => handleItemClick(slide)}
      >
        <img src={slide.png} alt={slide.heading} className="slider-img" />
        <div className="slider-text">
          <h2 className="slider-heading">{slide.heading}</h2>
        </div>
      </div>
    ))}

    {/* Popup Box */}
    {selectedItem && (
      <div className="popup-overlay">
        <div className="popup-content">
          <button className="popup-close" onClick={handleClosePopup}>×</button>
          <img src={selectedItem.png} alt={selectedItem.heading} className="popup-img" />
          <div className="popup-text">
            <h2 className="popup-heading">{selectedItem.heading}</h2>
            <p className="popup-details">
              {selectedItem.sizes ? `Available Sizes: ${selectedItem.sizes}` : 'No sizes available'}
              <br />
              Available Color:
              {selectedItem.color.split(', ').map((color, index) => (
                <React.Fragment key={index}>
                  <span className="color-box" style={{ backgroundColor: color }}></span>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                  {index < selectedItem.color.split(', ').length - 1 && ', '}
                </React.Fragment>
              ))}
              <br />
              <a href="https://forms.gle/DZbGMCKoFzqBwt92A" className="popup-buy-button" target="_blank" rel="noopener noreferrer">Buy Now</a>
            </p>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}

export default MerchSlider
