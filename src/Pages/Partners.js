import React from 'react'
import NavBar from '../Components/NavBar'
import PartnerBox from '../Components/PartnerBox'
import '../Styles/Partners.css'
import Ceylinco from '../Assets/Partner_Logos/Ceylinco_Life.png'
import Ceyline from '../Assets/Partner_Logos/Ceyline.jpg'

const Partners = () => {
  return (
    <>
    <NavBar/>
    <div className="background-image"></div>
    <div className='partner-content'>
    <div className="partner-container">
      <PartnerBox 
        logoSrc={Ceylinco}
        partnerTitle="Title Partner" 
        description="Ceylinco Life has helped people progress towards their aspirations with peace of mind for over 36 years. Their insurance solutions are built around keeping you and those who you love secure, so that you can follow your goals and ambitions, free of any risks.  "
      />
      <PartnerBox 
        logoSrc={Ceyline} 
        partnerTitle="Platinum Partner"
        description="Ceylinco Life has helped people progress towards their aspirations with peace of mind for over 36 years. Their insurance solutions are built around keeping you and those who you love secure, so that you can follow your goals and ambitions, free of any risks.  "
      />
      <PartnerBox 
        logoSrc={Ceyline} 
        partnerTitle="Platinum Partner"
        description="Ceylinco Life has helped people progress towards their aspirations with peace of mind for over 36 years. Their insurance solutions are built around keeping you and those who you love secure, so that you can follow your goals and ambitions, free of any risks.  "
      />
    </div>
    
    </div>
    </>
  )
}

export default Partners
