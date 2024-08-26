import React from 'react'
import MyNavbar from "../Component/Navbar";
import { Outlet } from 'react-router-dom'

function NavLayout() {
    return (
    <>
     <MyNavbar /> 
     <Outlet />
     </>
    )
}

export default NavLayout;
