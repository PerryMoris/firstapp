import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import Root from "./components/Root"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Profile from "./components/Profile"

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
                }
            ]
        }
    ]
)

export default router