"use client";

import React, { JSX, useState } from "react";
import "../../Styles/GalaModal.css";
import { GalaImage } from "../../types/props";

const GalaModal = ({ frontImg, backImg, frontAlt, backAlt }: GalaImage): JSX.Element => {
  const [flipped, setFlipped] = useState(false);

  const handleTouch = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`gala-modal-container ${flipped ? "flipped" : ""}`}
      onClick={handleTouch}
    >
      <div className="gala-modal">
        <div className="gala-modal-front">
          <img src={frontImg} alt={frontAlt} />
        </div>
        <div className="gala-modal-back">
          <img src={backImg} alt={backAlt} />
        </div>
      </div>
    </div>
  );
};

export default GalaModal;
