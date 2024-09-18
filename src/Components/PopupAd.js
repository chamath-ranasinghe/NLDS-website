
import React, { useState } from 'react';
import '../Styles/PopUpAd.css';
import imageSrc from "../Assets/MerchFlyer.jpg"


const PopupAd = () => {
  const [visible, setVisible] = useState(true);

  const link = "https://transcend24.aiesec.lk/MerchHome";

  const handleClose = () => {
    const container = document.querySelector('.popup-ad-container');
    container.style.animation = 'slideOut 0.5s ease-out';
    
    setTimeout(() => setVisible(false), 500); // Wait for animation to complete before hiding
  };

  return (
    visible && (
      <div className="popup-ad-container">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} alt="Pop-up Ad" className="popup-ad-image" />
        </a>
        <button className="popup-ad-close-btn" onClick={handleClose}>
          &times;
        </button>
      </div>
    )
  );
};

export default PopupAd;
