import React from 'react'
import About from '../Components/About.js'
import Contact from '../Components/Contact.js'
import Footer from '../Components/Footer.js'
import HeroSec from '../Components/HeroSec.js'
import NavBar from '../Components/NavBar.js'
import Portfolio from '../Components/Portfolio.js'
import Testimonail from '../Components/Testimonail.js'
import WhatIDo from '../Components/WhatIDo.js'
import { Routes,Route } from 'react-router-dom';

export default function MainPage() {
  return (
    <>
      <NavBar />
      <div className='px-[200px] 2xl:px-[90px]  xl:px-[85px] lg:px-[50px] md:px-[20px] sm:px-[10px] '>   
        <HeroSec />
        <WhatIDo />
        <About />
        <Portfolio />
        <Testimonail />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
