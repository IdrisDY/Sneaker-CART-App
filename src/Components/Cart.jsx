import React from 'react'
import image1 from './images/image-product-1-thumbnail.jpg'
import del from './images/icon-delete.svg'

const Cart = ({cartArr,orderDelete}) => {
  // cartArr that is propped here is an array of CartOrders created and populated in App.js
  // OrderDelete handles delete and displays filterd cartOrder Array 
  return (
    <div className='check-container'>
  <span>
 Cart
</span>
{
  cartArr.length === 0?
    <p className='no-order-p'>
No Orders At the Moment
    </p>
  :
  cartArr.map(cart=> {

return(
  <div className='cart-row2' key={cart.id} >
  <div className='subcart'>
  <img src={image1} alt='thumbnail image' style={{width:'40px',height:'40px'}}/>
  <div className='cart-item-info'>
    <div className='delDiv'>
    <span>
  Fall Limited Edition Sneakers
  </span>
  <button onClick={()=>orderDelete(cart.id)}>
  <img src={del} alt='cancel order' />
  </button>

    </div>
<div>
<span>
  $125 x {cart.no} <strong>${125 * cart.no}</strong>
  </span>

</div>
  </div>
  </div>
  <button className='checkBtn'>
  Checkout
  </button>
  </div>)
   }
  )
}
    </div>
  )
  }
  export default Cart
