import React from 'react'
import HeroStyles from '../styles/HeroStyles'

const Hero = () => {
  return (
    <HeroStyles>
      <div className='container' id='home'>
        <h1>Front End Engineer</h1>
        <h2>Physical Therapist</h2>
        <h3> <span>&#9829;</span> Building attractive / <br></br> responsive websites </h3>
      </div>
    </HeroStyles>
  )
}

export default Hero