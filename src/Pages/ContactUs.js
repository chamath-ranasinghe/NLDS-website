import React,{useState} from "react";
import chamath from "../Assets/OC/Chamath2.jpg";
import dinuli from "../Assets/OC/Dinuli.jpg";
import sheveke from "../Assets/OC/SheV.jpg";
import ContactUsModal from "../Components/ContactUsModal";

import "../Styles/OC.css";
import NavBar from "../Components/NavBar";

const ChamathDetails = {name: "Chamath Ranasinghe", email: "chamath.ranasinghe@aiesec.net", whatsapp: "+94 72 494 7677"};

const DinuliDetails = {name: "Dinuli Liyanage", email: "dinuli.liyanage@aiesec.net", whatsapp: "+94 70 121 2764"};
const SheveDetails = {name: "Sheveke Gnanapandithen", email: "shevekegnanapandithen@aiesec.net", whatsapp: "+94 75 716 1649"};


const ContactUs = () => {


  return (
    <>

      <div className="organize-container" style={{height: "110vh"}}>
        <NavBar />
        <div className="organize-content">
          <p> Contact Us </p>
          <div className="organize">
            <ContactUsModal src={chamath} alt="Chamath" frontText="Chamath" backText= {ChamathDetails} />
            <ContactUsModal src={dinuli} alt="Dinuli" frontText="Dinuli" backText= {DinuliDetails}/>
            <ContactUsModal src={sheveke} alt="Sheveke" frontText="Sheveke" backText= {SheveDetails}/>
          </div>
          <p style={{fontSize: "15px"}}> Click for contact details</p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
