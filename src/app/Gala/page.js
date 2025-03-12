import React from "react";

import NavBar from "../_Components/NavBar";
import GalaModal from "../_Components/GalaModal";
import getAwards from "./awardsUtil";
import "../../Styles/Gala.css";

const Gala = () => {
  const awardsList = getAwards();
  return (
    <div className="gala-container">
      <NavBar />
      <div className="gala-content">
        {awardsList.map((row, rowIndex) => (
          <div className="gala-row" key={rowIndex}>
            {row.map((award, index) => (
              <GalaModal
                key={index}
                frontImg={award.frontImg}
                frontAlt={award.frontAlt}
                backImg={award.backImg}
                backAlt={award.backAlt}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gala;
