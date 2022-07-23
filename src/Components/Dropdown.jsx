import React from 'react'
import { NavList } from './Navbar'
import close from './images/icon-close.svg'
const Dropdown = ({closeMenu}) => {
  return (
    <div className='dropdown'>
    <div className='drop-content'>
    <img src={close} alt='close Menu' onClick={closeMenu}/>
 <NavList/>


    </div>
    </div>
  )
}

export default Dropdown