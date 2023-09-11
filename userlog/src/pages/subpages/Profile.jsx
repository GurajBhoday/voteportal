import React, { useState } from 'react'
import Logo from "../../assets/react.svg"
import User from '../../components/User'
import UserUpdate from '../../components/UserUpdate'
import { getUserDetails } from '../../services/auth'

const Profile = () => {
    const local_user = getUserDetails()
        //setUser({name:user.name,email:user.email,pic:user.pic})
    const [user,setUser] = useState({name:local_user.name,email:local_user.email,pic:local_user.pic})
    const [image,setImage] = useState("")

    const updateName=(name1)=>{
        setUser({...user,name:name1})
    }

    const updateFile=(file)=>{
        setImage(file)
    }

    const updateHandler=()=>{
        console.log(user)
    }

    const cancelHandler=()=>{
        const user = getUserDetails()
        setUser({name:user.name,email:user.email,pic:user.pic})
    }
    
  return (
    <div className='mx-4 w-full px-5 h-min'>
    <h1 className='text-[24px] font-bold'>Profile</h1>

    <User user={user} />

    <UserUpdate user={user} updateName={updateName} updateFile={updateFile} updateHandler={updateHandler} />


    <button>Edit</button>
    
    </div>
  )
}

export default Profile