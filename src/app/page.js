import React from 'react'
import NavBar from './_Components/NavBar'
import Hero from './_Components/Hero'
import AbNlds from './_Components/AbNlds'
import Footer from './_Components/Footer'
import CountDown from './_Components/CountDown'
import FollowUs from './_Components/FollowUs'
import RollCalls from './_Components/RollCalls'
import AfterMovies from './_Components/AfterMovies'

const Home = () => {
  return (
    <div className="home-container">
      <NavBar/>
      <Hero/>
      <CountDown/>
      <RollCalls/>
      <AfterMovies/>
      <AbNlds/>
      <FollowUs/>
      <Footer/>
    </div>
  )
}

export default Home
