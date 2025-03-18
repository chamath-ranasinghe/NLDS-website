import React from "react";
import NavBar from "../_Components/NavBar";
import PartnerBox from "../_Components/PartnerBox";
import MainPartnerBox from "../_Components/MainPartnerBox";
import "../../Styles/Partners.css";
import Ceylinco from "../../Assets/Partner_Logos/Ceylinco_Life.png";
import Ceyline from "../../Assets/Partner_Logos/Ceyline.jpg";
import Abans from "../../Assets/Partner_Logos/Abans.png";

import GPTW from "../../Assets/Partner_Logos/GPTW.png";
import Dulux from "../../Assets/Partner_Logos/Dulux.png";
import IEC from "../../Assets/Partner_Logos/IEC.png";
import CA from "../../Assets/Partner_Logos/CA.png";
import CIPM from "../../Assets/Partner_Logos/CIPM.png";
import GRI from "../../Assets/Partner_Logos/GRI.png";
import Iris from "../../Assets/Partner_Logos/Iris.png";
import MINT from "../../Assets/Partner_Logos/MINT.png";
import Frella from "../../Assets/Partner_Logos/Frella.png";
import Cinnamon from "../../Assets/Partner_Logos/Cinnamon.svg";
import Browniebae from "../../Assets/Partner_Logos/BrownieBae.jpg";
import CakeCloud from "../../Assets/Partner_Logos/CakeCloud.jpg";
import Kalo from "../../Assets/Partner_Logos/Kalo.png";
import Fonterra from "../../Assets/Partner_Logos/Fonterra.png";
import Samaposha from "../../Assets/Partner_Logos/Samaposha.png";
import Mahagedara from "../../Assets/Partner_Logos/Mahagedara.png";
import DeepPlus from "../../Assets/Partner_Logos/DeepPlus.jpeg";
import NYSM from "../../Assets/Partner_Logos/NYSM.jpg";
import MOODZ from "../../Assets/Partner_Logos/MOODZ.jpg";
import SecretSeeker from "../../Assets/Partner_Logos/SecretSeeker.png";
import TGWater from "../../Assets/Partner_Logos/TGWater.jpeg";
import DNC from "../../Assets/Partner_Logos/DNC.png";
import AdaDerana from "../../Assets/Partner_Logos/AdaDerana.png";
import FMDerana from "../../Assets/Partner_Logos/FMDerana.jpg";
import HiOnline from "../../Assets/Partner_Logos/HiOnline.jpg";
import SundayTimes from "../../Assets/Partner_Logos/SundayTimes.png";
import PearlBay from "../../Assets/Partner_Logos/PearlBay.png";


const Partners = () => {
  return (
    <>
      <NavBar />
      <div className="background-image"></div>
      <div className="partner-content">
        <div className="partner-container">
          <div className="partner-row">
            <MainPartnerBox
              logoSrc={Ceylinco.src}
              partnerTitle="Title Partner"
              description="Ceylinco Life has helped people progress towards their aspirations with peace of mind for over 36 years. Their insurance solutions are built around keeping you and those who you love secure, so that you can follow your goals and ambitions, free of any risks."
              className="main-partner-box"
              url="https://www.ceylincolife.com/"
            />
            <MainPartnerBox
              logoSrc={Ceyline.src}
              partnerTitle="Platinum Partner"
              description="Ceyline Life has provided insurance solutions for over 36 years, keeping people safe as they pursue their goals."
              className="main-partner-box"
              url="https://www.ceyline-group.lk/"
            />
            <MainPartnerBox
              logoSrc={Abans.src}
              partnerTitle="Official Mobile Partner"
              description="Ceyline Life has provided insurance solutions for over 36 years, keeping people safe as they pursue their goals."
              className="main-partner-box"
              url="https://buyabans.com/brand/motorola"
            />
          </div>

          <div className="partner-row">
            <PartnerBox logoSrc={GPTW.src} partnerTitle="Bronze Partner" />
            <PartnerBox logoSrc={Dulux.src} partnerTitle="Associate Partner" />
          </div>

          <div className="partner-row">
          <PartnerBox logoSrc={CA.src} partnerTitle="Professional Education Partner" />
          <PartnerBox logoSrc={CIPM.src} partnerTitle="Professional Education Partner" />
          </div>

          <div className="partner-row">
            <PartnerBox logoSrc={IEC.src} partnerTitle="Banner Partner" description="International Education Consultancy" styleClass={"logo-resize"} />
            <PartnerBox logoSrc={GRI.src} partnerTitle="Banner Partner" description="International Education Consultancy" styleClass={"logo-resize"} />
          </div>

          <div className="partner-row">
            <PartnerBox logoSrc={Iris.src} partnerTitle="Gift Partner" description="Iris Garden" />
            <PartnerBox logoSrc={Frella.src} partnerTitle="Gift Partner" description="Frella International" styleClass={'logo-resize'} />
            <PartnerBox logoSrc={MINT.src} partnerTitle="Gift Partner" description="MINT Products" styleClass={'logo-resize'}/>
          </div>

          <div className="partner-row">
          <PartnerBox logoSrc={Cinnamon.src} partnerTitle="Gift Partner" description="Cinnamon Grand Colombo" styleClass={'logo-resize'}/>
          <PartnerBox logoSrc={PearlBay.src} partnerTitle="Gift Partner" description="Pearl Bay"/>
          <PartnerBox logoSrc={Samaposha.src} partnerTitle="Foof Partner" description="Samaposha" styleClass={'logo-resize'}/>
          </div>

          <div className="partner-row">
            <PartnerBox logoSrc={Browniebae.src} partnerTitle="Food Partner" description="Browniebae" />
            <PartnerBox logoSrc={CakeCloud.src} partnerTitle="Food Partner" description="Cake Cloud" />
            <PartnerBox logoSrc={Kalo.src} partnerTitle="Official Snacking Partner" description="Kalo" />
          </div>

          <div className="partner-row">
            <PartnerBox logoSrc={Fonterra.src} partnerTitle="Official Nutrition Partner" description="Fonterra" />
            <PartnerBox logoSrc={Mahagedara.src} partnerTitle="Official Merchandise Partner" description="Tshirt Mahagedara" />
            <PartnerBox logoSrc={DeepPlus.src} partnerTitle="Official Entertainment Partner" description="Deep Plus" />
          </div>

          <div className="partner-row">
            <PartnerBox logoSrc={NYSM.src} partnerTitle="Official Photography Partner" description="NowYouSeeMe" />
            <PartnerBox logoSrc={MOODZ.src} partnerTitle="GALA Photography Partner" description="MOODZ" />
            <PartnerBox logoSrc={SecretSeeker.src} partnerTitle="OBT Dronography Partner" description="Secret Seeker" />
          </div>

          <div className="partner-row">
          <PartnerBox logoSrc={AdaDerana.src} partnerTitle="Official Broadcasting Partner" description="Ada Derana 24" />
          <PartnerBox logoSrc={FMDerana.src} partnerTitle="Official Radio Partner" description="FM Derana" />
          </div>

          <div className="partner-row">
            <PartnerBox logoSrc={HiOnline.src} partnerTitle="Digital Media Partner" description="Hi Online" />
            <PartnerBox logoSrc={SundayTimes.src} partnerTitle="Printed Media Partner" description="Sunday Times – Education Times" styleClass={'logo-resize'} />
          </div>

          <div className="partner-row">
          <PartnerBox logoSrc={TGWater.src} partnerTitle="Complimentary Partner" description="TG Water Technologies (Pvt) Ltd" />
          <PartnerBox logoSrc={DNC.src} partnerTitle="Complimentary Partner" description="DNC Sports" />
          </div>
        </div>
      </div>
    </>
  );
};


export default Partners;
