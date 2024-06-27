import React from 'react'
import Footer from "./Footer"
import Header from "./Header"
import {Link, Outlet} from "react-router-dom"


export default function Root(){
    return (
        <div >
      <Header />
      <div className="flex-apart">
        <Link to="/">Go Home</Link>
        <Link to="/projects">Projects</Link>
      </div>
      <Outlet />
      <Footer />
    </div>
    )
}