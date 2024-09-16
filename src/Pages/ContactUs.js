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
import dhanushi from "../Assets/OC/danuc.jpg";
import asirimath from "../Assets/OC/Asirimath.jpg";
import darshana from "../Assets/OC/Darshana.jpg";
import godfri from "../Assets/OC/Godfri.jpg";
import ContactUsModal from "../Components/ContactUsModal";

import "../Styles/OC.css";
import NavBar from "../Components/NavBar";

const ChamathDetails = {name: "Chamath Ranasinghe", nickname:"Chama", funfact: "Ahinsakaya vage boruwa danne"};

const AmayaDetails = {name: "Amaya Amarasinghe", nickname:"Amaya", funfact: "Looks innocent but not"};
const ChelakaDetails = {name: "Chelaka Wijesekara", nickname:"Che", funfact: "Sugarmommy lover"};
const MahimaDetails = {name: "Mahima Yasas", nickname:"Mahi", funfact: "Doesn't know about the Kandy Beach"};

const DinuliDetails = {name: "Dinuli Liyanage", nickname:"Season 01", funfact: "Only watches Season 01 in every series"};
const SheveDetails = {name: "Sheveke Gnanapandithen", nickname:"Sheve/Bridgerton", funfact: "Bridgeton>>>"};

const IndeeraDetails = {name: "Indeera Udayanga", nickname:"Indu", funfact: "Always late but not late enough"};
const IsuruDetails = {name: "Isuru Fernando", nickname:"Batch Top", funfact: "A ekak ganna misak exam ekata yn na"};
const LasithDetails = {name: "Lasitha Sudharaka", nickname:"Lasith but with an A", funfact: "Music"};

const DhanushiDetails = {name: "Dhanushi Jayaweera", nickname:"DanuC", funfact: "Fun nm nah ithin baninw"};

const AsirimathDetails = {name: "Asirimath Vimukthi", nickname:"Siri", funfact: "Invisible"};
const DarshanaDetails = {name: "Nuwan Darshana", nickname:"Darsana", funfact: "Never sleeps"};
const GodfriDetails = {name: "Godfri John", nickname:"Godapara", funfact: "Goni andina rap deyya"};


const ContactUs = () => {
  return (
    <>
      <div className="organize-container">
        <NavBar />
        <div className="organize-content">
          <p> Contact Us </p>
          <div className="organize">
            <ContactUsModal src={chamath} alt="Chamath" frontText="Chamath" backText= {ChamathDetails} />
            <ContactUsModal src={dinuli} alt="Dinuli" frontText="Dinuli" backText= {DinuliDetails}/>
            <ContactUsModal src={sheveke} alt="Sheveke" frontText="Sheveke" backText= {SheveDetails}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
