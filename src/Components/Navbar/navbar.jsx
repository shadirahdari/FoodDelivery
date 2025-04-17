import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const[menu,setMenu]=useState("Menu")

  const {getTotalCartAmount}=useContext(StoreContext);
  // console.log(getTotalCartAmount());



  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="logo" className="logo" /></Link>

      <ul className="navbar-menu">
        <li onClick={()=>setMenu("Home")} className= {menu==="Home"?"active":""}>Home</li>
        <li  onClick={()=>setMenu("Menu")}className= {menu==="Menu"?"active":""}>Menu</li>
        <li  onClick={()=>setMenu("Mobile-App")}className= {menu==="Mobile-App"?"active":""}>Mobile App</li>
        <li  onClick={()=>setMenu("Contact-Us")}className= {menu==="Contact-Us"?"active":""}>Contact Us</li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
         <Link to='/Cart'> <img src={assets.basket_icon} alt="basket" /></Link>
         {getTotalCartAmount() > 0 && <div className="dot"></div>}
         

        </div>
        <button onClick={ ()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
