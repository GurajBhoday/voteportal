import React, { useState } from 'react'
import GoogleLogo from "../../assets/google-logo.svg"
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../services/user-service'
import { toast } from 'react-toastify'
import { loginUserAuth } from '../../services/auth'

const Login = () => {

  let navigate = useNavigate()
  const [user,setUser] = useState({
    email:"",
    password:""
  })

  const loginHandler=()=>{
    loginUser(user).then(data=>{
      console.log(data)
      loginUserAuth(data)
      toast.success("Logged In Successfully !!!")
      navigate("/dashboard/category")
    }).catch(err=>{
      console.log(err)
      toast.error(""+err?.response?.data?.message)
    })
  }

  return (
    <div className='bg-white w-full sm:w-[400px] flex-col border rounded  login-box space-y-4 justify-center items-center p-5'>

      <h2 className='inline-block'>
        Log In
      </h2>

      {/* <button className='btn-google w-full rounded'> <img src={GoogleLogo}  alt="" /> Continue with Google</button> */}

      
        <input type="text" onChange={(e)=>setUser({...user,"email":e.target.value})} value={user.email} id='email' placeholder='Email Address' className='w-full border p-2 rounded' />

        <input type="password" onChange={(e)=>setUser({...user,"password":e.target.value})} id='password' value={user.password} placeholder='Password' className='w-full border p-2 rounded' />

        <button onClick={loginHandler} className='w-full rounded bg-blue text-white'>Log In</button>
    
        <p className='text-gray-500'>Don't have account ? <Link to={"/signup"} className='text-blue'> Signup Now</Link> </p>
    </div>
  )
}

export default Login