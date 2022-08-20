import React from 'react'

export const Cart = ({cart ,handleRemoveproduct,handleAddproduct,handleRemovecart}) => {
  return (
    <div>
        <div>
            cart
            {cart.map((e)=>(
                <div  key={e.idMeal}>
                    
                    <img src={e.strMealThumb} alt="" />
                    <button onClick={()=>handleRemovecart(e)}>-</button>
                    <button onClick={()=>handleAddproduct(e)} >+</button>
                    <p>{e.amount}</p> 
                    <button onClick={()=>handleRemoveproduct(e)}>remove</button>
                </div>
            ))}
        </div>
    </div>
  )
}
