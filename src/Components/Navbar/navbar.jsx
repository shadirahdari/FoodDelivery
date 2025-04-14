import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = ({setShowLogin}) => {

  const[menu,setMenu]=useState("Menu")
  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />

      <ul className="navbar-menu">
        <li onClick={()=>setMenu("Home")} className= {menu==="Home"?"active":""}>Home</li>
        <li  onClick={()=>setMenu("Menu")}className= {menu==="Menu"?"active":""}>Menu</li>
        <li  onClick={()=>setMenu("Mobile-App")}className= {menu==="Mobile-App"?"active":""}>Mobile App</li>
        <li  onClick={()=>setMenu("Contact-Us")}className= {menu==="Contact-Us"?"active":""}>Contact Us</li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icone">
          <img src={assets.basket_icon} alt="basket" />
          <div className="dot"></div>
        </div>
        <button onClick={ ()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
