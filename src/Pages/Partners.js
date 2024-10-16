import React from "react";
import NavBar from "../Components/NavBar";
import PartnerBox from "../Components/PartnerBox";
import MainPartnerBox from "../Components/MainPartnerBox";
import "../Styles/Partners.css";
import Ceylinco from "../Assets/Partner_Logos/Ceylinco_Life.png";
import Ceyline from "../Assets/Partner_Logos/Ceyline.jpg";
import Abans from "../Assets/Partner_Logos/Abans.png";

import GPTW from "../Assets/Partner_Logos/GPTW.png";
import Dulux from "../Assets/Partner_Logos/Dulux.png";
import IEC from "../Assets/Partner_Logos/IEC.png";
// import CIPM from "../Assets/Partner_Logos/CIPM.png";
import Iris from "../Assets/Partner_Logos/Iris.png";
import MINT from "../Assets/Partner_Logos/MINT.png";
import Frella from "../Assets/Partner_Logos/Frella.png";
import Browniebae from "../Assets/Partner_Logos/BrownieBae.jpg";
import CakeCloud from "../Assets/Partner_Logos/CakeCloud.jpg";
import Kalo from "../Assets/Partner_Logos/Kalo.png";
import Fonterra from "../Assets/Partner_Logos/Fonterra.png";
// import ElephantHouse from "../Assets/Partner_Logos/ElephantHouse.png";
import Mahagedara from "../Assets/Partner_Logos/Mahagedara.png";
import DeepPlus from "../Assets/Partner_Logos/DeepPlus.jpeg";
import NYSM from "../Assets/Partner_Logos/NYSM.jpg";
import MOODZ from "../Assets/Partner_Logos/MOODZ.jpg";
import SecretSeeker from "../Assets/Partner_Logos/SecretSeeker.png";
import TGWater from "../Assets/Partner_Logos/TGWater.jpeg";
import DNC from "../Assets/Partner_Logos/DNC.png";
import HiOnline from "../Assets/Partner_Logos/HiOnline.jpg";
import SundayTimes from "../Assets/Partner_Logos/SundayTimes.png";


const Partners = () => {
  return (
    <>
      <NavBar />
      <div className="background-image"></div>
      <div className="partner-content">
        <div className="partner-container">
          <div className="partner-row">
            <MainPartnerBox
              logoSrc={Ceylinco}
              partnerTitle="Title Partner"
              description="Ceylinco Life has helped people progress towards their aspirations with peace of mind for over 36 years. Their insurance solutions are built around keeping you and those who you love secure, so that you can follow your goals and ambitions, free of any risks."
              className="main-partner-box"
            />
            <MainPartnerBox
              logoSrc={Ceyline}
              partnerTitle="Platinum Partner"
              description="Ceyline Life has provided insurance solutions for over 36 years, keeping people safe as they pursue their goals."
              className="main-partner-box"
            />
            <MainPartnerBox
              logoSrc={Abans}
              partnerTitle="Official Mobile Partner"
              description="Ceyline Life has provided insurance solutions for over 36 years, keeping people safe as they pursue their goals."
              className="main-partner-box"
            />
          </div>

          <div className="partner-row">
            <PartnerBox logoSrc={GPTW} partnerTitle="Bronze Partner" />
            <PartnerBox logoSrc={Dulux} partnerTitle="Associate Partner" />
            <PartnerBox logoSrc={IEC} partnerTitle="Banner Partner" description="International Education Consultancy" styleClass={"logo-resize"} />
          </div>

          <div className="partner-row">
            <PartnerBox logoSrc={Iris} partnerTitle="Gift Partner" description="Iris Garden" />
            <PartnerBox logoSrc={Frella} partnerTitle="Gift Partner" description="Frella International" styleClass={'logo-resize'} />
            <PartnerBox logoSrc={MINT} partnerTitle="Gift Partner" description="MINT Products" styleClass={'logo-resize'}/>
          </div>

          <div className="partner-row">
            <PartnerBox logoSrc={Browniebae} partnerTitle="Food Partner" description="Browniebae" />
            <PartnerBox logoSrc={CakeCloud} partnerTitle="Food Partner" description="Cake Cloud" />
            <PartnerBox logoSrc={Kalo} partnerTitle="Official Snacking Partner" description="Kalo" />
          </div>

          <div className="partner-row">
            <PartnerBox logoSrc={Fonterra} partnerTitle="Official Nutrition Partner" description="Fonterra" />
            <PartnerBox logoSrc={Mahagedara} partnerTitle="Official Merchandise Partner" description="Tshirt Mahagedara" />
            <PartnerBox logoSrc={DeepPlus} partnerTitle="Official Entertainment Partner" description="Deep Plus" />
          </div>

          <div className="partner-row">
            <PartnerBox logoSrc={NYSM} partnerTitle="Official Photography Partner" description="NowYouSeeMe" />
            <PartnerBox logoSrc={MOODZ} partnerTitle="GALA Photography Partner" description="MOODZ" />
            <PartnerBox logoSrc={SecretSeeker} partnerTitle="OBT Dronography Partner" description="Secret Seeker" />
          </div>

          <div className="partner-row">
            <PartnerBox logoSrc={HiOnline} partnerTitle="Digital Media Partner" description="Hi Online" />
            <PartnerBox logoSrc={SundayTimes} partnerTitle="Printed Media Partner" description="Sunday Times – Education Times" styleClass={'logo-resize'} />
          </div>

          <div className="partner-row">
          <PartnerBox logoSrc={TGWater} partnerTitle="Complimentary Partner" description="TG Water Technologies (Pvt) Ltd" />
          <PartnerBox logoSrc={DNC} partnerTitle="Complimentary Partner" description="DNC Sports" />
          </div>
        </div>
      </div>
    </>
  );
};


export default Partners;
