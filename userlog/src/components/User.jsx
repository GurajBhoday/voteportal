import React from 'react'
import Logo from "../assets/react.svg"

const User = ({user}) => {
  return (
    <div className='mt-4 border bg-white rounded inline-block p-5 flex space-x-2 w-max'>

        <img  className='rounded h-[55px] w-[55px]' src={user.pic} alt="profile" />
        <table className='text-gray-500'>
            <tr>
                <td>Name : </td>
                <td>{user?.name}</td>
            </tr>
            <tr >
                <td>Email :</td>
                <td>{user.email}</td>
            </tr>
        </table>

    </div>
  )
}

export default User