import React from 'react'
import'./Fooddisplay.css'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = () => {
    const {food_list}=useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
    
    </div>
  )
}

export default FoodDisplay
