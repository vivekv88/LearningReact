import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {

    const dispatch = useDispatch();
    const logoutHandler = () => {
        authservice.logout().then(() => {
            dispatch(logout());
        });
    }

  return (
    <div>
      <button 
      onClick={logoutHandler}
      className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
        Logout
      </button>
    </div>
  )
}

export default LogoutBtn
