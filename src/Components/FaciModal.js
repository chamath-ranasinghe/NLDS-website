import React, { useState } from "react";
import "../Styles/OCModal.css"; // CSS file for rounded rectangle styling

const OCModal = ({ src, alt, frontText, backText }) => {
  const [flipped, setFlipped] = useState(false);

  const handleTouch = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`oc-modal-container ${flipped ? "flipped" : ""}`}
      onClick={handleTouch}
    >
      <div className="oc-modal">
        <div className="oc-modal-front">
          <img src={src} alt={alt} />
          <div className="oc-modal-front-text">
            <p id="front">{frontText}</p>
          </div>
        </div>
        <div className="oc-modal-back">
          <div className="oc-modal-back-text">
            <p id="back">{backText.name}</p>
            <p id="back">Position: {backText.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OCModal;
