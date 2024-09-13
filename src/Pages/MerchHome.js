import React from "react";
import MerchHero from "../Components/MerchHero";
import NavBar from "../Components/NavBar";
import MerchSlider from "../Components/MerchSlider";
import ClickInfoSection from "../Components/ClickInfoSection";
import BuyMerch from "../Components/BuyMerch";
import GiftBox from "../Components/MysteryBox";
import Footer from "../Components/Footer";
const MerchHome = () => {
  return (
    <div id="MerchHome">
       <NavBar /> 
      <MerchHero />
      <ClickInfoSection/>
      <MerchSlider/>
      <BuyMerch/>
      <GiftBox/>
      <Footer/>
    </div>
  );
};

export default MerchHome;
