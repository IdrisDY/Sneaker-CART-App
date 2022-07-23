import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar'
import ShoeGrid from './Components/ShoeGrid'
import AddCart from './Components/AddCart'
import ImageSlider from './Components/imageswipe/imageSlider'
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
