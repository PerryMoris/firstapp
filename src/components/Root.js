import React from 'react'
import Header from "./Header"
import BottomNav from "./BottomNav"
import { Outlet} from "react-router-dom"


export default function Root(){
    return (
        <div >
      <Header />
      <BottomNav />
      <Outlet />
       
    </div>
    )
}