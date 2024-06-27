import React from 'react'
import Footer from "./Footer"
import Header from "./Header"
import {Link, Outlet} from "react-router-dom"


export default function Root(){
    return (
        <div >
      <Header />
      
      <Outlet />
      <Footer />
    </div>
    )
}