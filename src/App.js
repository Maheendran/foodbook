
import { useState } from 'react';
import { Routing } from './Allroute/Routing';
import './App.css';

function App() {

  const[cart,setCart]=useState([]) 

    const handleAddproduct = (product) => {
       
         const productExist = cart.find((items)=> items.idMeal === product.idMeal);
         console.log(cart)
         if(productExist){
           setCart(cart.map((items)=>items.idMeal === product.idMeal ?
           {...productExist,amount : productExist.amount + 1}:items))
       
        }
         
         else{
           setCart([...cart,{...product,amount:1}])
         }
     }
    //  /////////
    const handleRemoveproduct = (product)=>{
      const productExist = cart.find((items)=> items.idMeal === product.idMeal);
      if(productExist.amount ){
        setCart(cart.filter((items)=>items.idMeal !== product.idMeal));
        console.log(cart)
      }
      else{
        setCart(
          cart.map((items)=>items.idMeal === product.idMeal ?
          {...productExist,amount : productExist.amount - 1}:items))
      }
    }
    // ///////////////
    const handleRemovecart = (product)=>{
      const productExist = cart.find((items)=> items.idMeal === product.idMeal);
      if(productExist.amount===1 ){
        setCart(cart.filter((items)=>items.idMeal !== product.idMeal));
     
      }
     
      else{
        setCart(
          cart.map((items)=>items.id === product.id ?
          {...productExist,amount : productExist.amount - 1}:items))
      }
    }
    // ////////////////
  return (
    <>
  
<Routing  cart={cart}handleAddproduct={handleAddproduct} handleRemoveproduct={handleRemoveproduct} handleRemovecart={handleRemovecart}/>

    </>
  );
}

export default App;
