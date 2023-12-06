import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from "../assets/react.svg"
import Logout from "../assets/Logout.svg"
import Subtract from "../assets/Subtract.svg"
import Category from "../assets/Category.svg"
import Vcard from "../assets/Vcard.svg"
import { getToken, getUserDetails, loginUserAuth, logoutUserAuth } from '../services/auth'
import { privateAxios } from '../services/helper'
import { toast } from 'react-toastify'
import VCard from '../pages/VCard'

const Sidebar = () => {
  let navigate = useNavigate()
  const [user,setUser] = useState(getUserDetails())

  console.log(getToken())

  const logOutHandler=()=>{
    privateAxios.get("user/logout")
    .then(response=>response.data)
    .then(data=>{
      console.log(data)
      toast.info("User logged out successfully")
      logoutUserAuth()
      navigate("/login")
    }).catch(error=>{
      console.log(error)
    })
    
  }

  return (
    <div className='h-full bg-white w-[80px] py-5 px-0 flex flex-col items-center justify-between'>

        <div className='w-full flex flex-col justify-center items-center'>
        <button className='inline mb-5'>
            <img src={Subtract} alt="logo" />
            <h1 className='text-[22px] '>  </h1>
        </button>

        <Link to={"category"} className='flex w-full p-1 items-center justify-center sidebar-active'>
          <img src={Category} alt="category" />
        </Link>
        <br />
        <Link to={"vcard"} className='flex w-full p-1 items-center justify-center'>
          <img src={Vcard} alt="vcard" />
        </Link>

        </div>

        <div className='flex flex-col space-y-2 justify-center'>
          <Link to={"profile"}>
            <img  className='rounded w-[35px]' src={user.pic} alt="pic" />
          </Link>
          
          <a href="#" onClick={logOutHandler} className='gray-400' ><img width={25} src={Logout} alt="logout" /></a>
        </div>
    </div>
  )
}

export default Sidebar