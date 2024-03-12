import React from 'react'
import './Navbar.css'
import logo from '../Assets/handicraft.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} className='nav-logo' alt="" />
      <h1 className='nav-name'>CRAFT.IO</h1>
    </div>
  )
}

export default Navbar;
