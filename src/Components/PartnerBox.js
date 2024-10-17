import React from 'react';
import '../Styles/PartnerBox.css';

const PartnerBox = ({ logoSrc, partnerTitle, description, styleClass }) => {
  return (
    <div className="partner-box">
      <p className="partner-title">{partnerTitle}</p>
      <img src={logoSrc} alt="Logo"  className={`partner-logo  ${styleClass}`} />
    </div>
  );
};

export default PartnerBox;
