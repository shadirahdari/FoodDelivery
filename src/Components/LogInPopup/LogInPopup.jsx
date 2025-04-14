import React, { useState } from 'react'
import './LogInPopup.css'
import { assets } from '../../assets/assets'

const LogInPopup = ({setShowLogin}) => {
    const [currentState,setCurrentState]=useState("Login")
  return (
    
    <div className='login-popup'>
       <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currentState==="Login"?<></>: <input type="name" placeholder="Your name" required /> }

            <input type="email" placeholder="Your email" required />
            <input type="pasword" placeholder="Password" required />
        </div>
        <button>{currentState==="Sign Up" ? "Createaccount":"Login" }</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState==="Login"?  <p>Create a new account? <span onClick={()=>setCurrentState("Sign up")}>Click here</span></p>: <p> Alraedy have an account? <span onClick={()=>setCurrentState("Log in")}>Login here</span></p> }
   

       </form>
    </div>
  )
}

export default LogInPopup