import React, { useState } from 'react'
import Navbar from './Components/Navbar/navbar'
import{ Route, Routes} from 'react-router-dom'
import Home from './Components/Pages/Home/Home'
import Cart from './Components/Pages/Cart/Cart'
import PlaceOrder from "./Components/Pages/PlaceOrder/PlaceOrder";
import Footer from './Components/Footer/Footer'
import LogInPopup from './Components/LogInPopup/LogInPopup'




const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (<>
  {showLogin?<LogInPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='App'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
      < Route path ='/' element={<Home/>}/>
      < Route path ='/Cart' element={<Cart/>}/>
      <Route path='/Order' element={<PlaceOrder/>}/>
      </Routes>
    </div> 
    <Footer/>
  
  </>
  )
}

export default App
