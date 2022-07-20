import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar'
import ShoeGrid from './Components/ShoeGrid'

function App() {

  return (
    <div className="App">
    <div className='container'>
    <Navbar/>
    <ShoeGrid/>
    </div>
    </div>
  )
}

export default App
