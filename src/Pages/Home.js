import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import AbNlds from '../Components/AbNlds'
import Footer from '../Components/Footer'
import CountDown from '../Components/CountDown'
import FollowUs from '../Components/FollowUs'

const Home = () => {
  return (
    <div className="home-container">
      <NavBar/>
      <Hero/>
      <CountDown/>
      <AbNlds/>
      <FollowUs/>
      <Footer/>
    </div>
  )
}

export default Home
