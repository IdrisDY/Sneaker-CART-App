import React, { useState } from 'react'
import sneakerLogo from './images/logo.svg'
import cartIcon from './images/icon-cart.svg'
import avatar from './images/image-avatar.png'
import Menu from './images/icon-menu.svg'
import Dropdown from './Dropdown'
import Cart from './Cart'
export const NavList = () => {
return(
  <ul className=''>
  <li> Collections</li>
  <li>Men </li>
  <li>Women </li>
  <li>About </li>
  <li>Contact </li>
</ul>

)
}
const Navbar = ({CartNo, cart}) => {
  const [menuClick, setMenuClick] = useState(false)
  const [cartClicked, setCartClicked] = useState(false)

function showCart(){
 !cartClicked? setCartClicked(true):setCartClicked(false)
}

  return (
    <nav className='navSection'>
    {menuClick?<Dropdown closeMenu={()=>setMenuClick(false)}/>:null}
    <div className='menulogo'> 
    <img src={Menu} alt='menu button' className='menubtn' onClick={()=>setMenuClick(true)}/>

    <img src={sneakerLogo} alt='sneaker Logo' className='sneakerlogo'/>
    </div>
   
  <ul className='ulNav'>
    <li> Collections</li>
    <li>Men </li>
    <li>Women </li>
    <li>About </li>
    <li>Contact </li>
  </ul>

      <div className='avatarDiv'>
        <div  className='navIcon cartIcon' data-content={CartNo}>
          <img src={cartIcon} onClick={showCart} alt='cart icon' /> 
          {cartClicked?cart:null}
</div>
        <div  className='navIcon'>      <img src={avatar} alt='user avatar'/>
</div>
      </div>

    </nav>
  )
}

export default Navbar