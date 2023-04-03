import React from 'react'
import About from './Widgets/About'
import Hero from './Widgets/Hero'
import Skill from './Widgets/Skill'
import Projects from './Widgets/Projects'
import Header from './layout/Header'

export default function page() {
  return <>
  <Header />
    <Hero />
    <About  />
    <Skill />
   <Projects />  

  </>

}
