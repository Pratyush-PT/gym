import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import About2 from './components/About/About2'
import About3 from './components/About/About3'
import Contact from './components/Contact/Contact'
import Pricing from './components/Pricing/Pricing'
import AppStoreBanner from './components/AppBanner/AppBanner'
import Testimonials from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
const App= () => {

  return (
    <div div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <About2/>
      <Contact/>
      <About3/>
      <Pricing/>
      <AppStoreBanner/>
      <Testimonials/>
      <Footer/>
    </div>
  )

}

export default App

