import React from "react";
import chamath from "../Assets/OC/Chamath2.jpg";
import amaya from "../Assets/OC/Amaya.jpg";
import chelaka from "../Assets/OC/Chelaka.jpg";
import mahima from "../Assets/OC/Mahima.jpg";
import dinuli from "../Assets/OC/Dinuli.jpg";
import sheveke from "../Assets/OC/SheV.jpg";
import indeera from "../Assets/OC/Indeera.jpg";
import isuru from "../Assets/OC/Isuru.jpg";
import lasith from "../Assets/OC/Lasith.jpg";
import dhanushi from "../Assets/OC/Chamath2.jpg";
import asirimath from "../Assets/OC/Asirimath.jpg";
import darshana from "../Assets/OC/Darshana.jpg";
import godfri from "../Assets/OC/Godfri.jpg";
import OCModal from "../Components/OCModal";

import "../Styles/OC.css";
import NavBar from "../Components/NavBar";

const ChamathDetails = {name: "Chamath Ranasinghe", nickname:"Chama", funfact: "Music"};

const AmayaDetails = {name: "Amaya Amarasinghe", nickname:"Amaya", funfact: "Music"};
const ChelakaDetails = {name: "Chelaka Wijesekara", nickname:"Che", funfact: "Music"};
const MahimaDetails = {name: "Mahima Yasas", nickname:"Mahima", funfact: "Music"};

const DinuliDetails = {name: "Dinuli Liyanage", nickname:"Season 01", funfact: "Music"};
const SheveDetails = {name: "Sheveke Gnanapandithen", nickname:"Sheve/Bridgerton", funfact: "Music"};

const IndeeraDetails = {name: "Indeera Udayanga", nickname:"Indu", funfact: "Music"};
const IsuruDetails = {name: "Isuru Fernando", nickname:"Batch Topayya", funfact: "Music"};
const LasithDetails = {name: "Lasitha Sudharaka", nickname:"Lasith", funfact: "Music"};

const DhanushiDetails = {name: "Dhanushi Jayaweera", nickname:"DanuC", funfact: "Music"};

const AsirimathDetails = {name: "Asirimath Vimukthi", nickname:"Siri", funfact: "Music"};
const DarshanaDetails = {name: "Darshana Nuwan", nickname:"Nuwan", funfact: "Music"};
const GodfriDetails = {name: "Godfri John", nickname:"Godapara", funfact: "Music"};


const OC = () => {
  return (
    <>
      <div className="organize-container">
        <NavBar />
        <div className="organize-content">
          <p> President </p>
          <div className="organize">
            <OCModal src={chamath} alt="Chamath" frontText="Chamath" backText= {ChamathDetails} />
          </div>
          <p> Vice Presidents - Business Development & Public Relations </p>
          <div className="organize">
            <OCModal src={amaya} alt="Amaya" frontText="Amaya" backText= {AmayaDetails}/>
            <OCModal src={chelaka} alt="Chelaka" frontText="Chelaka" backText= {ChelakaDetails}/>
            <OCModal src={mahima} alt="Mahima" frontText="Mahima" backText= {MahimaDetails}/>
          </div>
          <p> Vice Presidents - Delegates </p>
          <div className="organize">
            <OCModal src={dinuli} alt="Dinuli" frontText="Dinuli" backText= {DinuliDetails}/>
            <OCModal src={sheveke} alt="Sheveke" frontText="Sheveke" backText= {SheveDetails}/>
          </div>
          <p> Vice Presidents - Logistics </p>
          <div className="organize">
            <OCModal src={indeera} alt="Indeera" frontText="Indeera" backText= {IndeeraDetails}/>
            <OCModal src={isuru} alt="Isuru" frontText="Isuru" backText= {IsuruDetails}/>
            <OCModal src={lasith} alt="Lasith" frontText="Lasith" backText= {LasithDetails}/>
          </div>
          <p> Vice President - Finance </p>
          <div className="organize">
            <OCModal src={dhanushi} alt="Dhanushi" frontText="Dhanushi" backText= {DhanushiDetails}/>
          </div>
          <p> Vice Presidents - Marketing </p>
          <div className="organize">
            <OCModal src={asirimath} alt="Asirimath" frontText="Asirimath" backText= {AsirimathDetails}/>
            <OCModal src={darshana} alt="Darshana" frontText="Darshana" backText= {DarshanaDetails}/>
            <OCModal src={godfri} alt="Godfri" frontText="Godfri" backText= {GodfriDetails}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default OC;