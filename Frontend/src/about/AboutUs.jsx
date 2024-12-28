import React from 'react'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Footer from '../Components/Footer'

const AboutUs = () => {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen">
        <About/>
      </div>
      <Footer/>
    </>
  )
}

export default AboutUs
