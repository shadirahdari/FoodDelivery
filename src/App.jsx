import React from 'react'
import Navbar from './Components/Navbar/navbar'
import{ Route, Routes} from 'react-router-dom'
import Home from './Components/Pages/Home/Home'
import Cart from './Components/Pages/Cart/Cart'
import PlaceOrder from '/.Components/Pages/PlaceOrder/PlaceOrder'


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
      < Route path ='/' element={<Home/>}/>
      < Route path ='/Cart' element={<Cart/>}/>
      <Route path='/Order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
  )
}

export default App
