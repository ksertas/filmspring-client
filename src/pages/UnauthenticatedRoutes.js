import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { UserContext } from '../context/UserContext';

export default function UnauthenticatedRoutes() {

    const { auth } = useContext(AuthContext);
    const { user } = useContext(UserContext);

    return auth ? <Navigate to={`/profile/${user.username}`} /> : <Outlet />
}