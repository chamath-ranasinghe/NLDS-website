import React,{useState} from "react";
import chamath from "../Assets/OC/Chamath2.jpg";
import dinuli from "../Assets/OC/Dinuli.jpg";
import sheveke from "../Assets/OC/SheV.jpg";
import ContactUsModal from "../Components/ContactUsModal";

import "../Styles/OC.css";
import "../Styles/Loading.css"
import NavBar from "../Components/NavBar";

const ChamathDetails = {name: "Chamath Ranasinghe", nickname:"Chama", funfact: "Ahinsakaya vage boruwa danne"};

const DinuliDetails = {name: "Dinuli Liyanage", nickname:"Season 01", funfact: "Only watches Season 01 in every series"};
const SheveDetails = {name: "Sheveke Gnanapandithen", nickname:"Sheve/Bridgerton", funfact: "Bridgeton>>>"};

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
    </div>
  );
};


const ContactUs = () => {

  const [showLoading, setShowLoading] = useState(false);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleLoad = async () =>{
    setShowLoading(true);
    await delay(2000);
    setShowLoading(false);
  }


  return (
    <>
      {showLoading && <Loading />}
      <div className={`organize-container ${showLoading ? 'loading' : ''}`} style={{height: "100vh"}}>
        <NavBar />
        <div className="organize-content">
          <p> Contact Us </p>
          <div className="organize">
            <ContactUsModal src={chamath} alt="Chamath" frontText="Chamath" backText= {ChamathDetails} />
            <ContactUsModal src={dinuli} alt="Dinuli" frontText="Dinuli" backText= {DinuliDetails}/>
            <ContactUsModal src={sheveke} alt="Sheveke" frontText="Sheveke" backText= {SheveDetails}/>
            <button onClick={handleLoad}>Test</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
