import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { logout } from '../store/authSlice'
import authService from '../appwrite/auth'

export default function AuthLayout({children, authentication = true}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loader,setLoader] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        // Verify session is still valid
        authService.getCurrentUser()
            .then((userData) => {
                if (!userData && authStatus) {
                    // Session expired, logout
                    dispatch(logout())
                    navigate('/login')
                }
            })
            .catch(() => {
                dispatch(logout())
                navigate('/login')
            })

        // Check authentication requirements
        if (authentication && !authStatus) {
            navigate('/login')
        } else if (!authentication && authStatus) {
            navigate('/')
        }
        setLoader(false)
    }, [authentication, authStatus, navigate, dispatch])
    

  return loader ? <h1>Loading...</h1> : <>{children}</>
}
