import React from "react";

import "../Styles/Register.css";
import NavBar from "../Components/NavBar";

const TempRegister = () => {
  return (
    <>
      <NavBar />
      <div className="registration-container">
      <div className="initial-modal">
          <div className="modal-content">
            <p>
              Recruitments for a secret mission starts soon. Keep up your excitement!!!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TempRegister;
