import React from 'react'
import about_img from "../Assets/2.jpg"
import about_imgt from "../Assets/3.jpg"


const AbNlds = () => {
  return (
      <div className="about" id='AbNlds'>
        <div className="aboutright">
          <h3>ABOUT EVENT </h3>
          <h2>TRANSCEND</h2>
          <h2>NATIONAL</h2>
          <h2>LEADERSHIP</h2>
          <h2>DEVELOPMENT</h2>
          <h2>SEMINAR 2024</h2>
          <p>NLDS is the most anticipated national conference of the year conducted to develop leadership, enhance employability and personal development skills of AIESECers. This four-day conference connects 250+ AIESECers through events, workshops and fun activities.</p>
        

          
         </div>
        <div className="aboutleft">
        <img src={about_img} alt="" className="about-img"/>
        <img src={about_imgt} alt="" className="about-img"/>
        </div>
        
      </div>
  )
}

export default AbNlds
