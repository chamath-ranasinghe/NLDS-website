// PartnerBox.js
import React from 'react';
import '../Styles/PartnerBox.css';

const MainPartnerBox = ({logoSrc,partnerTitle,description}) => {
  return (
    <div className="partner-box">
       <p className='partner-title'>{partnerTitle}</p>
      <div className="left-section">
        {/* Replace with your logo image */}
        <img src={logoSrc} alt="Logo" className="partner-logo" />
      </div>
      <div className="right-section">
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
  );
};

export default MainPartnerBox;
