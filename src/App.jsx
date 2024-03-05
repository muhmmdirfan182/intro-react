import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/navbar'

function App() {

  return (
    <>
      <Navbar />
      <div style={{minheight:'100vh'}}>
      { <Outlet/> }
      </div>
    </>
  )
}

export default App
