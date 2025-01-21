import React from 'react'
import Header from '../../Component/Header/Header'
import About from '../../Component/About/About'
import Skills from '../../Component/Skills/Skills'
import Projectdisplay from '../../Component/Projectdisplay/Projectdisplay'
import Contact from '../../Component/Contactus/Contact'

const Home = () => {
  return (
    <div id="home">
      <Header/>
      <About/>
      <Skills/>
      <Projectdisplay/>
      <Contact/>
    </div>
  )
}

export default Home
