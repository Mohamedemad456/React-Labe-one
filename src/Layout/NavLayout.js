import React from 'react';
import MyNavbar from "../Component/Navbar";
import { Outlet } from 'react-router-dom';
import Breadcrumbs from '../Component/BreadCrumbs/BreadCrumps';

function NavLayout() {
    return (
    <>
     <MyNavbar /> 
     <Breadcrumbs />
     <Outlet />
     </>
    )
}

export default NavLayout;
