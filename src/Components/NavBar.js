import React, { useEffect, useState } from 'react'
import { Link as RLink} from 'react-router-dom';
import logo from "../Assets/2024.png";
import newLogo from "../Assets/2024-new.png";

import menu from "../Assets/icons/menu-icon.png"




const NavBar = () => {


  const [sticky,setSticky] = useState(false);
  
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=> {
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'darknav': ''}`}>
    <a href="/"><img src={newLogo} alt="" className ="logo"/></a>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><RLink to="/" smooth={true} offset={-200} duration={500}>Home</RLink></li>
        <li><RLink to="/Gallery" smooth={true} offset={-250} duration={500}>Gallery</RLink></li>
        <li><RLink to="/OC" smooth={true} offset={-250} duration={500}>OC</RLink></li>
        <li><RLink to="/Faci" smooth={true} offset={-250} duration={500}>Faci</RLink></li>
        <li><RLink to="/MerchHome" smooth={true} offset={-250} duration={500}>Merch</RLink></li>
        <li><RLink to="/Partners" smooth={true} offset={-250} duration={500}>Partners</RLink></li>
        <li><RLink to="/Register" smooth={true} offset={-250} duration={500} className='btn bt'>Register</RLink></li>
      </ul>
      <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default NavBar
