import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Icard from './components/Icard'

function App(){
  return (
    <div style = {{color:'red',border:'2px solid yellow',heigth:'200px',width:'200px'}}>
        <h2>Welcome to react</h2>
        <Icard></Icard>
    </div>
  )
}

export default App
