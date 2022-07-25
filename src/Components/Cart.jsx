import React from 'react'
import image1 from './images/image-product-1-thumbnail.jpg'
const Cart = ({noofCarts}) => {
  return (
    <div className='check-container'>
  <span>
 Cart
</span>
<div className='cart-row2' >
<div className='subcart'>
<img src={image1} alt='thumbnail image' style={{width:'50px'}}/>
<div className='cart-item-info'>
<span>
Fall Limited Edition Sneakers
</span>
<span>
$125 x {noofCarts} <strong>${125 * noofCarts}</strong>
</span>
</div>
</div>
<button className='cartBtn'>
Checkout
</button>
</div>
    </div>
  )
  }
  export default Cart
