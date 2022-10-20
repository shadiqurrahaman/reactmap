import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
const checkAuth = ()=>{      
        const token = localStorage.getItem('token');
        return token===null?false:true
}
export const ProtectedRoutes = () => {
    const check = checkAuth();
    return check?<Outlet/>:<Navigate to={'/'}/>;
    
}
