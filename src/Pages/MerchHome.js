import React from "react";
import MerchHero from "../Components/MerchHero";
import NavBar from "../Components/NavBar";
import MerchSlider from "../Components/MerchSlider";
import ClickInfoSection from "../Components/ClickInfoSection";
import BuyMerch from "../Components/BuyMerch";
const MerchHome = () => {
  return (
    <div id="MerchHome">
      <NavBar />
      <MerchHero />
      <ClickInfoSection/>
      <MerchSlider/>
      <BuyMerch/>
      <ClickInfoSection/> 
    </div>
  );
};

export default MerchHome;
