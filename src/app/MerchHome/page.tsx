import React from "react";
import MerchHero from "../_Components/MerchHero";
import NavBar from "../_Components/NavBar";
import MerchSlider from "../_Components/MerchSlider";
import ClickInfoSection from "../_Components/ClickInfoSection";
import BuyMerch from "../_Components/BuyMerch";
import GiftBox from "../_Components/MysteryBox";
import Footer from "../_Components/Footer";
const MerchHome = () => {
  return (
    <div id="MerchHome">
      <NavBar />
      <MerchHero />
      <ClickInfoSection />
      <MerchSlider />
      <BuyMerch />
      <GiftBox />
      <Footer />
    </div>
  );
};

export default MerchHome;
