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
const [orderArr, setOrderArr]= useState([])

/**
 * The function takes in a number, and adds it to an array
 */
  function handleCartOrderNo(cartItems){
    const obj = {
      id:Math.random(),
      no:cartItems
      }
    
  setCartNo(cartNo+1)
 orderArr.push(obj)
console.log(orderArr)
  }

/**
 * The function takes in an id, filters the array of orders, and sets the filtered array as the new
 * array of orders
 */
  function handleOrderDelete(id){
    const filteredOrders = orderArr.filter(ar=> ar.id !== id)
setOrderArr(filteredOrders)
setCartNo( cartNo-1)
  }

  
  return (
    <div className="App">
    <div className='container'>
    <Navbar CartNo={cartNo} cart={<Cart cartArr={orderArr} orderDelete={handleOrderDelete} />}/>
{/* Passing a prop to the ShoeGrid component ah. */}
    <ShoeGrid addToCart={<AddCart cartAdd={handleCartOrderNo}/>}/>

    </div>
    </div>
  )
}

export default App
