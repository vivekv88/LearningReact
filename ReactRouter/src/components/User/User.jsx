import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div className='text-5xl my-10 text-white text-center m-auto bg-gray-600 w-[70vw] h-full'>
      User : {userid}
    </div>
  )
}

export default User
