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
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                    index: true
                },
                {
                    path: "/projects",
                    element: <Projects />,
                },
                {
                    path: "/profile",
                    element: <Profile />,
                }, {
                    path: "/login",
                    element: <Login />
                },
                {
                    path: "/register",
                    element: <Register />
                },
            ],
            errorElement: <NotFound />,
        }
       
    ]
)

export default router