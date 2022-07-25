import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar'
import ShoeGrid from './Components/ShoeGrid'
import AddCart from './Components/AddCart'
import ImageSlider from './Components/imageswipe/imageSlider'
import Cart from './Components/Cart'
function App() {
const [cartNo, setCartNo] = useState(0)
  return (
    <div className="App">
    <div className='container'>
    <Navbar CartNo={cartNo}/>
    <ShoeGrid addToCart={   <AddCart cartAdd = {()=>setCartNo(cartNo+1)}     />} />

    </div>
    </div>
  )
}

export default App
