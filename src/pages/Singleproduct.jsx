import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from'react-router-dom'
import { Navbar } from '../components/Navbar'
import { searchfood } from '../components/Url'
import { GiCampCookingPot } from 'react-icons/gi';
import { AiFillStar } from 'react-icons/ai';
import '../style/Singleproduct.css'
export const Singleproduct = ({cart,handleRemoveproduct,handleAddproduct,handleRemovecart}) => {
    const[detail,setDetail]=useState([])
    const param =useParams()
   
    useEffect(()=>{
        axios.get(searchfood+param.id).then((res)=>{
            setDetail(res.data.meals[0])
        })
        console.log(param,'paramv value')
    },[param.id])
  
  return (
    <div>
  <Navbar  cart={cart}handleAddproduct={handleAddproduct} handleRemoveproduct={handleRemoveproduct} handleRemovecart={handleRemovecart}/>
<div className='detailpage'> 
  <div className='left-detailpage'>
  <img src={detail.strMealThumb} alt="" />
  </div>
  <div className='right-detailpage'>
  <h2>{detail.strMeal}</h2>
 
  <p>{detail.strArea}</p>
  <p>Category:{detail.strCategory}</p>
  <p><GiCampCookingPot size={"1.5rem"} style={{color:"red"}} />18min</p>
  <p><AiFillStar  style={{color:"rgb(255, 243, 6)"}}/>5.0</p>
  <button onClick={()=>handleAddproduct(detail)}>Order Food</button>
  </div>
</div>

    </div>
  )
}
