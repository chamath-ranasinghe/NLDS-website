import React from "react";
import "../Styles/MerchAlert.css"; // Ensure you have styles for your modal
import { Link } from "react-router-dom";

import imageSrc from "../Assets/MerchFlyer.jpg";

const MerchAlert = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="merch-alert">
      <div className="merch-alert-content">
        <Link to="/MerchHome">
          <img src={imageSrc} alt="Merch" className="alert-image" />
        </Link>
        <p>Your application is received! Await further instructions...</p>
        <p>Don't forget to checkout our exclusive merch</p>
        <button className="merch-alert-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default MerchAlert;
