import React from 'react'
import element from "../Assets/FollowUs/fbelement.png"
import "../Styles/FollowUs.css"

const FollowUs = () => {
  return (
    <div className='followus'>
      <div className="follow-content">
      <div className="fbelmnt">
                    <img src={element} alt="Logo" className="element-item" />
                </div>
                <div className="follow-text">
        <p>FOLLOW US ON FACEBOOK</p>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="follow-text-link">
          CLICK HERE
        </a>
      </div>
      </div>
    </div>
  )
}

export default FollowUs
