import React from 'react'
import About from '../components/section/About'
import Contact from '../components/section/Contact'
import Home from '../components/section/About'
import Projects from '../components/section/Projects'
import Skills from '../components/section/Skills'

const MainLayout:React.FC = () => {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default MainLayout
