import React from 'react'
import lg from "../Assets/lg.png"
import "../Styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={lg} alt="Logo" className="logo-image" />
                </div>
                <div className="footer-text">
                    <p>AIESEC is a non-governmental not-for-profit organization in consultative status with the United Nations Economic and Social Council (ECOSOC), affiliated with the UN DPI, member of ICMYO, and is recognized by UNESCO. AIESEC International Inc. is registered as a Not-for-profit Organisation under the Canadian Not-for-profit Corporations Act – 2018-02-08, Corporation Number: 1055154-6 and Quebec Business Number (NEQ) 1173457178 in Montreal, Quebec, Canada.© AIESEC 2019 Privacy Policy</p>
                </div>
            </div>
            <div className="footer-copyright">
                &copy; Copyright 2024 AIESEC in Sri Lanka <br/>
                Created by OC Diablos
            </div>
        </footer>
  

  )
}

export default Footer
