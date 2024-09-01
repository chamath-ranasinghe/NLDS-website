import React from 'react'
import NavBar from '../Components/NavBar'
import PartnerBox from '../Components/PartnerBox'
import '../Styles/Partners.css'
import logo from '../Assets/NLDS.png'

const Partners = () => {
  return (
    <>
    <NavBar/>
    <div className="background-image"></div>
    <div className='partner-content'>
    <div className="partner-container">
      <PartnerBox 
        logoSrc={logo} 
        description="This is a brief description of the content or feature. You can use this space to introduce the content."
      />
    </div>
    </div>
    </>
  )
}

export default Partners
