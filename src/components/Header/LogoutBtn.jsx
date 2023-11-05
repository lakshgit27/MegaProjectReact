import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'


function LogoutBtn() {

    // You have to keep in mind , logout is actually a promise - jisse handle krne ke liye .then lagaya below
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        authService.logout().then(() =>{
            dispatch(logout())
        })
    }
    return (
        <button
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}
        >Logout</button>
    )
}
  

export default LogoutBtn