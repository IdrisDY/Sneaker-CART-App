import React, { useState } from 'react'
import addIcon from './images/icon-plus.svg'
import subIcon from './images/icon-minus.svg'
import cartIcon from './images/icon-cart.svg'

const AddCart = ({cartAdd}) => {
   const [cartItems, setCartItems] = useState(0)
   const isBtnDisabled = cartItems === 0
/**
 * When the user clicks the add button, the cartAdd function is called and the cartItems array is
 * passed to it.
 * cartAdd function is prop here and collects the cartAdd parameter and was used in another component.
 *Yet to understand fully, Prop functions also carry prop parameters?
 */
   function handleAddClick(){
    cartAdd(cartItems)
    console.log(cartAdd)
   }
  return (
    <div className='cartContainer'>
      <span className='sneakertext'> SNEAKER COMPANY </span>
      <h1> Fall Limited Edition Sneakers</h1>
      <p>   These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.
</p>
<div className='prices'>

<div className='priceSlash'>
   <h2> $125.00</h2>
   <span> 50%</span>
</div>
<h6> $250.00</h6>
</div>
<div className='addToCart'> 
<div className='cartCounter'>  
<img src={addIcon} alt='number add to cart ' onClick={()=>setCartItems(cartItems + 1)}/>
{cartItems}
<img src={subIcon} alt='number remove to cart ' onClick={()=> {if(cartItems>0){setCartItems(cartItems - 1)}}}/>

 </div>
<button disabled={isBtnDisabled} className='cartBtn' onClick={handleAddClick}><img src={cartIcon} alt=' cart-icon ' className='carticonWhite' />
Add to cart</button>
</div>
    </div>
  )
}

export default AddCart