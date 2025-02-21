import React from 'react'
import '../Styles/ClickInfo.css'
function ClickInfoSection() {
  return (
    <section className="click-info-section">
      <p className="click-info-text">Click on the items to view details</p>
      <p></p>
      <p className="click-info-text prices">Standard Pack: Tshirt + Band + Sticker Pack + Mystery Gift (LKR 1850)</p>
      <p className="click-info-text prices">Skinny (LKR 950)<span style={{color:"#f00"}}>  Limited Edition </span> </p>
      <p className="click-info-text prices">Cap (LKR 750)<span style={{color:"#f00"}}>  Limited Edition </span></p>
      {/* <p className="click-info-text prices">Cap and Skinny (LKR 1600)<span style={{color:"#f00"}}> Till 24th September (11.59 PM) only </span></p> */}
      <p className="click-info-text prices"></p>
      <p className="click-info-text prices"></p>
      {/* <p className="click-info-text prices"> <span style={{fontSize:"120%"}}>Hurry! Only open till 24th September - 11.59 PM </span></p> */}
    </section>
  )
}

export default ClickInfoSection
