import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import ThemeToggle from './components/ThemeToggle'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {ReactLenis} from 'lenis/dist/lenis-react'
import Topscroll from './components/Topscroll';


const page = () => {
  return (
    <>
    <ReactLenis root
    options={{
      lerp:0.05,
    }}>
    <Navbar />
    <Hero />
       <Topscroll />
    <About />
    <Skills />
    <Work />
    <Contact />
    <Footer />
    </ReactLenis>
    </>
  )
}

export default page