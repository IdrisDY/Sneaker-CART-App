import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar'
import ShoeGrid from './Components/ShoeGrid'
import AddCart from './Components/AddCart'
import ImageSlider from './Components/imageswipe/imageSlider'
import Cart from './Components/Cart'
function App() {
  const arrOfOrders = []
const [cartNo, setCartNo] = useState(0)
const [arr, setArr]= useState([])

  function handleCartOrderNo(cartItems){
    const obj = {
      id:Math.random(),
      no:cartItems
      }
    
  setCartNo(cartNo+1)
 arr.push(obj)
console.log(arr)
  }
  function handleOrderDelete(id){
    const filteredOrders = arr.filter(ar=> ar.id !== id)
setArr(filteredOrders)
console.log(arr)
  }

  
  return (
    <div className="App">
    <div className='container'>
    <Navbar CartNo={cartNo} cart={<Cart cartArr={arr} orderDelete={handleOrderDelete} />}/>
{/* Passing a prop to the ShoeGrid component. */}
    <ShoeGrid addToCart={   <AddCart cartAdd = {handleCartOrderNo}     />} />

    </div>
    </div>
  )
}

export default App
