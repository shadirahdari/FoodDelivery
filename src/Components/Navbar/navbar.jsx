import React from 'react'
import'./navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt=""  className= "logo"/>
      <ul className="navbar-menu"></ul>
      <li>Home</li>
      <li>Menu</li>
      <li>Mobile-app</li>
      <li>Contact</li>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icone'>
          <img src={assets.basket_icon}alt="" />
          <div className='dot'></div>
        </div>
        <button>Sign in</button>

      </div>

      
    </div >
  )
}

export default Navbar
