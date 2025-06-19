import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/hero'
import About from './components/About/About'
import Servi from './components/Servi/Services'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Servi/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
