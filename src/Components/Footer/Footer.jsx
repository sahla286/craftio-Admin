import React from 'react'
import './Footer.css'
const Footer = () => {
  const date=new Date()
  const year=date.getFullYear();
  return (
    <div className='footer'>
      <hr />
      <p>Copyright &copy; {year} - All Right Reserved.</p>
    </div>
  )
}

export default Footer
