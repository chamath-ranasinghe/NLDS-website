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
              For the ones who registered: Await your call!
            </p>
            <p>
              If you missed it: Tough luck :(
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TempRegister;
