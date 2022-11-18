import React from 'react'
import { ToastContainer } from 'react-toast'
import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Work from '../components/Work'

export default function index({data}) {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Work></Work>
      <Skills></Skills>
      <Contact></Contact>
      <ToastContainer delay={3000} position={'bottom-center'}/>
    </div>
  )
}
