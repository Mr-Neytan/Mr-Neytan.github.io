import { useState } from 'react'
import './App.css'
import Welcome from './Components/Welcome/Welcome'
import Skills from './Components/Skills/Skills'
import Portfolio from './Components/Portfolio/Portfolio'

function App() {

  return (
    <>
      <Welcome/>
      <hr></hr>
      <Skills/>
      <hr></hr>
      <Portfolio/>
      
    </>
  )
}

export default App
