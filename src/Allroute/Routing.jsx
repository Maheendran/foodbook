import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Singleproduct } from '../pages/Singleproduct'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
export const Routing = ({cart,handleRemoveproduct,handleAddproduct,handleRemovecart}) => {
  return (
    <>
<Routes>
<Route path='/login' element={<Login cart={cart}handleAddproduct={handleAddproduct} handleRemoveproduct={handleRemoveproduct} handleRemovecart={handleRemovecart}/>}/>
<Route path='/' element={<Home  cart={cart}handleAddproduct={handleAddproduct} handleRemoveproduct={handleRemoveproduct} handleRemovecart={handleRemovecart} />}/>
<Route path='/detail/:id' element={<Singleproduct  cart={cart}handleAddproduct={handleAddproduct} handleRemoveproduct={handleRemoveproduct} handleRemovecart={handleRemovecart} />}/>
</Routes>
    </>
  )
}
