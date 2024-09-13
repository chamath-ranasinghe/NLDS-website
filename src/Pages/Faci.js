import React from "react";
import FaciModal from "../Components/FaciModal";

import "../Styles/OC.css";
import NavBar from "../Components/NavBar";

import chair from "../Assets/Faci/Chair.png";
import vikum from "../Assets/Faci/vikum.jpeg";
import dineli from "../Assets/Faci/dineli 2.jpeg";
import hassan from "../Assets/Faci/hassan.jpeg";
import uthpalani from "../Assets/Faci/upi.jpeg";
import akasha from "../Assets/Faci/akasha.jpeg";
import imesh from "../Assets/Faci/imesh.jpeg";
import dunithi from "../Assets/Faci/dunithi.jpeg";
import prabashi from "../Assets/Faci/prabashi.jpeg";
import dileesha from "../Assets/Faci/dileesha 2.jpeg";
import sanjeev from "../Assets/Faci/sanjeev 2.jpeg";
import sapna from "../Assets/Faci/sapna.jpeg";
import sanuthi from "../Assets/Faci/sanuthi.jpeg";
import senuri from "../Assets/Faci/senuri.jpeg";
import aakkash from "../Assets/Faci/aakkash.jpeg";
import chamuditha from "../Assets/Faci/chamuditha 2.jpeg";
import jayani from "../Assets/Faci/jayani.jpeg";

const ChairDetails = {name: "?", position:"?"};

const VikumDetails = {name: "Vikum Wijekoon", position:"President"};

// CMs
const DineliDetails = {name: "Dineli Perera", position:"MCVP PR & NM"};
const HassanDetails = {name: "Fouzul Hassan", position:"MCVP IM"};

// AM
const UthpalaniDetails = {name: "Uthpalani Jayasinghe", position:"MCVP TM"};

const AkashaDetails = {name: "Akasha Wijesiriwardane", position:"MCVP B2C"};
const ImeshDetails = {name: "Imesh Cooray", position:"MCVP Brand"};
const DunithiDetails = {name: "Dunithi Leuwanduwa", position:"MCVP oGT"};

const PrabashiDetails = {name: "Prabashi Wanigasinghe", position:"MCVP oGV"};
const DileeshaDetails = {name: "Dileesha Hettiarachchi", position:"MCVP NS"};
const SanjeevDetails = {name: "Sanjeev Dhananjana", position:"MCVP BD"};

const SapnaDetails = {name: "Sapna Ravishika", position:"MCVP FnL"};
const SanuthiDetails = {name: "Sanuthi Weerasena", position:"MCVP iGV"};
const SenuriDetails = {name: "Senuri Bandara", position:"MCVP iGT"};

const AakkashDetails = {name: "Aakkash Gnanarathnam", position:"MCVP OD"};
const ChamudithaDetails = {name: "Chamuditha Guruge", position:"MCVP OPS"};
const JayaniDetails = {name: "Jayani Aluthge", position:"MCVP ED"};


const OC = () => {
  return (
    <>
      <div className="organize-container">
        <NavBar />
        <div className="organize-content">

          <p> Chair </p>
          <div className="organize">
            <FaciModal src={chair} alt="?" frontText="Chair" backText= {ChairDetails} />
          </div>

          <p> MCP </p>
          <div className="organize">
            <FaciModal src={vikum} alt="vikum" frontText="Vikum" backText= {VikumDetails}/>
          </div>

          <p> Conference Managers </p>
          <div className="organize">
            <FaciModal src={dineli} alt="Dineli" frontText="Dineli" backText= {DineliDetails}/>
            <FaciModal src={hassan} alt="Hassan" frontText="Hassan" backText= {HassanDetails}/>
          </div>

          <p> Agenda Manager </p>  
          <div className="organize">
            <FaciModal src={uthpalani} alt="Uthpalani" frontText="Uthpalani" backText= {UthpalaniDetails}/>
          </div>

          <p>MCVPs</p>
          <div className="organize">
            <FaciModal src={akasha} alt="Akasha" frontText="Akasha" backText= {AkashaDetails}/>
            <FaciModal src={imesh} alt="Imesh" frontText="Imesh" backText= {ImeshDetails}/>
            <FaciModal src={dunithi} alt="Dunithi" frontText="Dunithi" backText= {DunithiDetails}/>
          </div>

          <div className="organize">
            <FaciModal src={prabashi} alt="Prabashi" frontText="Prabashi" backText= {PrabashiDetails}/>
            <FaciModal src={dileesha} alt="Dileesha" frontText="Dileesha" backText= {DileeshaDetails}/>
            <FaciModal src={sanjeev} alt="Sanjeev" frontText="Sanjeev" backText= {SanjeevDetails}/>
          </div>

          <div className="organize">
            <FaciModal src={sapna} alt="Sapna" frontText="Sapna" backText= {SapnaDetails}/>
            <FaciModal src={sanuthi} alt="Sanuthi" frontText="Sanuthi" backText= {SanuthiDetails}/>
            <FaciModal src={senuri} alt="Senuri" frontText="Senuri" backText= {SenuriDetails}/>
          </div>

          <div className="organize">
            <FaciModal src={aakkash} alt="Aakkash" frontText="Aakkash" backText= {AakkashDetails}/>
            <FaciModal src={chamuditha} alt="Chamuditha" frontText="Chamuditha" backText= {ChamudithaDetails}/>
            <FaciModal src={jayani} alt="Jayani" frontText="Jayani" backText= {JayaniDetails}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default OC;
