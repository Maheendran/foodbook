import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import '../style/Login.css'
import { auth } from '../Firebase'
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
export const Login = ({cart,handleRemoveproduct,handleAddproduct,handleRemovecart}) => {
  const[toggle,setToggle]=useState(true)
  const navigate=useNavigate()
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  

  const sigin=()=>{
    signInWithEmailAndPassword(auth,email,password)
  .then(auth=>navigate('/'))

  .catch(error=>console.error(error) )
  }
  const register=()=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(auth=>navigate('/'))
 
  .catch(error=>console.error(error) )
  }
  return (
    <div>
<Navbar  cart={cart}handleAddproduct={handleAddproduct} handleRemoveproduct={handleRemoveproduct} handleRemovecart={handleRemovecart}/>

<div className='login-banner' >
  <div className='left-login-banner'>
  <img src="https://js.pngtree.com/web3/images/index-new/5380726.png?v=a" alt="" />
  </div>

  <div className='right-login-banner'>
 {toggle ? 
 <div className='Login-sec'>
  <h1>Login In</h1>
  <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='email' />
        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password' />
        <button onClick={sigin}>Login In</button>
  <p onClick={()=>setToggle(!toggle)}>Sign Up</p>
 </div>
:
 <div className='Login-sec'>
  <h1>Sign Up</h1>
<input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='email' />
<input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password' />
<button onClick={register}>Sign Up</button>
  <p onClick={()=>setToggle(!toggle)}>Login In</p>
 </div>
}
  </div>

</div>

</div>
  )
}
