import React from 'react'
import { Navigate, Outlet} from 'react-router-dom';
const checkAuth = ()=>{      
    const token = localStorage.getItem('token');
    return token===null?true:false
}
export const AuthProtectedRoute = () => {
    const check = checkAuth();
    return check?<Outlet/>:<Navigate to={'/homepage'}/>;
}
