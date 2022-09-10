import React, { useState } from 'react'
import '../style/Navbar.css'
import{Link, useNavigate} from'react-router-dom'
import { BsSearch } from 'react-icons/bs';
import { AiOutlineCloseCircle,AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineAccountCircle } from 'react-icons/md';
import {useAuthState} from'react-firebase-hooks/auth'
import { auth } from '../Firebase'

export const Navbar = ({cart,handleRemoveproduct,handleAddproduct,handleRemovecart}) => {
  const navigate=useNavigate()
  const[user,loading,error]=useAuthState(auth)

const[carttoogle,setCarttoogle]=useState(false)
const[account,setAccount]=useState(false)
const[search,setSearch]=useState("burger")
const[getsearch,setGetsearch]=useState("")

function handlesearchget(){
  setGetsearch(search)
  console.log(getsearch)
}

  const handlecart=()=>{
    setAccount(false)
    setCarttoogle(!carttoogle)
  }
  const handleaccount =()=>{
    setCarttoogle(false)
    setAccount(!account)

  }
  const logout=()=>{
    auth.signOut()
    navigate("/login")
    console.log("logo")
  }

  const handlecheckout=()=>{
 alert("checkout successfull")
    window.location.reload()
    navigate('/')
  }


  const totalPrice = cart.reduce((price,item)=> price+item.amount *300,0)
  return (
    <>
    <div className='nav-container'>
<div className='left-nav'>
  <Link to="/">
  <img src="https://th.bing.com/th/id/OIP.Av1cwVhBcwk2wMXFVdrjqQAAAA?pid=ImgDet&rs=1" alt="" />
  </Link></div>
<div className='van-animate'>
  <img src="https://www.pngarts.com/files/7/Food-Delivery-Scooter-PNG-High-Quality-Image.png" alt="" />
</div>
<div className='right-nav'>
  <input type="text" placeholder='search' value ={search}onChange={(e)=>setSearch(e.target.value)} />
  <Link to={`/detail/${search}`} >
  <BsSearch size={"1.2rem"} onClick={handlesearchget} />
  </Link>
 
 <MdOutlineAccountCircle size={"1.8rem"} style={{   cursor: "pointer"}} onClick={handleaccount} />
    <AiOutlineShoppingCart size={"1.6rem"} onClick={handlecart}  style={{cursor: "pointer"}} />
    {cart.length>0 && <div className='cartlength'>
 {cart.length}
   </div>}
 
</div>
    </div>
{account&& 
<div className='accountlogin'>
{user ? 
   <p>welcome {user?.email}</p>:
   <div>
  <Link to="/login">
  <p>Login</p>
  </Link>
  <Link to="/login">
  <p>SignUp</p>
  </Link>
  </div>
  }
  {user &&
  <button onClick={()=>logout()}>logout</button>}

 
</div>}
{carttoogle && <div className='cart'>
 
  <AiOutlineCloseCircle size={"1.6rem"} onClick={handlecart} style={{   cursor: "pointer"}}/>
  {cart.length>0 && 
  <div className='checkout'>
    {user ?
  <button onClick={()=>handlecheckout()}>Checkout</button>:
  <div className='please-login'>
    <Link to={'/login'}>
    <button >Login for checkout</button>
    </Link>

  </div>}
 <h1> Total Price:{totalPrice}/-</h1>
  </div>}
  {cart.length==0 &&
<div className='empty-cart'>
  <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png" alt="" />
</div>}

  <div>
    {cart.map((e)=>(
      <div className='cartprod'>
           <img src={e.strMealThumb} alt="" />
           <p>{e.strMeal}</p>
           <div className='cart-count'>
           <button onClick={()=>handleRemovecart(e)}>-</button>
           <p>{e.amount}</p> 
                    <button onClick={()=>handleAddproduct(e)} >+</button>
                 

           </div>
          <p>Rs:300/-</p>
          <div className='removecart'>
          <button onClick={()=>handleRemoveproduct(e)}>remove</button>

          </div>
      </div>
     
    ))}
  </div>


</div>
}

    </>
  )
}
