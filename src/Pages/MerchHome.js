import React from "react";
import MerchHero from "../Components/MerchHero";
import NavBar from "../Components/NavBar";
import MerchSlider from "../Components/MerchSlider";

const MerchHome = () => {
  return (
    <div id="MerchHome">
      <NavBar />
      <MerchHero />
      <MerchSlider/>
    </div>
  );
};

export default MerchHome;
