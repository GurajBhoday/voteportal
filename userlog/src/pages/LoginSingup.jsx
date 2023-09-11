import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const LoginSingup = () => {
  return (
    <div className='h-[100vh] w-full bg-gray flex' >
        <div className="w-2/4 flex justify-center h-screen items-center login-signup-left" >
            <div>

            <h1>Log in Sign up</h1>
            <p>Use this Button in any of your project for free</p>

            <div className='flex space-x-2 justify-center mt-[374px]'>
            <NavLink to={"/login"} className='login-signup-button'>Log in</NavLink>
            <NavLink to={"/signup"} className='login-signup-button'>Sign up</NavLink>
            </div>
            <small>Copy the button and use it in you designs or you can copy the component from the assets page</small>
            </div>
            
        </div>
        <div className="w-2/4 flex justify-center h-screen items-center" >

            <Outlet />


        </div>
        

        
    
    </div>
  )
}

export default LoginSingup