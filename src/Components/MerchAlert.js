import React from "react";
import "../Styles/MerchAlert.css"; // Ensure you have styles for your modal
import { Link } from "react-router-dom";

import imageSrc from "../Assets/MerchFlyer.jpg";
import MerchRaffle from "../Assets/MerchRaffleDraw.jpg"

const MerchAlert = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="merch-alert">
      <div className="merch-alert-content">
        <p>Your application is received! Await further instructions...</p>
        <button className="merch-alert-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default MerchAlert;
