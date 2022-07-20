import React from 'react'
import sneakerLogo from './images/logo.svg'
import cartIcon from './images/icon-cart.svg'
import avatar from './images/image-avatar.png'


const Navbar = () => {
  return (
    <nav className='navSection'>
    <div> 
    <img src={sneakerLogo} alt='sneaker Logo'/>
    </div>
      <div>
        <ul className='ulNav'>
          <li> Collections</li>
          <li>Men </li>
          <li>Women </li>
          <li>About </li>
          <li>Contact </li>
        </ul>
      </div>
      <div className='avatarDiv'>
      <img src={cartIcon} alt='cart icon'/>
      <img src={avatar} alt='user avatar'/>
      </div>
    </nav>
  )
}

export default Navbar