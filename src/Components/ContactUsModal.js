import React, { useState } from "react";
import "../Styles/OCModal.css"; // CSS file for rounded rectangle styling

const ContactUsModal = ({ src, alt, frontText, backText }) => {
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
            <p id="back" style={{ fontSize: "15px" }}>
              {backText.name}
            </p>
            <p id="back" style={{ fontSize: "12px" }}>
              Email
              <br />
              <a href={`mailto:${backText.email}`} style={{ color: "#200b41" }}>
                {backText.email}
              </a>
            </p>
            <p id="back" style={{ fontSize: "12px" }}>
              Whatsapp
              <br />
              <a href={`tel:${backText.whatsapp}`} style={{ color: "#200b41" }}>
                {backText.whatsapp}
              </a>
            </p>
            {/* <p id="back">Fun Fact: {backText.funfact}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsModal;
