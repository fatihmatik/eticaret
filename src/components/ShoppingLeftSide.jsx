import React from 'react'
import ShoppingMiniSearchBar from './ShoppingMiniSearchBar'
import ShoppingMİniCheckboxes from './ShoppingMİniCheckboxes'
import {sexArray, markaArr, bedenArr} from "../utils/checkBoxArrays"

const ShoppingLeftSide = () => {
  return (
    <div className='bg-gray-100 w-1/3 h-full flex flex-col p-4'>
        <div className='bg-white w-full p-4 mb-4 shadow rounded-lg hover:shadow-md transition-shadow duration-300'>
            <ShoppingMiniSearchBar placeholderInput="Marka"/>
            <ShoppingMİniCheckboxes items={markaArr} prefix="marka" />
        </div>
        <div className='bg-white w-full p-4 mb-4 shadow rounded-lg hover:shadow-md transition-shadow duration-300'>
            <ShoppingMiniSearchBar placeholderInput="Beden"/>
            <ShoppingMİniCheckboxes items={bedenArr} prefix="beden" />
        </div>
        <div className='bg-white w-full p-4 mb-4 shadow rounded-lg hover:shadow-md transition-shadow duration-300'>
            <h3>Cinsiyet</h3>
            <ShoppingMİniCheckboxes items={sexArray}prefix="sex" />
        </div>
    </div>
  )
}

export default ShoppingLeftSide
  