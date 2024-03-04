import React from 'react'
import './Navbar.css'
// import navlogo from '../Assets/nav-logo.svg'
import logo from '../Assets/handicraft.png'
// import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} className='nav-logo' alt="" />
      <h1 className='nav-name'>CRAFT.IO</h1>
      {/* <img src={navprofileIcon} className='nav-profile' alt="" /> */}
    </div>
  )
}

export default Navbar
