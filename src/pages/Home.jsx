import React from 'react'
import { Navbar } from '../components/Navbar'
import { Product } from '../components/Product'

export const Home = ({cart,handleRemoveproduct,handleAddproduct,handleRemovecart}) => {
  return (
    <div>
       <Navbar  cart={cart}handleAddproduct={handleAddproduct} handleRemoveproduct={handleRemoveproduct} handleRemovecart={handleRemovecart}/>
<Product handleAddproduct={handleAddproduct}/>
    </div>
  )
}
