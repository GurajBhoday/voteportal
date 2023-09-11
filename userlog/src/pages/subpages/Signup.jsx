import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../services/user-service'
import { toast } from 'react-toastify'


const Signup = () => {
  let navigate = useNavigate()
  const [user,setUser] = useState({
    name:"",
    email:"",
    password:""
  })

  const signupHandler=()=>{
    registerUser(user).then(data=>{
      toast.success(data)
      console.log(data)
      navigate("/login")
    }).catch(err=>{
      console.log(err)
      toast.error(""+err?.response?.data?.message)
    })
  }

  return (
    <div className='bg-white w-full sm:w-[400px] flex-col border rounded  login-box space-y-4 justify-center items-center p-5'>

      <h2 className='inline-block'>
        Sign Up
      </h2>

      {/* <button className='btn-google w-full rounded'> <img src={GoogleLogo}  alt="" /> Continue with Google</button> */}

        <input type="text" onChange={(e)=>setUser({...user,"name":e.target.value})} value={user.name} name='name' id='name' placeholder='Name' className='w-full border p-2 rounded' />
      
        <input type="text" onChange={(e)=>setUser({...user,"email":e.target.value})} value={user.email} id='email' placeholder='Email Address' className='w-full border p-2 rounded' />

        <input type="password" onChange={(e)=>setUser({...user,"password":e.target.value})} id='password' value={user.password} placeholder='Password' className='w-full border p-2 rounded' />

        <button onClick={signupHandler} className='w-full rounded bg-blue text-white'>Sign Up</button>
    
        <p className='text-gray-500'>Already have an account ? <Link  to={"/login"} className='text-blue'> Log In</Link> </p>
    </div>
  )
}

export default Signup