import React from 'react'
import {createBrowserRouter, Navigate} from "react-router-dom"
import Root from "./components/Root"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Profile from "./components/Profile"
import Login from "./components/Login"
import Register from "./components/Register"
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

function Logout(){
    localStorage.clear()
    return <Navigate />
}

function RegisterAndLogout(){
    localStorage.clear()
    return <Register />
}


const router = createBrowserRouter(
    [
        {
            path: "/login",
            element: <Login />,
            errorElement: <NotFound />,
        },
        {
            path: "/register",
            element: <RegisterAndLogout />,
            errorElement: <NotFound />,
        },
        {
            path: "/",
            element: <ProtectedRoute><Root /></ProtectedRoute>,
            children: [
                {
                    path: "/",
                    element: <ProtectedRoute><Home /></ProtectedRoute>,
                    index: true
                },
                {
                    path: "/projects",
                    element: <ProtectedRoute><Projects /></ProtectedRoute>,
                },
                {
                    path: "/profile",
                    element: <ProtectedRoute><Profile /></ProtectedRoute>,
                }, 
                
                
            ],
            errorElement: <NotFound />,
        }
       
    ]
)

export default router