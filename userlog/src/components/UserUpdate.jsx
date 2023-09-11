import React, { useState } from 'react'
import Logo from "../assets/react.svg"
const UserUpdate = ({user,updateName,updateFile,updateHandler}) => {
    // const [user,setUser] = useState({
    //     name:"",
    //     email:"",
    //     password:""
    //   })
    const [image,setImage] = useState("")
  return (
    <div className='mt-4 border bg-white rounded inline-block p-5 flex space-x-4 w-max items-center'>

        <img className='h-[55px] w-[55px] rounded'  src={user?.pic} alt="profile" />
        <table className='text-gray-500'>
        <tr >
                <td>Email :</td>
                <td>
                    {user?.email}
                </td>
                </tr>
            <tr>
                <td>Name : </td>
                <td>
                    <input type="text" onChange={(e)=>updateName(e.target.value)}  name='name' id='name' placeholder='Name' className='w-full border p-2 rounded' />
                </td>
            </tr>
            <tr>
                <td>Profile : </td>
                <td>
                    <input type="file" onChange={(e)=>updateFile(e.target.files[0])}  id='file' placeholder='Profile' className='w-full border p-2 rounded' />
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <button onClick={updateHandler} className='bg-blue text-white py-1 px-2'>Submit</button>
                </td>
            </tr>
            
           
        </table>

    </div>
  )
}

export default UserUpdate