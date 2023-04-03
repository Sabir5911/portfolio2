import React from 'react'
import About from './Widgets/About'
import Hero from './Widgets/Hero'
import Skill from './Widgets/Skill'
import Projects from './Widgets/Projects'
import Header from './layout/Header'
import Pricing from './Widgets/Pricing'
import Contact from './Widgets/Contact'
import Footer from './layout/Footer'

export default function page() {
  return <>
  <Header />
    <Hero />
    <About  />
    <Skill />
   <Projects />  
   <Pricing />
<Contact />
<Footer />
  </>

}
