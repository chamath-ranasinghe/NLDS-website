import React from "react";
import chamath from "../../Assets/OC/Chamath2.jpg";
import amaya from "../../Assets/OC/Amaya.jpg";
import chelaka from "../../Assets/OC/Chelaka.jpg";
import mahima from "../../Assets/OC/Mahima.jpg";
import dinuli from "../../Assets/OC/Dinuli.jpg";
import sheveke from "../../Assets/OC/SheV.jpg";
import indeera from "../../Assets/OC/Indeera.jpg";
import isuru from "../../Assets/OC/Isuru.jpg";
import lasith from "../../Assets/OC/Lasith.jpg";
import dhanushi from "../../Assets/OC/danuc.jpg";
import asirimath from "../../Assets/OC/Asirimath.jpg";
import darshana from "../../Assets/OC/Darshana.jpg";
import godfri from "../../Assets/OC/Godfri.jpg";
import OCModal from "../_Components/OCModal";

import "../../Styles/OC.css";
import NavBar from "../_Components/NavBar";

const ChamathDetails = {
  name: "Chamath Ranasinghe",
  nickname: "Camat",
  funfact: "Ahinsakaya vage boruwa danne",
};

const AmayaDetails = {
  name: "Amaya Amarasinghe",
  nickname: "Amayo",
  funfact: "Looks innocent but not",
};
const ChelakaDetails = {
  name: "Chelaka Wijesekara",
  nickname: "Chela",
  funfact: "Sugarmommy lover",
};
const MahimaDetails = {
  name: "Mahima Yasas",
  nickname: "Mahi",
  funfact: "Doesn't know about the Kandy Beach",
};

const DinuliDetails = {
  name: "Dinuli Liyanage",
  nickname: "Jessica",
  funfact: "Only watches Season 01 in every series",
};
const SheveDetails = {
  name: "Sheveke Gnanapandithen",
  nickname: "Sheve",
  funfact: "Bridgeton>>>",
};

const IndeeraDetails = {
  name: "Indeera Udayanga",
  nickname: "Indu",
  funfact: "Always late but not late enough",
};
const IsuruDetails = {
  name: "Isuru Fernando",
  nickname: "Batch Top",
  funfact: "A ekak ganna misak exam ekata yn na",
};
const LasithDetails = {
  name: "Lasitha Sudharaka",
  nickname: "Lasith but with an A",
  funfact: "Music",
};

const DhanushiDetails = {
  name: "Dhanushi Jayaweera",
  nickname: "DanuC",
  funfact: "Fun nm nah ithin baninw",
};

const AsirimathDetails = {
  name: "Asirimath Vimukthi",
  nickname: "Siri",
  funfact: "Invisible",
};
const DarshanaDetails = {
  name: "Nuwan Darshana",
  nickname: "Darsana",
  funfact: "Never sleeps",
};
const GodfriDetails = {
  name: "Godfri John",
  nickname: "Godapara",
  funfact: "Goni andina rap deyya",
};

const OC = () => {
  return (
    <>
      <div className="organize-container">
        <NavBar />
        <div className="organize-content">
          <p> President </p>
          <div className="organize">
            <OCModal
              src={chamath.src}
              alt="Chamath"
              frontText="Chamath"
              backText={ChamathDetails}
            />
          </div>
          <p> Vice Presidents - Business Development & Public Relations </p>
          <div className="organize">
            <OCModal
              src={amaya.src}
              alt="Amaya"
              frontText="Amaya"
              backText={AmayaDetails}
            />
            <OCModal
              src={chelaka.src}
              alt="Chelaka"
              frontText="Chelaka"
              backText={ChelakaDetails}
            />
            <OCModal
              src={mahima.src}
              alt="Mahima"
              frontText="Mahima"
              backText={MahimaDetails}
            />
          </div>
          <p> Vice Presidents - Delegates </p>
          <div className="organize">
            <OCModal
              src={dinuli.src}
              alt="Dinuli"
              frontText="Dinuli"
              backText={DinuliDetails}
            />
            <OCModal
              src={sheveke.src}
              alt="Sheveke"
              frontText="Sheveke"
              backText={SheveDetails}
            />
          </div>
          <p> Vice Presidents - Logistics </p>
          <div className="organize">
            <OCModal
              src={indeera.src}
              alt="Indeera"
              frontText="Indeera"
              backText={IndeeraDetails}
            />
            <OCModal
              src={isuru.src}
              alt="Isuru"
              frontText="Isuru"
              backText={IsuruDetails}
            />
            <OCModal
              src={lasith.src}
              alt="Lasith"
              frontText="Lasith"
              backText={LasithDetails}
            />
          </div>
          <p> Vice President - Finance </p>
          <div className="organize">
            <OCModal
              src={dhanushi.src}
              alt="Dhanushi"
              frontText="Dhanushi"
              backText={DhanushiDetails}
            />
          </div>
          <p> Vice Presidents - Marketing </p>
          <div className="organize">
            <OCModal
              src={asirimath.src}
              alt="Asirimath"
              frontText="Asirimath"
              backText={AsirimathDetails}
            />
            <OCModal
              src={darshana.src}
              alt="Darshana"
              frontText="Darshana"
              backText={DarshanaDetails}
            />
            <OCModal
              src={godfri.src}
              alt="Godfri"
              frontText="Godfri"
              backText={GodfriDetails}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OC;
