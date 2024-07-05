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
import UpdateTaskForm from "./components/Update"
import Tasks from './components/Tasks'
import ProjectDetails from './components/ProjectDetails'
import Stakeholder from './components/Stakeholders'



function Logout(){
    localStorage.clear()
    return <Navigate to="/login" />
}

function RegisterAndLogout(){
    localStorage.clear()
    return <Register route="/api/user/register/" method="register" />
}



const router = createBrowserRouter(
    
    [
        {
            path: "/login",
            element: <Login route="/api/token/" method="login"/>,
            errorElement: <NotFound /> ,
        },
        {
            path: "/logout",
            element: <Logout />,
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
                    path: "/updatetask/:id",
                    element: <ProtectedRoute><UpdateTaskForm /></ProtectedRoute>,
                },
                {
                    path: "/profile",
                    element: <ProtectedRoute><Profile /></ProtectedRoute>,
                }, 
                {
                    path: "/tasks",
                    element: <ProtectedRoute><Tasks /></ProtectedRoute>,
                }, 
                {
                    path: "/stakeholder",
                    element: <ProtectedRoute><Stakeholder /></ProtectedRoute>,
                }, 
                {
                    path: "/projectdetails/:projectId",
                    element: <ProtectedRoute><ProjectDetails /></ProtectedRoute>,
                },
                
            ],
            errorElement: <NotFound />,
        }
       
    ]
)

export default router