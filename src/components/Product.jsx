import React, { useEffect, useState } from 'react';
import '../style/Products.css'
import axios from 'axios';
import {chicken} from '../components/Url'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { GiCampCookingPot } from 'react-icons/gi';
import { AiFillStar } from 'react-icons/ai';
import {Link}from 'react-router-dom'
export const Product = ({handleAddproduct}) => {
    const[popular,setPopular]=useState([])
 
    
    useEffect(()=>{
       
axios.get(chicken).then((res)=>{
    setPopular(res.data.meals)
}) })

      return (
    <div>
<div className='topbanner'>

<div className='leftbanner'>
<div className='heading'>
  
<h1>
  <span>Home</span>
   <span style={{color:"orange"}}>Delivery</span>  </h1>
  <p>Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, Delhi, Gurgaon, Nagpur, Jaipur, Coimbatore, Chandigarh, Ahemdabad</p>
  <button>Order Now</button>
</div>
</div>
<div className='rightbannner'>
<div className='backgroundcircle'></div>
<div className='maincircle'>

<div className='cicle1'>
  <img src="./image 2.png" alt="" />
</div>
<div className='cicle2'>
  <img src="./image 3.png" alt="" />
</div>
<div className='cicle3'>
  <img src="./image 5.png" alt="" />
</div>
<div className='cicle4'>
  <img src="./image 6.png" alt="" />
</div>




</div>

</div>



</div>



       <div className='banner'>
        <h1 style={{color:"grey",padding:"1rem"}}>Trending</h1>
<Splide options={{perPage:5,
   drag:'free'
  }}>
{popular.map((e)=>(
 <SplideSlide  key={e.idMeal}>
             <div key={e.idMeal}>
             <Link to={`/detail/${e.strMeal}`}  key={e.idMeal}>
                <img src={e.strMealThumb} alt="" />
                </Link>
                 
           <p style={{marginTop:"-3rem",color:"white",fontSize:"1.7rem",fontWeight:"600"}}>{e.strMeal}</p>
             </div>
             </SplideSlide>
            ))}
</Splide>
       </div>
        <div className='grid-food'> 
            {popular.map((e)=>(
             <div key={e.idMeal}>
                 <Link to={`/detail/${e.strMeal}`}  key={e.idMeal}>
                <img src={e.strMealThumb} alt="" />
                </Link>
                 
                 <h3>{e.strMeal}</h3>
               <p><GiCampCookingPot size={"1.5rem"} style={{color:"red"}}/>{e.strArea.length*3}min</p>
                <div className='rating-delivery'>
                   <p><AiFillStar  style={{color:"rgb(255, 243, 6)"}}/>{e.idMeal.length}.0</p>
                   <img src="https://www.pngarts.com/files/7/Food-Delivery-Scooter-PNG-High-Quality-Image.png" alt="" />
                      </div>

              <button onClick={()=>handleAddproduct(e)}>Order Food</button>
             </div>
            ))}
        </div>
    </div>
  )
};
